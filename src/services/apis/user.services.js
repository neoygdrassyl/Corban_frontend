import http from "../../http-common";
import { header, Logheader } from "../auth/auth";


class SERVICE_USERS {

    getAll_profesionals(id_public) {
        return http.get(`/profesionals/update`, Logheader());
    }

    create(data) {
        return http.post(`/profesionals/update`, data, Logheader());
    }

    update(id, data) {
        return http.put(`/profesionals/update`, data, Logheader());
    }

    delete(id) {
        return http.delete(`/profesionals/update`, Logheader());
    }

}

export default new SERVICE_USERS();