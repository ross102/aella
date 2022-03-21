import baseurl from "./baseurl";

// film Resource
class FilmsApi {
     getAll() {
         return baseurl.get('/films');
     }
     getWithId(id: string) {
        return baseurl.get('/films/' + id);   
     }
}


export default  new FilmsApi;