const onMouseMove = (e) =>{
  $("#personal-site-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#hydromon-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#food-bowl-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#scale-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
}

function hover(element) {
  element.setAttribute('src', 'Assets/folder_icon_hover.svg');
  document.addEventListener('mousemove', onMouseMove);
  if(element.id == "personal-site") {
    $("#personal-site-details").css('display', 'grid');
  }
  if(element.id == "hydromon") {
    $("#hydromon-details").css('display', 'grid');
  }
  if(element.id == "food-bowl") {
    $("#food-bowl-details").css('display', 'grid');
  }
  if(element.id == "scale") {
    $("#scale-details").css('display', 'grid');
  }
}

function unhover(element) {
  element.setAttribute('src', 'Assets/folder_icon_default.svg');
  $("#personal-site-details").css('display', 'none');
  $("#hydromon-details").css('display', 'none');
  $("#food-bowl-details").css('display', 'none');
  $("#scale-details").css('display', 'none');
  document.removeEventListener('mousemove', onMouseMove);
}
