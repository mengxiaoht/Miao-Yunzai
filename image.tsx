import React from 'react'
import { Component, Puppeteer } from 'yunzai/utils'
import Hello, { PropsType } from './views/hello.tsx'
// 初始化 组件渲染对象
const Com = new Component()
export class Image {
    Pup: typeof Puppeteer.prototype = null
    /**
    * 初始化运行Puppeteer
    */
    constructor() {
        // init
        this.Pup = new Puppeteer()
        // start
        this.Pup.start()

        this.Pup.setLaunch({
            defaultViewport: {
              width: 1280,
              height: 800
            }
          })
    }
    /**
     * 为指定用户生成html 生成指定数据下的html文件
     * @param uid 用户编号
     * @param Props 组件参数
     * @returns 
     */
    createHello(uid: number, Props: PropsType) {
        // 生成 html 地址 或 html字符串
        const Address = Com.create(<Hello {...Props} />, {
            // html/hello/uid.html
            join_dir: 'hello',
            html_name: `${uid}.html`,
        })
        return this.Pup.render(Address,{
            tab: ''
        })
    }
}
// 初始化 图片生成对象
export const imgae = new Image()