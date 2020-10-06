var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


var modal = document.getElementById("myModal");

// Get the buttons that open the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

for(i = 0; i < btn.length; i++){
// When the user clicks the buttons, open the modal 
  btn[i].onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   }
  }
}

localStorage.setItem('key', 'value')
