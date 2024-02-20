let items=document.querySelectorAll(".item");
let active=document.querySelector(".active");
for (let item of items){
    item.addEventListener("click",()=>{
        let id=item.getAttribute("id");
        playMusic(id);
    });
}

document.addEventListener("keypress",(btn)=>{
    let key=btn.code;
    let arr=["KeyW","KeyA","KeyS","KeyD","KeyJ","KeyK","KeyL"];
    let index=arr.indexOf(key);
    let str="item"+(index+1);
    playMusic(str);
});

function playMusic(itemid){
    if (itemid==="item1"){
        document.getElementById("item1").classList.add("active");
        setTimeout(()=>{document.getElementById("item1").classList.remove("active")},250);
        let audio=new Audio("./Sounds/tom-1.mp3");
        audio.play();
    }
    else if(itemid==="item2"){
        document.getElementById("item2").classList.add("active");
        setTimeout(()=>{document.getElementById("item2").classList.remove("active")},250);
        let audio=new Audio("./Sounds/tom-2.mp3");
        audio.play();
    }
    else if(itemid==="item3"){
        document.getElementById("item3").classList.add("active");
        setTimeout(()=>{document.getElementById("item3").classList.remove("active")},250);
        let audio=new Audio("./Sounds/tom-3.mp3");
        audio.play();
    }
    else if(itemid==="item4"){
        document.getElementById("item4").classList.add("active");
        setTimeout(()=>{document.getElementById("item4").classList.remove("active")},250);
        let audio=new Audio("./Sounds/tom-4.mp3");
        audio.play();
    }
    else if(itemid==="item5"){
        document.getElementById("item5").classList.add("active");
        setTimeout(()=>{document.getElementById("item5").classList.remove("active")},250);
        let audio=new Audio("./Sounds/snare.mp3");
        audio.play();
    }
    else if(itemid==="item6"){
        document.getElementById("item6").classList.add("active");
        setTimeout(()=>{document.getElementById("item6").classList.remove("active")},250);
        let audio=new Audio("./Sounds/crash.mp3");
        audio.play();
    }
    else if(itemid==="item7"){
        document.getElementById("item7").classList.add("active");
        setTimeout(()=>{document.getElementById("item7").classList.remove("active")},250);
        let audio=new Audio("./Sounds/kick-bass.mp3");
        audio.play();
    }
}