import ApiService from "@/services/api.service";
const url = "local";
export const service = {
    getMax(id) {
        return ApiService.get(url+'/maximo', {slug:id});
    },
    getActual(id) {
        return ApiService.get(url+'/actual', { slug: id });
    }
};
export default service;
