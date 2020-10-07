import {request} from "./request"
export function getDetail(iid) {
  return request({
    url:'detail',
    params:{
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url:'recommend'
  })

}
export class Goods {
  constructor(itemInfo,columns) {
    this.title=itemInfo.title;

    this.highPrice=itemInfo.highPrice
    this.highNowPrice=itemInfo.highNowPrice
    this.lowNowPrice=itemInfo.lowNowPrice
    // 活动价
    this.discountDesc=itemInfo.discountDesc

    this.desc=itemInfo.desc
    //
    this.columns=columns
  }
}

export class shop {
  constructor(shopInfo) {
    this.shopLogo=shopInfo.shopLogo
    this.name=shopInfo.name;
    this.cSells=shopInfo.cSells;
    this.cGoods=shopInfo.cGoods;

    this.score=shopInfo.score
  }
}
export class GoodsParam {
  constructor(info,rule) {
    // 有商品图片就保存，没有就给个null
    this.image=info.images? info.images[0]:'';
    this.infos=info.set;
    this.tables=rule.tables;
  }
}
