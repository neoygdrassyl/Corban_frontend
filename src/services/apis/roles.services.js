import http from "../../http-common";
import { header } from "../auth/auth";

const route = "roles"

class SERVICE_ROLES {

    getAll(bdId, userId) {
        return http.get(`/${route}/${bdId}&${userId}`, header());
    }

    getAllCompany(id_public) {
        return http.get(`/${route}/company/${id_public}`, header());
    }

    create(data) {
        return http.post(`/${route}`, data, header());
    }

    update(id, data) {
        return http.put(`/${route}/${id}`, data, header());
    }

    delete(id) {
        return http.delete(`/${route}/${id}`, header());
    }

}

export default new SERVICE_ROLES();