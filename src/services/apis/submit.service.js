import http from "../../http-common";
import { header } from "../auth/auth";

const route = "submit"

class SERVICE_SUBMIT {

    getAll() {
        return http.get(`/${route}`, header());
    }
    get(id) {
        return http.get(`/${route}/${id}`, header());
    }
    getSearch(field, string) {
        return http.get(`/${route}/getsearch/${field}&${string}`, header());
    }
    getlastid() {
        return http.get(`/${route}/getid/lastid`, header());
    }
    verifyid(id) {
        return http.get(`/${route}/getid/verifyid/${id}`, header());
    }
    getIdRelated(id_related) {
        return http.get(`/${route}/getlist/${id_related}`, header());
    }


    create(data) {
        return http.post(`/${route}`, data, header());
    }
    create_list(data) {
        return http.post(`/${route}/create_list`, data, header());
    }
    create_anex(data) {
        return http.post(`/${route}/anex/`, data, header());
    }


    update(id, data) {
        return http.put(`/${route}/${id}`, data, header());
    }
    update_list(id, data) {
        return http.put(`/${route}/update_list/${id}`, data, header());
    }
    update_anex(id, data) {
        return http.put(`/${route}/anex/${id}`, data, header());
    }


    delete(id) {
        return http.delete(`/${route}/${id}`, header());
    }
    delete_list(id) {
        return http.delete(`/${route}/delete_list/${id}`, header());
    }
    delete_anex(id) {
        return http.delete(`/${route}/delete_anex/${id}`, header());
    }

    deleteAll() {
        return http.delete(`/${route}`, header());
    }

    gen_doc_submit(data) {
        return http.post(`/${route}/gendoc/submit`, data, header());
    }

}

export default new SERVICE_SUBMIT();