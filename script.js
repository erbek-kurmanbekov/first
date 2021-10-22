// const API = 'https://randomuser.me/api/?results='

// const output = document.getElementById('output')
// const input = document.getElementById('input')
// const button = document.getElementById('button')

// const getUserInfo = async()=>{
//     let value = input.value
//     let req = await fetch(API+value)
//     let res = await req.json()
//     console.log(res)
//     output.innerHTML=''
//     renderUserInfo(res.results)
// }
// button.addEventListener('click', getUserInfo)

// const renderUserInfo = (info)=>{
//     info.forEach((el, index) => {
//         let email = document.createElement('p')
//         let age = document.createElement('p')
//         let picture = document.createElement('img')

//         email.innerHTML = el.email
//         age.innerHTML = el.dob.age
//         picture.src=el.picture.medium
//         output.append(picture, email, age)
//     });       
// };  


const API = "https://randomuser.me/api/?results=";
const output = document.getElementById("output");
const input = document.getElementById("input");
const button = document.getElementById("button");

const getUserInfo = async () => {
  let value = input.value;
  let request = await fetch(API + value);
  let response = await request.json();
  console.log(response);
  output.innerHTML=''
  renderUserInfo(response.results);
};
button.addEventListener("click", getUserInfo);
const renderUserInfo = (info) => {
  info.forEach((el, index, array) => {
    let email = document.createElement("p");
    let age = document.createElement("p");
    let picture = document.createElement('img')
    let name = document.createElement('h6')
    let phone = document.createElement('p')
    let country = document.createElement('p')
    let city = document.createElement('p')
    city.innerHTML=el.location.city
    country.innerHTML=el.location.country
    phone.innerHTML=el.phone
    email.innerHTML = el.email;
    age.innerHTML = el.dob.age;
    picture.src=el.picture.large
    name.innerHTML=el.name.first + ' '+el.name.last
    output.append(picture, name, age, email, phone, country, city);
  });
};