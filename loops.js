function forLoop(a){
  for (var i=0;i<25;i++){
    a.push(`I am ${i} strange loop.`)
  }
  return a
}
function whileLoop(n){
  while(n>0){
    console.log(n--)
    }
  return 'done'
}
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
function doWhileLoop(a){
  do{
    a.pop()
  }while(maybeTrue() && a.length>0)
return a
}
