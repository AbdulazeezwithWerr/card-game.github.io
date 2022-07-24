
let paths = ["pics/a.png" , "pics/2.png","pics/card-3.png","pics/4.png","pics/5.png","pics/6.png","pics/card-7.png","pics/8.png","pics/card-9.png","pics/card-10.png" ]
let clicked = 0, clicked2 = 0

const image = (x) => {
    let img = document.createElement("img")
    img.src = paths[x]
    // img.className = "car"
    img.className = "image";
    img.id = x 
    return img 
}

const Summary = (x , y ) => {
    if(x==4 && y==4){
        let body = document.querySelector("body") 
        let images = document.querySelectorAll("img")
        let pl = 0 , com = 0        
        images.forEach((element , index) => {
            index<4 ? pl = pl + element.id*1 :  com = com + element.id*1
        })       
        let win = document.createElement("h1")
        win.className = "win"
        win.innerHTML = "YOU WIN ! (" + pl + ":"+com+")"
        let lose = document.createElement("h1")
        lose.className = "lose"
        lose.innerHTML = "YOU LOSE !  (" + pl + ":"+com+")"

        
        let subBody = document.getElementById("sub-body")
        if(pl>com){
            body.append(win)
            subBody.style.backgroundColor = "rgba(0, 0, 0, 0.555)"
            subBody.style.filter = "blur(16px)"
        } else {
            body.append(lose)
            subBody.style.backgroundColor = "rgba(0, 0, 0, 0.555)"
            subBody.style.filter = "blur(16px)"
        }

        
}
}

const HandlePlayer = (e) => {
    if(clicked < 4 ){
        let player = document.querySelector(".card .player")    
        let i =Math.floor(Math.random() * 10)
       
        player.append(image(i))
        clicked++
    }    
   Summary(clicked , clicked2)
} 



const HandleComputer = (e) => {
    if(clicked2 < 4 ){
        let computer = document.querySelector(".card .computer")
        let i =Math.floor(Math.random() * 10) 
        computer.append(image(i))
        clicked2++
    }
    Summary(clicked , clicked2)  
}




