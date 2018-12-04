let API = "";
if(window.location.href.includes("localhost")){
  API = "http://localhost:3000/api/v1";
} else {
  API = "https://mydiary-v1.herokuapp.com/api/v1";
}

export default API;
