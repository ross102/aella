import baseurl from "./baseurl";

// Planet Resource
class PlanetApi {
     getAll() {
         return baseurl.get('/planets');
     }
     getWithId(id: string) {
        return baseurl.get('/planets/' + id);   
     }
}


export default  new PlanetApi;