class HttpService {
    async get(url){
        return await fetch(url).then(res => res.json());
    }
}
export const http = new HttpService();
