var header = document.getElementById('body-header');

timer();

function timer(){
 var currentTime = new Date()

 document.getElementById('current-time').innerHTML = currentTime;
 setTimeout(timer,900);
}



var home = document.getElementById('a1');
var about = document.getElementById('a2');
var education = document.getElementById('a3');
var contact = document.getElementById('a4');

var prev = document.getElementById('home');

home.addEventListener("click",function(){

    prev.classList.add("hidden");
    var p = document.getElementById('home');
    prev = p;
    p.classList.remove("hidden");
    
})

about.addEventListener("click",function(){

    prev.classList.add("hidden");
    var p = document.getElementById('about');
    prev = p;
    p.classList.remove("hidden");
    
})

education.addEventListener("click",function(){

    prev.classList.add("hidden");
    var p = document.getElementById('education');
    prev = p;
    p.classList.remove("hidden");
    
})

contact.addEventListener("click",function(){

    prev.classList.add("hidden");
    var p = document.getElementById('contact');
    prev = p;
    p.classList.remove("hidden");
    
})

