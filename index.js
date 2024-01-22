window.onload = function() {
  hideOnLoad()
};
function hideOnLoad(){
  const collection = document.getElementsByClassName("project-image-description");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = "none";
  }
}

function show(parent){
  parent.children[0].style.display = "inline-block";
  }
  
function hide(parent){
  parent.children[0].style.display = "none";
}