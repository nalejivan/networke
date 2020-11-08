import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "e3a243c3-5c88-4a36-9397-738aef75b12f"
  }
});

const usersApi = {
  getUsers: (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
          return response.data;
      })
  },
  follow: (id, val) => {
    if(!val) {
      return instance.delete(`follow/${id}`)
      .then(response => {
          return response.data;
      })
    } else {
      return instance.post(`follow/${id}`, {})
      .then(response => {
          return response.data;
      })
    }
  }
}

const profileApi = {
  getProfile: (id) => {
    if(id !== undefined || id !== null) {
      return instance.get(`profile/` + id)
      .then(response => {
       return response.data;
      })
      .catch(err => console.error(err));
    }
    
  },
  getStatus:(id) => {
    return instance.get(`profile/status/` + id)
      .then(response => {
       return response.data;
      })
      .catch(err => console.error(err));
  },
  putStatus:(status) => {
    return instance.put(`profile/status`, {status: status})
      .then(response => {
        return response;
      })
      .catch(err => console.error(err));
  }
}
const authApi = {
  getUserData: () => {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      })
      .catch(err => console.error(err))
  },
  loginData: (email, password, rememberMe, captcha) => {
    return instance.post(`auth/login`, {
      email, password, rememberMe, captcha
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
}
export { usersApi, profileApi, authApi };