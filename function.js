// const adventurer = {
//     name: "Rynn",
//     backpack: ["boomerang", "tent", "Tums"],
//     pet: {
//       name: "Kath",
//       species: "kitten",
//       type: "ferocious",
//       pet: {
//         name: "Eee",
//         species: "bat pup",
//         type: "dangerously adorable",
//         belongings: ["health insurance card", "diving flippers"],
//       },
//     },
//     move(direction) {
//       return `The adventurer moves one step ${direction}`;
//     },
//   };

// //   console.log(adventurer.move('North')) 

// // -----'for(of)'  method -----
// for (const item of adventurer.backpack) {
//     console.log(item)
// }


// // Accessing deeply nested objects
//   const adventurer = {
//     name: "Rynn",
//     backpack: ["boomerang", "tent", "Tums"],
//     pet: {
//       name: "Kath",
//       species: "kitten",
//       type: "ferocious",
//       pet: {
//         name: "Eee",
//         species: "bat pup",
//         type: "dangerously adorable",
//         belongings: ["health insurance card", "diving flippers"],
//       },
//     },
//     // Array of objects
//     food: [
//       {
//         name: "onion",
//         layers: {
//           first: {
//             layer: {
//               layer: {
//                 layer: "chewy center",
//               },
//             },
//           },
//         },
//       },
//     ],
//     move(direction) {
//       return `The adventurer moves one step ${direction}`;
//     },
//   };
// //While inside an array, you can still access whatever is inside of it by continuing the '.' sequence after using the index '[]'.
//   console.log(adventurer.food[0].layers.first.layer.layer.layer)

// const adventurer = {
//     name: "Rynn",
//     backpack: ["boomerang", "tent", "Tums"],
//     pet: {
//       name: "Kath",
//       species: "kitten",
//       type: "ferocious",
//       pet: {
//         name: "Eee",
//         species: "bat pup",
//         type: "dangerously adorable",
//         belongings: ["health insurance card", "diving flippers"],
//       },
//     },
//     move(direction) {
//       return `The adventurer moves one step ${direction}`;
//     },
// // 
//     castSpell(spell) {
//       return function () {
//         return `${spell.toUpperCase()}!!!`;
//       };
//     },
//   };
// // The empty parentheses indicate that you're calling the function without any arguments.
//   console.log(adventurer.castSpell('Ice Storm')())


// const crayons = [{color: "red", original: true},{color: "blue", original: true},{color: "caput mortuum", original: false}]

// console.log(crayons)

// const crayons = [
//     { color: "red", original: true },
//     { color: "blue", original: true },
//     { color: "caput mortuum", original: false },
//   ];

// // Used to iterate through crayons
// for (let i = 0; i < crayons.length; i++) {
//     console.log(crayons[i].color);
// }


/*
-----Steps for for of loops-----

1. Start with keyword 'for'.
2. Declare a variable like crayon (you can name it anything)
3. Use keyword 'of' then the name of your array (crayons) you want to iterate over.

----- KEYNOTES ------
The for of loop is less flexible than a regular for loop. It can only iterate over every item (no skipping or no going back)
*/
// for (crayon of crayons) {
//     console.log(crayon.color)
// }

// 