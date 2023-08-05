const obj = {
  helloworld: 2,
  x: {
    y: 1,
  },
};

obj.X = 2;

console.log(obj.helloworld);
console.log(obj.x);
console.log(obj.x.y);

const keys = Object.keys(obj);
console.log(keys);
