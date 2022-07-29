import http from "../../http-common";
import { header } from "../auth/auth";

const route = "workers"

class SERVICE_WORKERS {

    getAll(id_public) {
        return http.get(`/${route}/${id_public}`, header());
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

export default new SERVICE_WORKERS();