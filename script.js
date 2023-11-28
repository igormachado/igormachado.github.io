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

let frameworks = ["NodeJS", "React Native", "ReactJS","JEST","Typeorm","Redux","NextJS"];

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


