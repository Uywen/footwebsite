// got the image from session storage and turned it into an array again using "JSON.parse"
let photos = JSON.parse(sessionStorage.getItem('images'))

// the div where the image would be displayed
let addimg = document.querySelector('#addimg')


// the function used to add an image to another webpage
function addingimg(){
    for(let i=0;i<photos.length;i++){
        // created an img tag because the links did not have them when transferred to session storage
        // they were just links
    let img = document.createElement('img')

    // added the image and src element to each link so that the img could be rendered
    img.src = photos[i]

    // appended the div with the img tag
    addimg.appendChild(img)
    }
}
addingimg()