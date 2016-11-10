function gameCfg(cfg) {
  cfg.comm = {
    INIT_COIN: 0,  // 初始金币
    INIT_POINT: 0, // 初始积分
    MAX_RANK_NUM: 100, // 排行榜最大位数
  };

  /**
   * 场次类型
   * 总局时（分钟）
   * 步时（分钟）
   * 读秒（秒）
   */
  cfg.field = {
    '0': { name: '十分钟场', sceneId: 9027, time: 10 },
    '1': { name: '二十分钟场', sceneId: 8027, time: 20 },
    '2': { name: '棋力测评', sceneId: 7027, time: 10 },
  };

  /**
   * 房间类型
   * cost：每局消耗
   * ante：底注
   * entry：进场资格
   */
  cfg.room = {
    '0': { name: '路边摊', cost: 50, ante: 200, entry: 2000},
    '1': { name: '大衙门', cost: 250, ante: 1000, entry: 10000},
    '2': { name: '翰林院', cost: 2000, ante: 8000, entry: 80000},
  };

  cfg.buy = {
    '0': { name: '铜钱20000', cy: 'rmb', price: 2, coin: 20000, addNum: 0, desc: '铜钱20000' },
    '1': { name: '铜钱50000', cy: 'rmb', price: 5, coin: 50000, addNum: 5000, desc: '铜钱50000' },
    '2': { name: '铜钱100000', cy: 'rmb', price: 10, coin: 100000, addNum: 20000, desc: '铜钱100000' },
  };

  // 每日签到
  cfg.dayGift = {
    '0': { name: '第1天', gains: { type: 'coin', num: 100 }},
    '1': { name: '第2天', gains: { type: 'coin', num: 200 }},
    '2': { name: '第3天', gains: { type: 'coin', num: 300 }},
    '3': { name: '第4天', gains: { type: 'coin', num: 500 }},
    '4': { name: '第5天', gains: { type: 'coin', num: 600 }},
    '5': { name: '第6天', gains: { type: 'coin', num: 700 }},
    '6': { name: '7天以上', gains: { type: 'coin', num: 1300 }},
  };
}

if (typeof (module) !== 'undefined') {
  module.exports = gameCfg;
}
