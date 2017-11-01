import request from 'utils/request';

//暴露出fetch； 模拟请求 '/api/count' 接口
export function fetch() {
    return request('/api/count');
}