let input=document.getElementById("bgcolor")
let input2=document.getElementById("bradius")
let image=document.querySelector("img")
let input3=document.getElementById("pswd")
let icon=document.getElementById("icon")



function colorChange(z){
    console.log(z);

     if(z.key==="Enter"){
        document.body.style.background=`Radial-gradient(${input.value})`
     }
}

function RadiusChange(z){
    console.log(z)
    if(z.key==="Enter"){
        image.style.borderRadius=`${input2.value}`
    }
}


icon.onclick=function(){
    if(input3.type==="password"){
        input3.type="text"
        icon.className="fa-solid fa-eye"
    }else{
        input3.type="password"
        icon.className="fa-solid fa-eye-slash" 
    }
}

