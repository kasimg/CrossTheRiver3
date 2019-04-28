"use strict";
cc._RF.push(module, '926117TetVE85WiFib40+8Q', 'AudioControl');
// Script/AudioControl.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    tigerRoar: {
      default: null,
      type: cc.AudioSource
    },
    deerSound: {
      default: null,
      type: cc.AudioSource
    }
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();