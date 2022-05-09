let menubar=document.getElementById("menubar");
let navbar=document.getElementById("navbar");
menubar.addEventListener('click', ()=>{
    if(navbar.style.top=="0vh"){
        navbar.style.top="-80vh";
    }else{
        navbar.style.top="0vh";
    }
})

