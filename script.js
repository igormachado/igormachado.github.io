// Language Programming

const language = [
  "Javascript",
  "Typescript",
  "Python",
  "Bootstrap",
  "Postgres/MariaDB/Oracle/SQL",
  "HTML & CSS",
];

language.forEach((item) => {
  let ul = document.getElementById("ul-language");

  let li = document.createElement("li");
  li.className = "li-language";
  let strong = document.createElement("strong");
  strong.innerText = item;
  li.appendChild(strong);
  ul.appendChild(li);
});

// Frameworks

let frameworks = ["NodeJS", "Django", "ReactJS","JEST","Typeorm"];

frameworks.forEach((item) => {
  let ul = document.getElementById("ul-framework");

  let li = document.createElement("li");
  li.className = "li-framework";
  let strong = document.createElement("strong");
  strong.innerText = item;
  li.appendChild(strong);
  ul.appendChild(li);
});

// Infrastructure

let infrastructure = [
  "Docker",
  "Windows Server",
  "Linux",
  "Cisco network",
  "System Center",
  "Active Directory",
  "Windows Azure",
  "Secure your identities by using Azure Active Directory",
  "Security, responsibility, and trust in Azure"
];

infrastructure.forEach((item) => {
    let ul = document.getElementById("ul-infrastructure");
    
    let li = document.createElement("li");
    li.className = "li-infrastructure";
    let strong = document.createElement("strong");
    strong.innerText = item;
    li.appendChild(strong);
    ul.appendChild(li);

})


// for (element = 0; element <= 3; element++) {
//   createLi01 = document.createElement("li");
//   createLi01.className = "li-01";
//   getUl01.appendChild(createLi01);
// }

// let getli01 = document.querySelectorAll("#li-01")[0];

// console.log(getli01);

// console.log(getUl01);

// for (index in language) {
//   result = language[index];
//   result_index = index[0]
// //   console.log(result_index)
//   console.log(result);

// }

// console.log(getli01)
// for (index in language) {
//     getli01.textContent = language[index]
// }
