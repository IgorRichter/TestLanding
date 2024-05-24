let swiperCards, swiperBusiness, swiperPossibilities, swiperTariff;
const DESKTOP_WIDTH = 515;
const MODILE_WIDTH = 355;


function initSwiper(selector, options) {
  return new Swiper(selector, options);
}

function destroySwiper(swiperInstance) {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
  return null;
}

function handleResize() {
  const isWideScreen = window.matchMedia('(min-width: 1440px)').matches;

  swiperCards = !isWideScreen ? swiperCards || initSwiper('.cards', {
    width: MODILE_WIDTH,
    spaceBetween: 10,
    slidesPerColumn: 1.5,
    centeredSlides: true,
    simulateTouch: true
  }) : destroySwiper(swiperCards);

  swiperTariff = initSwiper('.tariff', {
    width: isWideScreen ? DESKTOP_WIDTH : MODILE_WIDTH,
    spaceBetween: 10,
    slidesPerColumn: 1.5,
    centeredSlides: true,
    simulateTouch: true,
  });

  swiperBusiness = destroySwiper(swiperBusiness);
  swiperBusiness = initSwiper('.audience', {
    width: isWideScreen ? DESKTOP_WIDTH : MODILE_WIDTH,
    spaceBetween: 10,
    slidesPerColumn: 1.5,
    centeredSlides: true,
    simulateTouch: true
  });

  if (!isWideScreen) {
    if (!swiperPossibilities) {
      swiperPossibilities = initSwiper('.possibilities__wrapper', {
        width: MODILE_WIDTH,
        spaceBetween: 10,
        slidesPerColumn: 1.5,
        centeredSlides: true,
        simulateTouch: true,
        pagination: {
          el: '.possibilities__mobile-nav',
          clickable: true
        }
      });

      swiperPossibilities.on('slideChange', function () {
        updateActivePossibility();
      });
    }
  } else {
    destroySwiper(swiperPossibilities);
  }

  setupPossibilitiesWithoutSwiper(isWideScreen);
}

function setupPossibilitiesWithoutSwiper(isWideScreen) {
  const listItems = document.querySelectorAll('.possibilities__list-item');
  const images = document.querySelectorAll('.possibilities__image');

  listItems.forEach(item => {
    item.removeEventListener('click', handlePossibilitiesClick);
    if (isWideScreen) {
      item.addEventListener('click', handlePossibilitiesClick);
    } else {
      item.addEventListener('click', handleSwiperClick);
    }
  });

  function handlePossibilitiesClick() {
    const number = this.getAttribute('data-number');

    listItems.forEach(li => li.classList.remove('possibilities__list-item--active'));
    this.classList.add('possibilities__list-item--active');

    images.forEach(img => {
      if (img.getAttribute('data-number') === number) {
        img.classList.add('possibilities__image--active');
      } else {
        img.classList.remove('possibilities__image--active');
      }
    });
  }

  function handleSwiperClick() {
    const number = this.getAttribute('data-number');
    swiperPossibilities.slideTo(number - 1);
  }

  if (!isWideScreen && swiperPossibilities) {
    updateActivePossibility();
  }
}

function updateActivePossibility() {
  const activeNumber = swiperPossibilities.slides[swiperPossibilities.activeIndex].querySelector('.possibilities__list-item').getAttribute('data-number');
  const images = document.querySelectorAll('.possibilities__image');
  const listItems = document.querySelectorAll('.possibilities__list-item');

  listItems.forEach(item => {
    if (item.getAttribute('data-number') === activeNumber) {
      item.classList.add('possibilities__list-item--active');
    } else {
      item.classList.remove('possibilities__list-item--active');
    }
  });

  images.forEach(img => {
    if (img.getAttribute('data-number') === activeNumber) {
      img.classList.add('possibilities__image--active');
    } else {
      img.classList.remove('possibilities__image--active');
    }
  });
}

handleResize();
window.addEventListener('resize', handleResize);



document.querySelectorAll('.cards__item').forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelectorAll('.cards__item').forEach(function(el) {
      el.classList.remove('cards__item--active');
    });
    item.classList.add('cards__item--active');
  });
});