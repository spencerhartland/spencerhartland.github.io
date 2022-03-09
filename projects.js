const onMouseMove = (e) =>{
  $("#personal-site-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#food-bowl-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
}

function hover(element) {
  element.setAttribute('src', 'Assets/folder_icon_hover.svg');
  document.addEventListener('mousemove', onMouseMove);
  if(element.id == "personal-site") {
    $("#personal-site-details").css('opacity', '100');
  }
  if(element.id == "food-bowl") {
    $("#food-bowl-details").css('opacity', '100');
  }
}

function unhover(element) {
  element.setAttribute('src', 'Assets/folder_icon_default.svg');
  $("#personal-site-details").css('opacity', '0');
  $("#food-bowl-details").css('opacity', '0');
  document.removeEventListener('mousemove', onMouseMove);
}
