// // Mutable array
// // creatings arrays with instance and class
// const a = new Array(1,2,3);
// document.writeln(a);

// // creatings arrays with .of 
// const b = Array.of(1,2,3,4,5);
// document.writeln(b)

// // Create array using .from
// const c = Array.from("Niru");
// document.writeln(c);

// // Immutable Array
// let arr=[1,2,3,4,5];
// document.writeln(arr);

// arr = arr.concat([6,7,8]);
// document.writeln(arr);

arr.push(10);
document.writeln(arr);

arr = arr.push(0,10);
document.writeln(arr);

arr = arr.reverse()
document.writeln(arr);
