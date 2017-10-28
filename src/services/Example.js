import request from '../utils/request';

export default function query() {
  return request('/api/users');
}
