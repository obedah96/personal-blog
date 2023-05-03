let randombackground;
let backgroundinterval;


let maincolor=localStorage.getItem("color_option");

if(maincolor !==null){

    document.documentElement.style.setProperty('--main-color',maincolor);
}



document.querySelector(".toogle-settings .fa-gear").onclick=function(){
    document.querySelector(".setting-box").classList.toggle("open");


    this.classList.toogle("fa-spin");

    
};
let backgroundlocalitem=localStorage.getItem("background_option");
if(backgroundlocalitem!== null){
    if(backgroundlocalitem===true){
        randombackground=true;

    }
    else{
        randombackground=false;
    }
}
document.querySelectorAll(".random_backgrounds span").forEach(element=>{
    element.classList.remove("active");
});
if(randombackground===true){
    document.querySelector(".random_backgrounds .yes").classList.add("active");
}
else{
    document.querySelector(".random_backgrounds .no").classList.add("active");
}



const colorli=document.querySelectorAll(".color-list li");
colorli.forEach(li =>{

    li.addEventListener("click",(e) =>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

        localStorage.setItem("color_option",e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });

});

const bgel=document.querySelectorAll(".random_backgrounds span");
bgel.forEach(span =>{

    span.addEventListener("click",(e) =>{

        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");

        if(e.target.dataset.background==="yes"){
            randombackground=true;
            localStorage.setItem("background_option",true);
            randomimgs();
        }
        else{
            randombackground=false;
            clearInterval(backgroundinterval);
            localStorage.setItem("background_option",false);
        }
    });

});



let landpage=document.querySelector(".landing-page");

let img=["1.jpg","2.jpg","3.jpg","4.jpg"];


function randomimgs(){
    if(randombackground===true)
    {
    backgroundinterval= setInterval(()=>{

        let randomnumber = Math.floor(Math.random()*img.length);
        
        landpage.style.backgroundImage='url("imgs/' +img[randomnumber] +'")';
    
    
    },2000);
    }


};

let myskills=document.querySelector(".skills");

window.onscroll=function(){

    let skilloffsettop=myskills.offsetTop;

    let skillouterheight=myskills.offsetHeight;

    let windowheight=this.innerHeight;

    let windowscrolltop=this.pageYOffset;
    
    if(windowscrolltop > (skilloffsettop-skillouterheight))
    {
        let allskills=document.querySelectorAll(".skill-box .skill-progress span");

        allskills.forEach(skill=>{
            skill.style.width=skill.dataset.progress;
        });
    }


};

let mygallery=document.querySelectorAll(".gallery img");

mygallery.forEach(img =>{

    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div");
        overlay.className='popup-overlay';
        document.body.appendChild(overlay);

        let popupbox=document.createElement("div");
        popupbox.className="popup-box";

        if(img.alt !==null){
            let imgheading=document.createElement("h3");

            let imgtext=document.createTextNode(img.alt);

            imgheading.appendChild(imgtext);

            popupbox.appendChild(imgheading);


        }

        let popupimage=document.createElement("img");
        popupimage.src=img.src;

        popupbox.appendChild(popupimage);
        
        document.body.appendChild(popupbox);


        let closebutton = document.createElement("span");

        let closebuttontext = document.createTextNode("x");

        closebutton.appendChild(closebuttontext);

        closebutton.className='close-button';

        popupbox.appendChild(closebutton);

    });
});

document.addEventListener("click",(e)=>{
    if(e.target.className=="close-button"){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});


const allbullets=document.querySelectorAll(".nav-bullets .bullet");

allbullets.forEach(bullet =>{

    bullet.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
    });
});
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active");

    });
    ev.target.classList.add("active");
};

let bulletspan=document.querySelectorAll(".bullet-option span");

let bulletcontainer=document.querySelector(".nav-bullets");
let bulletlocalitem=localStorage.getItem("bullets_option");

if(bulletlocalitem !==null){
    console.log('not empty');
    bulletspan.forEach(span=>{
        span.classList.remove("active");
    });
    if(bulletlocalitem==='block'){
        bulletcontainer.style.display='block';
        document.querySelector(".bullet-option .yes").classList.add("active");

    }
    else{
        bulletcontainer.style.display='none';
        document.querySelector(".bullet-option .no").classList.add("active");

    }

}
bulletspan.forEach(span=>{
    span.addEventListener("click",(e)=>{
        if(span.dataset.display==='show'){
            bulletcontainer.style.display='block';
            localStorage.setItem("bullets_option",'block');
        }
        else{
            bulletcontainer.style.display='none';
            localStorage.setItem("bullets_option",'none');
        }
        handleActive(e);
        
    });
});


let tog=document.querySelector(".toogle-menu");
let links=document.querySelector(".link");
tog.onclick=function(e){
    e.stopPropagation();
    this.classList.toggle("menu-active");
    links.classList.toggle("open");
}
document.addEventListener("click",(e)=>{

    if(e.target!==tog && e.target!==links)
    {
        if (links.classList.contains("open"))
        {
            tog.classList.toggle("menu-active");
            links.classList.toggle("open");
        }
    }
});

links.onclick=function(e){

    e.stopPropagation();

}

