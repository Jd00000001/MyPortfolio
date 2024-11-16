/* typing animation*/
var typed = new Typed(".typing", {
    strings: ["", "IT Professional", "Graphic Designer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60, 
    loop: true,
});
/* Aside*/

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for (let i=0; i<totalNavList; i++) 
    {
    
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() 
    {
        console.log(this)

})}