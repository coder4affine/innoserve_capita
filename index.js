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

const a = { a: 1, b: 2 };

a = 3;

console.log(a);

const obj = {
  a: 1,
  b: 2,
  c: 3
};

// spread operator
const obj1 = { ...obj, d: 4 };

console.log(obj1);

const a = 3;
// destructuring
const { a: aa, b } = obj1;

console.log(aa);

console.log(b);

const user = {
  name: "yagnesh",
  gender: "",
  abc: ""
};

let updatedUser = { ...user, age: 30 };

updatedUser = { ...updatedUser, gender: "Male" };

console.log(updatedUser);

const { abc, ...rest } = updatedUser;

console.log(rest);

console.log(user);

function add(...rest) {
  console.log(rest);

  // let sum  = 0;
  // for (let i = 0; i < rest.length; i++) {
  //     const element = rest[i];
  //     sum += element;
  // }
  // return sum;
  // return a + b + c + d + e + f + g + h;
}

console.log(add(1, "abc", 3, "pqr", 5, 6, 7));

const arr = [1, 2, 3, 4, 5, 6, 7];

// const newArr = [8, ...arr];

const [, , , ...rest] = arr;
console.log(rest);

// const newArr1 = [...arr.slice(0, 3),...arr.slice(4) ]

// const newArr2 = arr.filter(x => x !== 4 && x !== 5)

// console.log(newArr2);

// arr.push(8);

// console.log(arr);

// arr.pop();

// console.log(arr)

// map

// reduce

// forin

// forof

// const users = [
//     {
//         name: 'rohit',
//         gender: 'male',
//     },
//     {
//         name: 'shikhar',
//         gender: 'male',
//     },
//     {
//         name: 'deepika',
//         gender: 'female'
//     },
//     {
//         name: 'radhika',
//         gender: 'female'
//     }
// ];

// const updatedUsers = users.map((x, i) => {
//     if(x.gender === 'male') {
//         return {  ...x, profession: 'cricketer' }
//     }
//     return {...x, profession: 'actor' }
// });

console.log(updatedUsers);

// const arr = [1,2,3,4,5,6,7,8,9, 10];

// const newArr = arr.map((item, i) => {
//     if(i % 2 === 0){
//         return item * 2
//     }
//     return item * 3
// });

// console.log(newArr)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum += element;
// }

// console.log(sum);

const sum = arr.reduce((p, c) => p + c, 10);

console.log(sum);

const users = [
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "shikhar",
    gender: "male"
  },
  {
    name: "deepika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const updatedUser = users.reduce((p, c) => {
  if (c.gender === "male") {
    return [...p, { ...c, profession: "cricketer" }];
  }
  return [...p, { ...c, profession: "actor" }];
}, []);

console.log(updatedUser);

const a = null;

const b = 2;

const c = a || b;

const d = a && b;

const users = [
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "shikhar",
    gender: "male"
  },
  {
    name: "deepika",
    gender: "female"
  },
  {
    name: "radhika",
    gender: "female"
  }
];

const groupBy = (data, key) => {
  return data.reduce((p, c) => {
    (p[c[key]] = p[c[key]] || []).push(c);
    return p;
  }, {});
};

console.log(groupBy(users, "gender"));

// {
//     male: [

//     ],
//     female: [

//     ]
// }
