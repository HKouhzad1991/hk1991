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
// const button = document.getElementById("button");

// button.addEventListener("click", loadCustomer);

// function loadCustomer() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("get", "../customer.json", true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//       let customer = JSON.parse(this.responseText);
//       let output = `
//         <ul>
//         <li>ID : ${customer.id}</li>
//         <li>firstName : ${customer.firstName}</li>
//         <li>lastName : ${customer.lastName}</li>
//         <li>phone : ${customer.phone}</li>
//         <li>age : ${customer.age}</li>
//         <li>gender : ${customer.gender}</li>
//         </ul>
//       `;
//       document.getElementById("customer").innerHTML = output;
//     }
//   };
//   xhr.send();
// }

const button = document.getElementById("button");

button.addEventListener("click", loadPost);

function loadPost() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.onload = function () {
    if (this.status === 200) {
      let post = JSON.parse(this.responseText);
      let output = `
      <p class ='post_id'> Post Id : ${post.id} </p>
      <h2 class ='post_title'>
      ${post.title}
      </h2>
      <p class='post_body'>
      ${post.body}
      </p>

      `;
      document.getElementById("post").innerHTML = output;
    }
  };
  xhr.send();
}
