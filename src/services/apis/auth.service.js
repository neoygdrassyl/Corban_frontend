import http from "../../http-common";

class AtuhService {
  appLogin(data) {
    return http.post(`/login`, data);
  }

  verifyLogin(token) {
    return http.get(`/verify`, { headers: { Authorization: 'Bearer ' + token} });
  }

  loadWorkers(dbIndex, token) {
    return http.get(`/workers/${dbIndex}`, {headers: {Authorization: 'Bearer ' + token }});
  }
}

export default new AtuhService();