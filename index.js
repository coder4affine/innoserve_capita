// problems in es5

{
  var a = 1;
}

{
  var a = 2;
}

console.log(a);

($ => {
  var a = 1;

  var a = 2;

  console.log(a);
})();

console.log(a);

// let features

// let a = 1;

// let a = 2

let a = 1;
a = 2;

console.log(a);

// {
//     let a = 1;
//     console.log(a);
// }

// {
//     let a = 2;
//     console.log(a);
// }

// console.log(a)

// const features

// const a = 1;

// a = 2;

{
  const a = 1;
}

{
  const a = 2;
}

console.log(a);

// string literals

const fname = "Yagnesh";

const lname = "modh";

const fullname = `${fname}'s




    ${lname}`;

console.log(fullname);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

var es5 =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "<head>" +
  '\n\t<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "<title>Document</title>" +
  "</head>" +
  "<body>" +
  "" +
  "</body>" +
  "</html>";

// console.log(es5)

const es6 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

console.log(es6);

const a = 1;

const obj = {
  a,
  b: 2,
  c() {
    return this.a + this.b;
  }
};

console.log(obj);

console.log(obj.c());

// arrow function

// function add(a, b) {
//     return a + b;
// }

// function add(a, b) {
//     return a + b + 2;
// }

const add = a => (false ? a : 4);

console.log(add(1, 3));

// class

class Animal {
  constructor(type) {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = 5;
  }

  makeSound() {
    setTimeout(() => {
      const b = 1;
      console.log(this.type);
    }, 1000);
    console.log("make sound");
  }
}

const a = new Animal("Animal");

console.log(a);

// class Cat extends Animal {
//     constructor(props) {
//         // super(props);
//     }
//     makeSound() {
//         super.makeSound();
//         console.log('Meoww...')
//     }

// }

// const b = new Cat('Cat');

// // a.type = 'Animal';

// console.log(b.type);

console.log(a.makeSound());

const user = {
  name: "yagnesh",
  gender: "male"
};

user.name = "rohit";

console.log(user);
