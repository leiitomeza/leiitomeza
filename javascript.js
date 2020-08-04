// JavaScript Document
document.addEventListener("DOMContentLoaded",() =>{

const email =document.querySelector("#email")
const name =document.querySelector("#name")
const comment = document.querySelector("#comment")
const submit1 = document.querySelector("#submit1")

const CheckInput =() => {
if (email.value !== ""  || name.value== !"" || comment.value) !== "" {
submit1.disabled=""

email.addEventListener("change", checkinput) 
name.addEventListener("change", checkinput) 
comment.addEventListener("change", checkinput) 

}

})