const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The Arrays is---> [${fruits_seasonal}]`);
console.log(`The first element of Array is: "${ fruits_seasonal[0] }" and the last element of Array is: "${fruits_seasonal[fruits_seasonal.length-1]}" `);
fruits_seasonal.unshift("Papaya");
let fruits=fruits_seasonal;
console.log(`the  Array after adding "Papaya" is---> [${fruits}]`);
let index=fruits_seasonal.indexOf("Mango");
 fruits_seasonal.splice(index,1);
fruits=fruits_seasonal;
console.log(`The array After removing "Mango" is--> [${fruits}]`);
fruits_seasonal.push("Pineapple");
fruits=fruits_seasonal;
console.log(`The array After Adding "Pineapple" is--> [${fruits}]`);
 index=fruits_seasonal.indexOf("Water Melon");
fruits_seasonal.splice(index,0,"Dragon Fruit");
fruits=fruits_seasonal;
console.log(`The array After inserting "Dragon Fruit" before "Water Melon" is--> [${fruits}]`);
index=fruits_seasonal.indexOf("Orange");
fruits_seasonal.splice(index,1,"Kiwi");
fruits=fruits_seasonal;
console.log(`The array After Replacing "Orange" with "Kiwi" is--> [${fruits}]`);
console.log(`The array From index 1 to 4 is---> [${fruits_seasonal.slice(1,5)}]`);
console.log(`The Last three elements are is---> [${fruits_seasonal.slice(fruits_seasonal.length-3)}]`);



