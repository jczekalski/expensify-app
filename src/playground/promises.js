const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'JC',
      age: '28'
    });
    reject('Oops! Something went wrong');
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log(data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise')
    }, 3000);
  });
}).then((str) => {
  console.log('Does this run?', str);
}).catch((error) => {
  console.log('Error: ', error);
});

console.log('after');