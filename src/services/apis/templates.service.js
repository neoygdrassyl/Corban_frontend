import http from "../../http-common";
import { header } from "../auth/auth";

const route = "templates"

class SERVICE_TEMPLATES {

    getAll() {
        return http.get(`/${route}/`, header());
    }

    getAllbyType(type) {
        return http.get(`/${route}/${type}`, header());
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

    genPDF_TaxCalculation(data) {
        return http.post(`/calc/tc`, data, header());
    }

}

export default new SERVICE_TEMPLATES();