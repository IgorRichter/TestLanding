var a,n,s,b;function r(e,t){return new Swiper(e,t)}function o(e){return e&&e.destroy(!0,!0),null}function d(){let e=window.matchMedia("(min-width: 1440px)").matches;a=e?o(a):a||r(".cards",{width:355,spaceBetween:10,slidesPerColumn:1.5,centeredSlides:!0,simulateTouch:!0}),b=r(".tariff",{width:e?515:355,spaceBetween:10,slidesPerColumn:1.5,centeredSlides:!0,simulateTouch:!0}),n=o(n),n=r(".audience",{width:e?515:355,spaceBetween:10,slidesPerColumn:1.5,centeredSlides:!0,simulateTouch:!0}),e?o(s):s||(s=r(".possibilities__wrapper",{width:355,spaceBetween:10,slidesPerColumn:1.5,centeredSlides:!0,simulateTouch:!0,pagination:{el:".possibilities__mobile-nav",clickable:!0}}),s.on("slideChange",function(){m()})),p(e)}function p(e){let t=document.querySelectorAll(".possibilities__list-item"),u=document.querySelectorAll(".possibilities__image");t.forEach(l=>{l.removeEventListener("click",i),e?l.addEventListener("click",i):l.addEventListener("click",_)});function i(){let l=this.getAttribute("data-number");t.forEach(c=>c.classList.remove("possibilities__list-item--active")),this.classList.add("possibilities__list-item--active"),u.forEach(c=>{c.getAttribute("data-number")===l?c.classList.add("possibilities__image--active"):c.classList.remove("possibilities__image--active")})}function _(){let l=this.getAttribute("data-number");s.slideTo(l-1)}!e&&s&&m()}function m(){let e=s.slides[s.activeIndex].querySelector(".possibilities__list-item").getAttribute("data-number"),t=document.querySelectorAll(".possibilities__image");document.querySelectorAll(".possibilities__list-item").forEach(i=>{i.getAttribute("data-number")===e?i.classList.add("possibilities__list-item--active"):i.classList.remove("possibilities__list-item--active")}),t.forEach(i=>{i.getAttribute("data-number")===e?i.classList.add("possibilities__image--active"):i.classList.remove("possibilities__image--active")})}d();window.addEventListener("resize",d);document.querySelectorAll(".cards__item").forEach(function(e){e.addEventListener("click",function(){document.querySelectorAll(".cards__item").forEach(function(t){t.classList.remove("cards__item--active")}),e.classList.add("cards__item--active")})});