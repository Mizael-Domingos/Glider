const carousels = document.querySelectorAll(".carousels");

        Object.values(carousels).map(carousel => {
            const slider = new Glide(carousel, {
                type: "carousel"
            });
            slider.mount();
        });

var checkbox = document.querySelector('#options-rewind-checkbox')

var glide = new Glider('#options-rewind', {
  rewind: checkbox.checked,
  startAt: 6,
  perView: 2
})

checkbox.addEventListener('change', function () {
  glide.update({
    rewind: checkbox.checked
  })
})

glide.mount()