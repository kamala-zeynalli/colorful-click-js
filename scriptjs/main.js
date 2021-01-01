var button = document.getElementById('button') ;
var arr = ['red' , 'yellow', 'jade','azure', 'pea green','orange' , 'blue', 'tan' ,' purple' , 'white' , 'plum' ,' lime'] ;

function randomColor() {
let random = Math.floor(Math.random()*arr.length) ;

document.body.style.background = arr[random] ; 

}
