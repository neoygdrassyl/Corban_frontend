import http from "../../http-common";
import { header } from "../auth/auth";

class AtuhService {
  appLogin(data) { return http.post(`/login`, data); }
  appSignUp(data) { return http.post(`/signup`, data); }
  verifyLogin(token) { return http.get(`/verify`, { headers: { Authorization: 'Bearer ' + token } }); }
  // VERIFIY ACCOUNT
  appVerifyAccount(data, token) { return http.post(`/accountverify`, data, { headers: { Authorization: 'Bearer ' + token } }) }
  appVerifyAccountEmail(data) { return http.post(`/accountverifyemail`, data) }

  // INVITE
  inviteUSer(data) { return http.post(`/invitation`, data, header()) }

  // PASSWORD RESET
  appResetEmail(data) { return http.post(`/reset`, data); }
  appResetPassword(data, token) { return http.post(`/resetpass`, data, { headers: { Authorization: 'Bearer ' + token } }) }
  appResetVerify(token) { return http.get(`/resetverify`, { headers: { Authorization: 'Bearer ' + token } }); }

  loadCompanies(idUser, token) { return http.get(`/companies/${idUser}`, { headers: { Authorization: 'Bearer ' + token } }); }
  loadWorkers(dbId) { return http.get(`/workers/${dbId}`, header()); }
  loadWorkerData(dbId, idUser) { return http.get(`/workerdata/${dbId}%${idUser}`, header()); }
}

export default new AtuhService();