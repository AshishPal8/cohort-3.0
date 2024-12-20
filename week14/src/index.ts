let x: number = 1;

// console.log(x);

function greet(firstName: string) {
  console.log("Hello", firstName);
}

// greet("Ashish");

function delayedCall(anotherFn: () => void) {
  setTimeout(anotherFn, 1000);
}
