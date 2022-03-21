import baseurl from "./baseurl";

// People Resource
class PeopleApi {
     getAll() {
         return baseurl.get('/people');
     }
     getWithId(id: string) {
        return baseurl.get('/people/' + id);   
     }
}


export default  new PeopleApi;