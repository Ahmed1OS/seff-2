var shopicon = document.querySelectorAll("#shoppingcart")
var shopiconspan = document.querySelector(".empty-span-icon2")
var playicon = document.querySelectorAll("#poster-play")
var shopiconspan1 = document.querySelector(".empty-span-icon")
var ahmed = document.querySelector(".ahmed")
var button_submit = document.querySelector("#its-submit")
var formplace = document.querySelector(".form-place")
var nextpage = document.querySelector("#nextpage")
var progressbar = document.querySelector("#p-bar")
var allinputs = document.querySelectorAll("input")
var fname = document.querySelector("#fname")
var lname = document.querySelector("#lname")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var films = document.querySelectorAll(".title")
var clicky_icon = document.querySelector("#icon")
var test_icon = document.querySelector("#icon2")
var popy = document.querySelector(".popy")
var popy_up = document.querySelector(".popy-up")

var x = 1 , y = 1 
var price = 0



films.forEach(function(movie){
    movie.onclick = function(){
        popy.style.display = "block"
        popy_up.style.display = "block"
        popy.innerHTML += movie.textContent + " " 
        shopiconspan1.style.display = "block"
        shopiconspan1.innerHTML= x++    
        price = shopiconspan1.textContent
       popy_up.innerHTML =  price * 3 + " $"
    }
})

playicon.forEach(function(play_icon){

    play_icon.onclick = function () {
        shopiconspan1.style.display = "block"
        shopiconspan1.innerHTML= x++
        popy_up.style.display = "block"

        popy.style.display = "block"
        price = shopiconspan1.textContent
        popy_up.innerHTML =  price * 3 + " $"

    }

})

shopicon.forEach(function(shop_icon){

    shop_icon.onclick = function () {
        shopiconspan.style.display = "block"
        shopiconspan.innerHTML= y++
    }

})

button_submit.onclick = function (){
    progressbar.style.width = "100%"
    nextpage.style.display = "block"
}
nextpage.onclick = function (){
    button_submit.style.display = "none"

    ahmed.style.display = "block"
    formplace.style.display = "none"

}
















