let inputMessage = document.getElementById("inputMessage")
let inputMessageValue = inputMessage.value
let messageText = document.getElementById("messageText")
const buttonSend = document.getElementById("buttonSend")
let messageBox = document.getElementById("messageBox")

buttonSend.addEventListener("click", () => {
    let inputMessage = document.getElementById("inputMessage")
    let inputMessageValue = inputMessage.value
    messageBox.style.display = "block"
    messageText.innerText = inputMessageValue
})
let perfil = document.getElementById("perfil")
let perfilphoto = document.getElementById("perfilphoto")
let perfilphotoicone = document.getElementById("perfilphotoicone")
let perfilinfo = document.getElementById("perfilinfo")
const perfillclick = document.getElementById("myPerfil")
const voltarperfil = document.getElementById("voltarperfil")
perfillclick.addEventListener("click", ()=>{
    perfil.style.display="block"
    perfil.classList.add("perfilanimation")
    setTimeout(()=>{
        perfilphoto.classList.add("perfilphotoanimation")
        perfilphotoicone.style.display="block"
    }, 200)
    setTimeout(()=>{
        perfilphoto.classList.add("perfilphotoscale")
    }, 250)
    setTimeout(()=>{
        perfilinfo.classList.add("perfilinfoanimation")
        //perfilinfo.classList.add("perfilinfoscale")
        perfilinfo.style.height="230px"
    }, 400)
})
voltarperfil.addEventListener("click", ()=>{
    perfil.classList.remove("perfilanimation")
    perfilphoto.classList.remove("perfilphotoanimation")
    perfilphoto.classList.remove("perfilphotoscale")
    perfilinfo.classList.remove("perfilinfoanimation")
    perfilphotoicone.style.display="none"
    perfil.style.display="none"
    perfilinfo.style.height="0"
})
let newcontacts = document.getElementById("newcontacts")
const newcontactsclick = document.getElementById("newcontactsclick")
newcontactsclick.addEventListener("click", ()=>{
    newcontacts.style.display="block"
    newcontacts.classList.add("newcontactsanimation")
    setTimeout(()=>{
        newcontacts.classList.add("newcontactsscale")
    }, 250)
})
const backhome = document.getElementById("backhome")
backhome.addEventListener("click", ()=>{
    newcontacts.style.display="none"
})
const maisopcoes = document.getElementById("maisopcoes")
let maisopcoesaba = document.getElementById("maisopcoesaba")
maisopcoes.addEventListener("click", ()=>{
    maisopcoesaba.style.display="block"
    maisopcoesvoltar.style.display="block"
    maisopcoesaba.classList.add("maisopcoesanimation")
    setTimeout(()=>{
        maisopcoesaba.classList.add("maisopcoesscale")
    }, 300)
})
const maisopcoesvoltar = document.getElementById("maisopcoesvoltar")
maisopcoesvoltar.addEventListener("click", ()=>{
    maisopcoesaba.style.display="none"
    maisopcoesvoltar.style.display="none"
    maisopcoesaba.classList.remove("maisopcoesanimatio")
    maisopcoesaba.classList.remove("maisopcoesscale")
})
const perfilconfig = document.getElementById("perfilconfig")
perfilconfig.addEventListener("click", ()=>{
    perfil.style.display="block"
    perfil.style.zIndex="10"
    perfil.classList.add("perfilanimation")
    setTimeout(()=>{
        perfilphoto.classList.add("perfilphotoanimation")
        perfilphotoicone.style.display="block"
    }, 200)
    setTimeout(()=>{
        perfilphoto.classList.add("perfilphotoscale")
    }, 250)
    setTimeout(()=>{
        perfilinfo.classList.add("perfilinfoanimation")
        //perfilinfo.classList.add("perfilinfoscale")
        perfilinfo.style.height="230px"
    }, 400)
})
const configurationsclick = document.getElementById("configurationsclick")
let configurations = document.getElementById("configurations")
configurationsclick.addEventListener("click", ()=>{
    configurations.style.display="block"
    configurations.classList.add("configanimation")
    setTimeout(()=>{
        configurations.classList.add("configscale")
    }, 300)
})
const backconfig = document.getElementById("backconfigicon")
backconfig.addEventListener("click", ()=>{
    configurations.style.display="none"
    maisopcoesaba.style.display="none"
    maisopcoesvoltar.style.display="none"
    maisopcoesaba.classList.remove("maisopcoesanimatio")
    maisopcoesaba.classList.remove("maisopcoesscale")
    configurations.classList.remove("configanimation")
    configurations.classList.remove("configscale")
})