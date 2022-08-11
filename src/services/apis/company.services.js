import http from "../../http-common";
import { header, Logheader } from "../auth/auth";

class SERVICE_COMPANY {
    // DICTIONARY QUERIES
    get_dic_lic() { return http.get(`/dict/lic`, header()); }
    get_dic_oa() { return http.get(`/dict/oa`, header()); }
    get_dic_in() { return http.get(`/dict/in`, header()); }
    get_dic_out() { return http.get(`/dict/out`, header()); }
    get_dic_res() { return http.get(`/dict/res`, header()); }
    get_dic_cert() { return http.get(`/dict/cert`, header()); }
    get_dic_tit() { return http.get(`/dict/tit`, header()); }
    get_dic_prof() { return http.get(`/dict/prof`, header()); }
    get_dic_prev() { return http.get(`/dict/prev`, header()); }
}

export default new SERVICE_COMPANY();