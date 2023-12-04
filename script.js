let img = document.getElementById('img')
let button = document.getElementById('button')

function getNewImg(){
    button.textContent = "Loading..."
    img.src = "https://thispersondoesnotexist.com"
  img.onload = ()=>{
    button.textContent = "New Image"
  }


}

getNewImg()

button.addEventListener('click',getNewImg)