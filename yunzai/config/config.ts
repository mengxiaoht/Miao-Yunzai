import { watch } from 'chokidar'
import { parse } from 'yaml'
import { join } from 'node:path'
import { readFileSync, } from 'node:fs'
/**
 * ********
 * 配置文件
 * ********
 */
class ConfigController {
  #config = {}
  #watcher = { config: {}, defSet: {} }
  #package = null

  /**
   * 机器人qq号
   * @deprecated 已废弃
   */
  get qq() {
    return Number(this.getConfig('qq').qq)
  }

  /**
   * 密码
   * @deprecated 已废弃
   */
  get pwd() {
    return String(this.getConfig('qq').pwd)
  }

  /**
   * icqq配置
   */
  get bot() {
    const bot = this.getConfig('bot')
    const defbot = this.getdefSet('bot')
    const Config = { ...defbot, ...bot }
    Config.platform = this.getConfig('qq').platform
    // /data/icqq/qq
    Config.data_dir = join(process.cwd(), `/data/icqq/${this.qq}`)
    if (!Config?.ffmpeg_path) delete Config.ffmpeg_path
    if (!Config?.ffprobe_path) delete Config.ffprobe_path
    return Config
  }

  /**
   * 
   */
  get other() {
    return this.getConfig('other')
  }

  /**
   * 
   */
  get redis() {
    return this.getConfig('redis')
  }

  /**
   * 
   */
  get renderer() {
    return this.getConfig('renderer');
  }

  /**
   * 
   * @deprecated 已废弃
   */
  get notice() {
    return this.getConfig('notice');
  }

  /**
   * 主人qq
   */
  get masterQQ() {
    const qqs = this.getConfig('other')?.masterQQ || []
    if (Array.isArray(qqs)) {
      return qqs.map(qq => String(qq))
    } else {
      return [String(qqs)]
    }
  }


  /**
   * package.json 
   */
  get package() {
    if (this.#package) return this.#package
    try {
      const data = readFileSync(join(process.cwd(), 'package.json'), 'utf8')
      this.#package = JSON.parse(data)
      return this.#package
    } catch {
      return {
        version: '4.0.0'
      }
    }
  }

  /**
   * 群配置
   * @param groupId 
   * @returns 
   */
  getGroup(groupId: number | string = '') {
    const config = this.getConfig('group')
    const defCfg = this.getdefSet('group')
    if (config[groupId]) {
      return { ...defCfg.default, ...config.default, ...config[groupId] }
    }
    return { ...defCfg.default, ...config.default }
  }

  /**
   * other配置
   * @returns 
   */
  getOther() {
    const def = this.getdefSet('other')
    const config = this.getConfig('other')
    return { ...def, ...config }
  }

  /**
   * notice配置
   * @returns 
   */
  getNotice() {
    const def = this.getdefSet('notice')
    const config = this.getConfig('notice')
    return { ...def, ...config }
  }

  /**
   * 得到默认配置
   * @param name 配置文件名称
   * @returns 
   */
  getdefSet(name: string) {
    return this.getYaml('default_config', name)
  }

  /**
   * 得到生成式配置
   * @param name 
   * @returns 
   */
  getConfig(name: string) {
    return this.getYaml('config', name)
  }

  /**
   * 获取配置yaml
   * @param type  
   * @param name 名称
   */
  getYaml(type: 'config' | 'default_config', name: string) {
    const file = `config/${type}/${name}.yaml`
    const key = `${type}.${name}`
    // 存在则读取
    if (this.#config[key]) return this.#config[key]
    // 不存在的
    const data = readFileSync(file, 'utf8')
    this.#config[key] = parse(data)
    // 监听
    this.watch(file, name, type)
    return this.#config[key]
  }

  /**
   * 监听配置文件
   * @param file 
   * @param name 
   * @param type 
   * @returns 
   */
  watch(file: string, name: string, type = 'default_config') {
    const key = `${type}.${name}`
    // 监听key
    if (this.#watcher[key]) return
    const watcher = watch(file)
    watcher.on('change', () => {
      // 清理缓存
      delete this.#config[key]
      // bot没启动
      if (typeof global.Bot == 'undefined') return
      // 修改了qq配置
      if(type == 'qq'){
        if (process.argv.includes('login') || !this.qq) return
        logger.info('修改机器人QQ或密码，请手动重启')
      }
      //
      logger.mark(`[修改配置文件][${type}][${name}]`)
    })
    this.#watcher[key] = watcher
  }

}


export default new ConfigController()