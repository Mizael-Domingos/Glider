var sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], {
    gap: 15,
  });
  
  glide.mount();
}

// var glide = new Glider('#options-rewind', {
//   rewind: checkbox.checked,
//   startAt: 6,
//   perView: 2
// })

// checkbox.addEventListener('change', function () {
//   glide.update({
//     rewind: checkbox.checked
//   })
// })

// glide.mount()