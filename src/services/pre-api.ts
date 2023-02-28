/**
 * @description xxxx模块-数据服务
 * @author xxxx
 * @time yyyy-MM-dd
 */

import http from './httpConfig';

/**
 * xx功能-登录
 * @param data
 * @returns
 */
export const login = (data: object) => http.post(data, '/user/login');
