const imgRow = document.getElementById("img-row")
imgRow.innerHTML = ""

const getPhotos = function(argument)
{
    fetch(`https://api.pexels.com/v1/search?query=${argument}`, {
        headers:
        {
            Authorization: '4mLlq5LuOSddO0RFtCvFAqjaoMwZsO6avHjv4WdUJoMWs8kzJRhStRep'
        }
    })
    .then((res) => {
        if(res.ok) return res.json()
        })
    .then((data) => {
        sessionStorage.setItem("argument", argument)
        imgRow.innerHTML = ""
        data.photos.forEach(photo => 
        {
            console.log(photo)
            let img = document.createElement("div")
            img.classList.add("col-md-4")
            img.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src="${photo.src.landscape}"
                    >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                            Thumbnail
                        </text>
                    </img>
                    <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                View
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary hide">
                                Hide
                            </button>
                        </div>
                        <small class="text-muted">${photo.id}</small>
                    </div>
                </div>
            `
            imgRow.appendChild(img)
            enableHide()
       });
    })
    .catch((err) => {
        console.log(err)
    })
}



//Pulsante primario
document.getElementById("load-images").addEventListener("click", function(){
    getPhotos("hello")
})

//Pulsante secondario
document.getElementById("load-secondary-images").addEventListener("click", function(){
    getPhotos("cats")
})

//Pulsante searchbar
document.getElementById("nav-search").addEventListener("click", function(){
    getPhotos(document.getElementById("search").value)
})


const enableHide = function()
{
    const hide = document.querySelectorAll(".hide")
    hide.forEach((element) => {
        element.addEventListener("click", function(){
            element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("d-none")
        })
    })    
}



/*
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </img>
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
*/