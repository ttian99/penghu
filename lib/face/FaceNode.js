import {resIn} from '../loader/resource.js';
import cfg from '../constants';
import _ from 'lodash';
const console = cfg.logger('FaceNode');
// import {changeSpriteRes} from '../es6-utils/cocos/base.js';

const FaceNode = cc.Sprite.extend({
  defaultFace: resIn.comm.Ltc_XQ_face_default, // 默认头像图片
  faceImg: '', // 获取到的图片
  ctor(qq) {
    // 初始化通过头像背景图创建精灵
    this._super(resIn.comm.Ltc_XQ_face_bg);
    this.checkFace(qq);
  },

  // 刷新头像
  fresh(faceRes) {
    this.checkFace(faceRes);
  },

  // 在这里做不同渠道的判断
  checkFace(qq) {
    // 用于测试的远端头像url。
    // const faceRes = 'http://q.qlogo.cn/g?b=qq&nk=306156862&s=100';
    const faceRes = 'http://q.qlogo.cn/g?b=qq&nk=' + qq + '&s=100' || this.defaultFace;
    const resHead = _.startsWith(faceRes, '#');
    if (resHead) {
      this.getLocalFace(faceRes);
    } else {
      this.getRemoteFace(faceRes);
    }
  },

  // 获取客户端的face图片
  getLocalFace(faceRes) {
    // console.log('--local face--');
    this.faceImg = faceRes;
    this.render(faceRes);
  },

  // 获取远程的face图片
  getRemoteFace(faceRes) {
    cc.loader.loadImg(faceRes, {
      isCrossOrigin: true,
      width: 100,
      height: 100,
    }, (err, img) => {
      if (err) {
        console.log('--remote face: load FaceImg err -- ');
        console.log(err);
        this.faceImg = this.defaultFace;
        this.render(this.defaultFace);
      } else {
        this.render(img);
      }
    });
  },
  // 绘制头像
  render(img) {
    if (!cc.sys.isObjectValid(this)) {
      return;
    }
    if (this.face && cc.sys.isObjectValid(this.face)) {
      this.face.removeFromParent();
    }
    const face = this.face = new cc.Sprite(img);
    face.x = this.width / 2;
    face.y = this.height / 2;
    console.log(face.width, face.height);
    if (face.width !== 64 && face.width !== 0) {
      const scale = 64 / face.width;
      face.scale = scale;
    }
    this.addChild(face);
  },
});

export default FaceNode;
