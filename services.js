import http from "./api/intercept";


class APIServices {
  getAll(url) {
    return http.get(`/${url}`);
  }

  get(url, id) {
    return http.get(`/${url}/${id}`);
  }

  get(url) {
    return http.get(`/${url}`);
  }

  get(url,data) {
    return http.get(`/${url}`, data);
  }


  getUser(url) {
    return http.get(`/${url}`);
  }

  create(url, data) {
    return http.post(`/${url}`, data);
  }

  createPost(url) {
    return http.post(`/${url}`);
  }

  createPoints(url) {
    return http.post(`/${url}`, data);
  }

  update(url, id, data) {
    return http.put(`/${url}/${id}`, data);
  }

  updateUser(url, data) {
    return http.put(`/${url}`, data);
  }

  delete(url, id) {
    return http.delete(`/${url}/${id}`);
  }

  deleteAll() {
    return http.delete(`/${url}`);
  }

  deleteUser(url, id) {
    return http.put(`/${url}/${id}`);
  }
  deletePut(url) {
    return http.put(`/${url}`);
  }


  async securePost(url, datam) {
    let _authToken = localStorage.getItem("AUTH_TOKEN"); 
    // if(_authToken && url.includes('/secure/')){
    //   let _r = await http.get(`authorization/secure/refresh-token/${_authToken}/SOFT`);
    //   if(_r){
    //     console.log("_r",_r);
    //     if(_r.data.data.status == "200"){
    //       localStorage.setItem("AUTH_TOKEN",_r.data.data.token); 
    //       return http.post(`/${url}`, datam);
    //     }else{
    //       return http.post(`/${url}`, datam);
    //     }
    //   }else{
    //     return http.post(`/${url}`, datam);
    //   }
    // }else{
    //   return http.post(`/${url}`, datam);
    // }
    return http.post(`/${url}`, datam);
  }

  async secureGet(url, datam = null) {
    // let _authToken = localStorage.getItem("AUTH_TOKEN"); 
    //   let _r = await http.get(`authorization/secure/refresh-token/${_authToken}/SOFT`);
    //   if(_r){
    //     console.log("_r",_r);
    //     if(_r?.data?.data?.status == "200"){
    //       localStorage.setItem("AUTH_TOKEN",_r.data.data.token); 
    //       return http.get(`/${url}`, datam);
    //     }else{
    //       return http.get(`/${url}`, datam);
    //     }
    //   }else{
    //     return http.get(`/${url}`, datam);
    //   }
    return http.get(`/${url}`, datam);
  }
}

export default new APIServices();
