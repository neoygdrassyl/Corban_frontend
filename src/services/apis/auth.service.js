import http from "../../http-common";
import { header } from "../auth/auth";

class AtuhService {
  appLogin(data) {return http.post(`/login`, data);}
  verifyLogin(token) {return http.get(`/verify`, { headers: { Authorization: 'Bearer ' + token} });}
  loadCompanies(idUser, token) {return http.get(`/companies/${idUser}`, { headers: { Authorization: 'Bearer ' + token} });}

  loadWorkers(dbIndex) {return http.get(`/workers/${dbIndex}`, header());}
  loadWorkerData(dbIndex, idUser) {return http.get(`/workerdata/${dbIndex}%${idUser}`, header());}
}

export default new AtuhService();