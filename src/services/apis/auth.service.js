import http from "../../http-common";
import { header } from "../auth/auth";

class AtuhService {
  appLogin(data) { return http.post(`/login`, data); }
  appSignUp(data) { return http.post(`/signup`, data); }
  verifyLogin(token) { return http.get(`/verify`, { headers: { Authorization: 'Bearer ' + token } }); }
  
  // PASSWORD RESET
  appResetEmail(data) { return http.post(`/reset`, data); }
  appResetPassword(data, token) { return http.post(`/resetpass`, data, { headers: { Authorization: 'Bearer ' + token } }) }
  appResetVerify(token) { return http.get(`/resetverify`, { headers: { Authorization: 'Bearer ' + token } }); }
  
  loadCompanies(idUser, token) { return http.get(`/companies/${idUser}`, { headers: { Authorization: 'Bearer ' + token } }); }
  loadWorkers(dbIndex) { return http.get(`/workers/${dbIndex}`, header()); }
  loadWorkerData(dbIndex, idUser) { return http.get(`/workerdata/${dbIndex}%${idUser}`, header()); }
}

export default new AtuhService();