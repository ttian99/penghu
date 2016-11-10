## svr-client-cfg

前后端通用配置

```js
cfg.buy 定义
  // 物品计费点 buyid
  //   itemid - wanba and 计费点id
  //   ios_itemid - wanba ios 积分点id
  //   cy 货币类型
  //   price: 价格
  //   dynaPrice: 动态生成cy和price字段
  
  //   coin: 获取的金币数
  //   diam: 获取的钻石数
  //   prop: {id, num} 获取的道具数
  //   hero: id 获取英雄 (如果用户已经拥有该英雄，不会扣货币，并返回购买失败)
  //   attachHero: id 附赠英雄 (如果用户已经拥有该英雄，依然返回成功)
  //   heroUp: id 英雄升级
  //   egg: num 茶叶蛋
  //   sta: num 获取的体力数
  //   fullSta: true 体力恢复满
```