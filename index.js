//Selecting side navbar , MenuIcon
 var sidenav = document.getElementById("sidenav")
 var Menuicon = document.getElementById("menuicon")
 var closenav = document.getElementById("closenav")

 Menuicon.addEventListener("click",function(){
    sidenav.style.right=0
 })
 closenav.addEventListener("click",function(){
    sidenav.style.right= "-50%"
 })