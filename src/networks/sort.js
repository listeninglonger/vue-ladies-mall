import {request} from './request'
export function getSortData(){
  return request({
    url:'/category'
  })
}
export function getMenuDetail(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getCategoryDetail(miniWallkey,type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
