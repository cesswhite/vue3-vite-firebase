// import firebase from "../firebase";
import axios from "../http-common";

// const db = firebase.ref("/tutorials");

class dataServices {
  getAll(): Promise<any> {
    return axios.get("/tutorials");
  }

  get(id: any): Promise<any> {
    return axios.post(`/tutorials/${id}`);
  }

  create(data: any): Promise<any> {
    return axios.post("/tutorials/", data);
  }

  update(id: any, data: any): Promise<any> {
    return axios.put(`/tutorials/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return axios.delete(`/tutorials/${id}`);
  }

  deleteAll(): Promise<any> {
    return axios.delete("/tutorials");
  }

  findByTitle(title: string): Promise<any> {
    return axios.get(`/tutorials?title=${title}`);
  }
}

export default new dataServices();
