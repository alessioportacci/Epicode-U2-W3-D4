let obj
const getPhotos = function()
{
    fetch("https://api.pexels.com/v1/search?query=people", {
        headers:{
            Authorization: '4mLlq5LuOSddO0RFtCvFAqjaoMwZsO6avHjv4WdUJoMWs8kzJRhStRep'
        }
    })
    .then((res) => {
        if(res.ok) return res.json()
        })
    .then((data) => {
       obj = data.photos
       console.log(obj)
    })
    .catch((err) => {
        console.log(err)
    })
}



getPhotos()

const imgs = document.querySelectorAll(".card-img-top")
const loadImages = document.getElementById("load-images")
loadImages.addEventListener("click", function()
{
    console.log(imgs)
    let i = 0
    imgs.forEach(img => {
        this.setAttribute("src", obj[i].src.original)
        i++
    })
})