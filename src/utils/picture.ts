import { Component } from './component'
import { Puppeteer } from './puppeteer'
export class Picture {
  Pup: typeof Puppeteer.prototype = null
  Com: typeof Component.prototype = null
  constructor() {
    this.Com = new Component()
    this.Pup = new Puppeteer()
  }
}
