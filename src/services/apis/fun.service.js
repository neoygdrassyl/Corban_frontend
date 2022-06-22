import http from "../../http-common";

let header = () => {
  let token = localStorage.getItem('corban_jwt');
  let conn = localStorage.getItem('corban_conn');
  return { headers: { Authorization: 'Bearer ' + token, dbIndex: JSON.parse(conn).conn || '' } }
}

const route = "fun"
class FunService {

  // GET
  getAll(dataStart, dateEnd) { return http.get(`/${route}/${dataStart}&${dateEnd}`, header()); }
  getGeneral(id) { return http.get(`/${route}/${id}`, header()); }
  get_fun_IdPublic(id_public) { return http.get(`/${route}/get/idpublic/${id_public}`, header()); }
  getLastIdPublic() {return http.get(`/${route}/getlast/id`, header());}
}


export default new FunService();