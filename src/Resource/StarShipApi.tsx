import baseurl from "./baseurl";

// Starships  Resource
class StarShipApi {
     getAll() {
         return baseurl.get('/starships');
     }
     getWithId(id: string) {
        return baseurl.get('/starships/' + id);   
     }
}


export default  new StarShipApi;