import axios from 'axios';

const API_BASE_URL = "http://localhost:8083/api/v1/products";

class ProductService {

    getEmployees(){
        return axios.get(API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(API_BASE_URL + '/' + employeeId);
    }
}

export default new ProductService()