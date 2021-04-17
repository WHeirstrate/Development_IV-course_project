fry(10);


function fry(time) {
  
  setTimeout(() => console.log("ready"), time * 300);
}


export {
  fry
};