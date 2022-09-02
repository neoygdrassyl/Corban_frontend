import http from "../../http-common";
import { header } from "../auth/auth";

const route = "fun"
class FunService {

  // GET
  getAll() { return http.get(`/${route}/`, header()); }
  create(data) { return http.post(`/${route}/`, data, header()); }

  getAllInTime(dataStart, dateEnd) { return http.get(`/${route}/${dataStart}&${dateEnd}`, header()); }
  getGeneral(id) { return http.get(`/${route}/${id}`, header()); }
  get_fun_IdPublic(id_public) { return http.get(`/${route}/get/idpublic/${id_public}`, header()); }
  getLastIdPublic() {return http.get(`/${route}/getlast/id`, header());}

  loadFun6(id) {return http.get(`/${route}/fun6d/${id}`, {...header(),   responseType: 'arraybuffer'});}
}


export default new FunService();