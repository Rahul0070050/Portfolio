$(document).ready(function(){
    $(".burgur").click(function(){
        $(".navbar>.links").toggleClass("display-Block");
    })
    $("ul>li>a").click(function(){
        if($(".navbar>.links").hasClass("display-Block")){
            $(".navbar>.links").removeClass("display-Block")
        }
    })
    $("section").click(function(){
        if($(".navbar>.links").hasClass("display-Block")){
            $(".navbar>.links").removeClass("display-Block")
        }
    })
})

const loder = document.getElementById("loader");
window.scrollBy(0,100)
window.addEventListener("load", function(){
    loder.classList.add("fadeout");
});

