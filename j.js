
 console.log('dlkjf');
let btn = document.querySelector('#btnn');
let score = document.querySelector('.score');
let adds = document.querySelector('#adds');
let addss = document.querySelector('#addss');
let asd = document.querySelector('#asd');

let a=0;


let pati=document.querySelector('.pati');
var e=30;




btn.addEventListener('click',()=>{

   a++;
   score.innerHTML=a;
});
asd.addEventListener('click',()=>{
if (a<=5) {
    alert('minimum widthdraw is 5 ')
}else{
  
   
    
        let  s= prompt('widthdraw' )
        a = a-s;
        score.innerHTML=a;
        console.log(a)
    
    
 
    
       
}
 
});
let currt ='ligh';
let watch =document.getElementById("Watch");
watch.addEventListener("click", ()=>{
    if (currt === 'ligh') {
         alert('scroll down')
         currt='drk';
        document.getElementById("poiu").style.display='block';
    } else {
        currt ='ligh';
         document.getElementById("poiu").style.display='none';
    }
    console.log(currt)
});



//console.log('dlkjf')


let pati2 = document.querySelector('.pati2');
let add2 = document.querySelector('#addssdf');
let add1 = document.querySelector('#fgh');
let sc =50;
add1.addEventListener('click',()=>{
    setTimeout(() => {
       a++; a++; a++; a++; a++; a++; a++; a++; a++; a++;
       a++; a++; a++; a++; a++; a++; a++; a++; a++; a++;
       a++; a++; a++; a++; a++; a++; a++; a++; a++; a++;
score.innerHTML=a;

    }, 100);

setInterval(() => {
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
        pati.style.maxWidth=sc+'px';
},130);


});
add2.addEventListener('click',()=>{
    setTimeout(() => {
       a++; a++; a++; a++; a++; a++; a++; a++; a++; a++;
score.innerHTML=a;

    }, 5000);

setInterval(() => {
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
    sc++;sc++;sc++;
        pati2.style.maxWidth=sc+'px';
},500);


});
