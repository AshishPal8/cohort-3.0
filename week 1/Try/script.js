//week-------------1----------------------
// // let age = 25;
// // let canvote = age > 18;

// // console.log(canvote);

// function greet(name) {
//   return "hello " + name;
// }

// function sum(a, b, c) {
//   return a + b + c;
// }
// // console.log(sum(3, 5, 1));
// // console.log(sum(5, 5, 5));

// const a = 10;
// // console.log(a);

// function sum(a, b, c) {
//   return a + b + c;
// }
// // console.log(sum(2, 5, 8));
// // console.log(sum(4, 7, 9));

// //Assignment-1
// function sum(a, b) {
//   let totalsum = a + b;
//   return totalsum;
// }
// let sum1 = sum(5, 3);
// // let sum2 = sum(5, 4);

// console.log(sum1);
// console.log(sum2);

//Assignment-2
// function canvote(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let ans = canvote(15);
// console.log(ans);

// let users = ["shelli", "ally", "ashish", "ashu"];
// for (let i = 0; i < 3; i++) {
//   console.log(users[i]);
// }

// let users = ["shelli", "ashu", "ally", "ashish", "Men"];
// let totalusers = users.length;
// for (let i = 0; i < totalusers; i++) {
//   console.log(users[i]);
// }

// function greet(user) {
//   console.log("hii " + user.name + " your age is " + user.age);
// }
// let user = {
//   name: "shelli",
//   age: 19,
// };
// greet(user);

// function greet(customer) {
//   console.log(
//     "Hii " + customer.gender + customer.name + " your age is " + customer.age
//   );
// }
// let customer = {
//   name: "shelli",
//   age: 19,
//   gender: "Miss ",
// };
// greet(customer);

// ***

// function solve(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].gender === "male" && arr[i].age > 18) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }

// const users = [
//   {
//     name: "shelli",
//     age: 19,
//     gender: "female",
//   },
//   {
//     name: "Ashish",
//     age: 21,
//     gender: "male",
//   },

//   {
//     name: "Ram",
//     age: 22,
//     gender: "male",
//   },
// ];
// let ans = solve(users);
// console.log(ans);

//week------------2------------------

// function sum(a, b) {
//   return a + b;
// }
// let ans = sum(4, 6);
// let ans1 = sum(3, 2);
// console.log(ans);
// console.log(ans1);

// function sum(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }
// const ans = sum(5);
// console.log(ans);

// const shelli = require("fs");

// const content = shelli.readFileSync("a.txt", "utf-8");
// console.log(content);

// Add event listener to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    // Add game logic or news article display here
    console.log("Button clicked!");
  });
});

// Add smooth scrolling to navigation
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// This code enables smooth scrolling when navigating between sections.

// Quiz Game:

const questions = [
  { question: "What is HTML?", answer: "Hypertext Markup Language" },
  { question: "What is CSS?", answer: "Cascading Style Sheets" },
];

let currentQuestion = 0;
let score = 0;

button.addEventListener("click", () => {
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");

  questionElement.textContent = questions[currentQuestion].question;
  answerElement.textContent = "";

  const userAnswer = prompt("Enter your answer:");
  if (userAnswer === questions[currentQuestion].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    alert(`Quiz finished! Your score is ${score}/${questions.length}`);
  }
});

// Word Search Game:

const words = ["HTML", "CSS", "JAVASCRIPT"];
const grid = [
  ["H", "T", "M", "L", "O"],
  ["C", "S", "S", " ", " "],
  ["J", "A", "V", "A", "S"],
];

button.addEventListener("click", () => {
  const gridElement = document.getElementById("grid");
  gridElement.innerHTML = "";

  grid.forEach((row) => {
    const rowElement = document.createElement("div");
    row.forEach((letter) => {
      const letterElement = document.createElement("span");
      letterElement.textContent = letter;
      rowElement.appendChild(letterElement);
    });
    gridElement.appendChild(rowElement);
  });

  const findWord = prompt("Enter a word to find:");
  if (words.includes(findWord)) {
    alert("Word found!");
  } else {
    alert("Word not found!");
  }
});

// News Article Display:

const articles = [
  { title: "Article 1", content: "This is article 1." },
  { title: "Article 2", content: "This is article 2." },
];

button.addEventListener("click", () => {
  const articleElement = document.getElementById("article");
  const articleTitle = document.getElementById("title");
  const articleContent = document.getElementById("content");

  articleTitle.textContent = articles[0].title;
  articleContent.textContent = articles[0].content;
});
