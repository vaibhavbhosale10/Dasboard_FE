import API from "../api/api";
import endpoints from "../api/endpoints";

class dataServices {
  static createdata(data) {
    return API.post(endpoints?.api?.data?.create, data);
  }

  static updatedata(id, data) {
    return API.put(endpoints?.api?.data.update + id, data);
  } //updatedata

  static deletedata(id) {
    return API.delete(endpoints?.api?.data.delete + id);
  } //deletedata

  static fetchOnedata(id) {
    return API.get(endpoints?.api?.data.getOne + id);
  } //fetchOnedata

  static fetchAlldata(query = "") {
    return API.get(endpoints?.api?.data.getAll + query);
  } //fetchAlldata
}
export default dataServices;
