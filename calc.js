function display(data){
    let disp = document.getElementById("display").innerHTML
    console.log(disp)
 }
 display(10)
 function disp(a){
     let data=document.getElementById("display")
     data.innerHTML+=a
 }
 function u_clear(){
     let data=document.getElementById("display")
     data.innerHTML=0
 }
 function calc(){
     let data=document.getElementById("display")
     let expn=data.innerHTML
     let res=eval(expn)
     data.innerHTML=res
 }