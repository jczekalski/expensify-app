
// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     });
// //     console.log(expenses);
// //   });


//   // database.ref('expenses').on('value', (snapshot) => {
//   //   const expenses = [];
//   //   snapshot.forEach((childSnapshot) => {
//   //     expenses.push({
//   //       id: childSnapshot.key,
//   //       ...childSnapshot.val()
//   //     })
//   //   });
//   //   console.log(expenses);
//   // })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 1095000,
//   createdAt: 28347238492346
// });

// // database.ref('notes/-LMb_PP2ph74wBqPuA8T').remove();

// // database.ref('notes').push({
// //   title: 'Course topics',
// //   body: 'React'
// // });

// // database.ref('notes').set(notes);

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // database.ref('name').set('Bob');

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500);

// // database.ref('location')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   })

// //// set new reference value
// // database.ref().set({
// //   name: 'JC',
// //   age: 28,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Teacher',
// //     company: 'School'
// //   },
// //   location: {
// //     city: 'Krakow',
// //     country: 'Poland'
// //   }
// // }).then(() => {
// //   console.log('data is saved');
// // }).catch((e) => {
// //   console.log('This failed. ', e);
// // });

// // //update only updates at the root level unless path is specified as key!
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'New York'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('data removed');
// //   }).catch((e) => {
// //     console.log('did not remove data', e);
// //   });
