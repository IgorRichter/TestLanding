const items = document.querySelectorAll('.main-description__technologies-item');

let reqAnimFrame = (function() {
  return requestAnimationFrame ||
         mozRequestAnimationFrame ||
         webkitRequestAnimationFrame ||
         oRequestAnimationFrame ||
         msRequestAnimationFrame ||
  function(callback) {
      setTimeout(callback, 1000 / 60);
  };
})();

function animate({timing, draw, duration, onEnd}) {
  let start = performance.now();

  reqAnimFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      reqAnimFrame(animate);
    } else {
      onEnd();
    }
  });
}

items.forEach(item => {
  const list = item.querySelector('.main-description__technologies-item-list');
  list.style.height = '0px';

  item.addEventListener('click', () => {
    const icon = item.querySelector('.main-description__technologies-toggle use');
    const isActive = item.classList.contains('is-active-flex');

    if (item.classList.contains('animating')) {
      return;
    }

    item.classList.add('animating');

    const onEnd = () => {
      item.classList.remove('animating');
    };

    items.forEach(i => {
      if (i !== item && i.classList.contains('is-active-flex')) {
        const otherList = i.querySelector('.main-description__technologies-item-list');
        const otherIcon = i.querySelector('.main-description__technologies-toggle use');
        let otherHeightElem = otherList.scrollHeight;

        animate({
          duration: 300,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            let antiProgress = 1 - progress;
            otherList.style.height = antiProgress * otherHeightElem + 'px';
          },
          onEnd: () => {
            i.classList.remove('is-active-flex');
            otherIcon.setAttribute('href', 'icons/stack.svg#plus');
            otherList.style.height = '0px';
            i.classList.remove('animating');
          }
        });
      }
    });

    if (!isActive) {
      let heightElem = list.scrollHeight;

      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          list.style.height = progress * heightElem + 'px';
        },
        onEnd: () => {
          item.classList.add('is-active-flex');
          icon.setAttribute('href', 'icons/stack.svg#minus');
          onEnd();
        }
      });
    } else {
      let heightElem = list.scrollHeight;

      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          let antiProgress = 1 - progress;
          list.style.height = antiProgress * heightElem + 'px';
        },
        onEnd: () => {
          item.classList.remove('is-active-flex');
          list.style.height = '0px';
          icon.setAttribute('href', 'icons/stack.svg#plus');
          onEnd();
        }
      });
    }
  });
});
