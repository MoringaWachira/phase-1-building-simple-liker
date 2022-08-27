// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal")
errorModal.className = "hidden"
const like = document.querySelectorAll(".like-glyph")
like.forEach(element => {
  element.addEventListener("click", function(){
    mimicServerCall()
    .then(data =>{
      if (element.innerHTML === FULL_HEART) {
        element.innerHTML = EMPTY_HEART
        element.className = ""
      } else {
        element.innerHTML = FULL_HEART
        element.className = "activated-heart"
      }

    })
    .catch(error => {
      errorModal.className = ""
      setTimeout(()=>{
        errorModal.className = "hidden"

      },3000)
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
