// const button = document.querySelector("button");
// const output = document.querySelector("output");

// button.addEventListener("click", ()=>{
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "../data.txt", true);
//   xhr.onload = function (){
//     if (this.status == 200){
//       output.innerHTML = this.responseText;
//       }

//   }
//  xhr.send();
// })
const button = document.getElementById("button");

button.addEventListener("click", loadCustomer);

function loadCustomer() {
  let xhr = new XMLHttpRequest();
  xhr.open("get", "../customer.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      let customer = JSON.parse(this.responseText);
      let output = ` 
        <ul>
        <li>ID : ${customer.id}</li>
        <li>firstName : ${customer.firstName}</li>
        <li>lastName : ${customer.lastName}</li>
        <li>phone : ${customer.phone}</li>
        <li>age : ${customer.age}</li>
        <li>gender : ${customer.gender}</li>
        </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  };
  xhr.send();
}
