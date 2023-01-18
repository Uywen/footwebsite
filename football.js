let input = document.querySelector('#putting')
let comment = []
let comlist = document.querySelector('#itemList')


shoplist()

function shoplist() {
    for (let i = 0; i < comment.length; i++) {
        let comments = document.createElement('li')
        let span = document.createElement('span')
        comments.textContent = comment[i];
        // all span elements have the class name "close"
        span.className = "close"


        comments.appendChild(span)
        comlist.appendChild(comments);

    }
}

function updateList() {
 
  // added an empty array so that it does not duplicate the default grocery list
  comment = []

  // pushing all the new items into the input
  comment.push(input.value)

  // returns the input value text box back to an empty textbox once the item has been added
  input.value = ''
  shoplist()
  console.log(input.value)
}

function like(){
  alert("Thank you !")
}


let array = []
function save(e){
  array.push(e.target.previousElementSibling.src)

console.log(array)
console.log(e.target.previousElementSibling.src)
sessionStorage.setItem("images",JSON.stringify(array))

alert("This is the amount of images in your save for later: " + array.length)
}



