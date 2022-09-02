import http from "../../http-common";
import { header } from "../auth/auth";

const route = "certs"

class SERVICE_DCERTIFICATIONS {

    create(data) { return http.post(`/${route}/`, data, header()); }
    
    findAll() { return http.get(`/${route}/`, header()); }
    findOne(id) { return http.get(`/${route}/id/${id}`, header()); }
    findOneOc(oc) { return http.get(`/${route}/oc/${oc}`, header()); }
    findAllRelated(idr) { return http.get(`/${route}/idr/${idr}`, header()); }

    findProfS(search) { return http.get(`/${route}/data/profs/${search}`, header()); }
    findProf(search) { return http.get(`/${route}/data/prof/${search}`, header()); }
    findFun(search) { return http.get(`/${route}/data/fun/${search}`, header()); }

    genPDF(data) { return http.post(`/${route}/pdf`, data, {...header(), responseType: 'arraybuffer'}); }

}

export default new SERVICE_DCERTIFICATIONS();