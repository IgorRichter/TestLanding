function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  let elements = document.querySelectorAll('.startwork__text-wrp');
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('startwork__text-wrp--visible');
    } else {
      element.classList.remove('startwork__text-wrp--visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);