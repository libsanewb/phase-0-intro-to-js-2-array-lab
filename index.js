// Write your solution here!

//  case 1
 const cats=["Milo", "Otis", "Garfield"]
 
 //case 2
function destructivelyAppendCat(name) {
  
   cats.push(name)
 }
 //case 3
 function destructivelyPrependCat(name) {
    cats.unshift(name)
 }
  //case 4
  function destructivelyRemoveLastCat() {
    cats.pop()
  }
   //case 5
 function destructivelyRemoveFirstCat() {
    cats.shift()
  }
    //case 6
  function appendCat(name) {
    return [...cats, name]
  }
    //case 7
  function prependCat(name) {
    return [name, ...cats]
  }
    //case 8
  function removeLastCat() {
    return cats.slice (0, cats.length-1)
  }
    //case 9
  function removeFirstCat() {
    return cats.slice(1)
 }
// const cats = ["Milo", "Otis", "Garfield"] 

//  function destructivelyAppendCat(name) { 
//      cats.push(name) 
//  } 

//  function destructivelyPrependCat(name) { 
//      cats.unshift(name) 
//  } 

//  function destructivelyRemoveLastCat() { 
//      cats.pop() 
//  } 

//  function destructivelyRemoveFirstCat() { 
//      cats.shift() 
//  } 

//  function appendCat(name) { 
//      return [...cats, name] 
//  } 

//  function prependCat(name) { 
//      return [name, ...cats] 
//  } 

//  function removeLastCat() { 
//      return cats.slice(0, cats.length - 1) 
//  } 

//  function removeFirstCat() { 
//      return cats.slice(1) 
//  }