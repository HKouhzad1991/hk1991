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

// const button = document.getElementById("button");
// const postNum = document.getElementById("postNumber");

// button.addEventListener("click", loadPost);

// function loadPost() {
//   let xhr = new XMLHttpRequest();
//   let num = Number(postNum.value);
//   xhr.open("GET", `https://jsonplaceholder.typicode.com/posts/${num}`, true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//       let post = JSON.parse(this.responseText);
//       let output = `
//       <p class ='post_id'> Post Id : ${post.id} </p>
//       <h2 class ='post_title'>
//       ${post.title}
//       </h2>
//       <p class='post_body'>
//       ${post.body}
//       </p>

//       `;
//       document.getElementById("post").innerHTML = output;
//     }
//   };
//   xhr.send();
// }

// const button = document.querySelector("button");
// button.addEventListener("click", eventHandler);
// function eventHandler() {}

// setTimeout(myfunc, 2000);

// function myfunc() {}

// callback hell

// const xhr1 = new XMLHttpRequest();
// xhr1.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// xhr1.onload = function () {
//   if (this.status === 200) {
//     console.log(JSON.parse(xhr1.responseText).id);
//   }
//   const xhr2 = new XMLHttpRequest();
//   xhr2.open("GET", "https://jsonplaceholder.typicode.com/posts/2");

//   xhr2.onload = function () {
//     if (this.status === 200) {
//       console.log(JSON.parse(xhr2.responseText).id);
//     }
//     const xhr3 = new XMLHttpRequest();
//     xhr3.open("GET", "https://jsonplaceholder.typicode.com/posts/3");

//     xhr3.onload = function () {
//       if (this.status === 200) {
//         console.log(JSON.parse(xhr3.responseText).id);
//       }
//       const xhr4 = new XMLHttpRequest();
//       xhr4.open("GET", "https://jsonplaceholder.typicode.com/posts/4");

//       xhr4.onload = function () {
//         if (this.status === 200) {
//           console.log(JSON.parse(xhr4.responseText).id);
//         }
//         const xhr5 = new XMLHttpRequest();
//         xhr5.open("GET", "https://jsonplaceholder.typicode.com/posts/5");

//         xhr5.onload = function () {
//           if (this.status === 200) {
//             console.log(JSON.parse(xhr5.responseText).id);
//           }
//         };
//         xhr5.send();
//       };
//       xhr4.send();
//     };
//     xhr3.send();
//   };
//   xhr2.send();
// };
// xhr1.send();

let p = new Promise(executor);

function executor(resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/4");
  xhr.onload = function () {
    if (this.status === 200) {
      let response = xhr.responseText;
      resolve(response);
    } else {
      reject();
    }
  };
  xhr.send();
}
p.then(onFulfilled, onRejected);
function onFulfilled(response) {
  console.log(response);
}
function onRejected() {
  console.log("error");
}
