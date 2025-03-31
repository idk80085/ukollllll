
var blu = false


document.getElementById("button2").addEventListener("click", ()=>{
    if(blu){
        document.getElementById("barva").style.backgroundColor = "orange"
        blu = false
    }else{
        document.getElementById("barva").style.backgroundColor = "blue"
        blu = true
    }
    document.getElementById("barva").style.width =Math.random()*300 + "px"

})

document.getElementById("button3").addEventListener("click", ()=>{
    document.addEventListener("nadpis")
})


document.getElementById("button").addEventListener("click", ()=>{
    alert("tlačítko zmáčknuto")
})
