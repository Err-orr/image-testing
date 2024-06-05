window.addEventListener("load", function()){
  var nodes = document.querySelectorAll
  (".dropout > img");
  for(var i=0; i<nodes.length; i++){
    nodes[i].style.zIndex = i;
    nodes[i].addEventListener("click", function(){
      this.classList.add("closing");
    });
    nodes[i].addEventListener("animationed, function"(){
      var children = this.parentNode.children;
      for(var n=0; n<children.length; n++)
    })
  }
}