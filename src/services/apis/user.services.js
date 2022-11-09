import http from "../../http-common";
import { header, Logheader } from "../auth/auth";


class SERVICE_USERS {

    getAll_profesionals(id_public) {
        return http.get(`/profesionals`, Logheader());
    }

    create(data) {
        return http.post(`/profesionals`, data, Logheader());
    }

    update(id, data) {
        return http.put(`/profesionals`, data, Logheader());
    }

    delete(id) {
        return http.delete(`/profesionals`, Logheader());
    }

}

export default new SERVICE_USERS();