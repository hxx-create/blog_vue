//src/api/common.js
import request from '@/utils/request'

/**
 * POST 方法 与 GET方法  区别
 *
 * post==> data: obj
 * get==>params: obj
 *
 */
// 例如(post)：
 export function login(obj) {
   return request({
     url: '/api/login', 
     method: 'post',
     data: obj,   
   })
 }
 export function register(obj) {
   return request({
     url: '/api/register',  
     method: 'post',
     data: obj,   
   })
}
export function getUserData(obj) {
  return request({
    url: '/api/user/info',  
    method: 'get',
    params: obj,   
  })
}
export function getArticleList(obj) {
  return request({
    url: '/api/articleList',  
    method: 'get',
    params: obj,   
  })
}
export function getArticleDet(obj) {
  return request({
    url: '/api/articleDetail',  
    method: 'get',
    params: obj,   
  })
}