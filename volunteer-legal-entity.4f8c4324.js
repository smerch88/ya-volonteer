const e=document.querySelector(".dropdown-btn"),t=document.querySelector(".header__dropdown-list");function n(){t.classList.add("header__dropdown-list--open"),e.classList.add("active"),e.removeEventListener("click",n),e.addEventListener("click",o),document.body.addEventListener("click",i)}function o(){t.classList.remove("header__dropdown-list--open"),e.classList.remove("active"),e.removeEventListener("click",o),e.addEventListener("click",n),document.body.removeEventListener("click",i)}function i(e){!e.target.closest(".header__nav-item")&&o()}e.addEventListener("click",n);const s=document.querySelector(".menu-btn"),c=document.querySelector(".cross"),d=document.querySelector(".mobile-menu__backdrop");function l(){d.classList.add("mobile-menu__backdrop--open"),c.addEventListener("click",r),s.removeEventListener("click",l),document.body.addEventListener("click",a),window.innerWidth>768||(document.body.style.overflow="hidden")}function r(){d.classList.remove("mobile-menu__backdrop--open"),s.addEventListener("click",l),c.removeEventListener("click",r),t.classList.contains("header__dropdown-list--open")&&o(),window.innerWidth>768||(document.body.style.overflow="auto")}function a(e){!e.target.closest(".mobile-menu__backdrop")&&!e.target.closest(".menu-btn")&&(r(),document.body.removeEventListener("click",a))}s.addEventListener("click",l);let u=document.documentElement.scrollTop;const m=document.querySelector(".header");window.addEventListener("scroll",(function(){const e=document.documentElement.scrollTop,n=m.classList.contains("header--hidden");u>e&&n?m.classList.remove("header--hidden"):u<e&&!n&&(m.classList.add("header--hidden"),t.classList.contains("header__dropdown-list--open")&&o(),d.classList.contains("mobile-menu__backdrop--open")&&r()),u=e<0?10:e}));const v=document.querySelector(".volunteer__butoons-list"),L=document.querySelector(".volunteer__title"),b=[...document.querySelectorAll("[data-radio-list]")];v.addEventListener("change",(function(e){b.map((t=>{if(t.dataset.radio===e.target.id)L.innerHTML=e.target.nextElementSibling.textContent,t.removeAttribute("hidden");else{if(t.hasAttribute("hidden"))return;t.setAttribute("hidden",!0)}}))}));const _=document.querySelector(".volunteer__burger"),h=document.querySelector(".volunteer__butoons-list");function y(e){Boolean(e.target.closest(".volunteer__butoons-item")||!e.target.closest(".volunteer__butoons-list"))&&(h.classList.remove("volunteer__butoons-list--open"),_.classList.remove("volunteer__burger--open"),window.removeEventListener("click",y))}_.addEventListener("click",(function(){if(h.classList.contains("volunteer__butoons-list--open"))return h.classList.remove("volunteer__butoons-list--open"),_.classList.remove("volunteer__burger--open"),void window.removeEventListener("click",y);h.classList.add("volunteer__butoons-list--open"),_.classList.add("volunteer__burger--open"),setTimeout((()=>window.addEventListener("click",y)))}));const p=document.querySelector(".volunteer__aside");new MutationObserver((function(e){e.forEach((function(e){"attributes"===e.type&&"class"===e.attributeName&&function(){const e=m.classList.contains("header--hidden");e?p.classList.remove("volunteer__aside--top"):e||p.classList.add("volunteer__aside--top")}()}))})).observe(m,{attributes:!0,childList:!1,subtree:!1});const E=document.querySelector("#btnMore"),k=document.querySelector("#btnMore2"),f=document.querySelector("#btnMore3"),w=document.querySelector("#list"),g=document.querySelector("#list2"),S=document.querySelector("#list3");E.addEventListener("click",(function(){E.classList.add("visually-hidden-mobile");for(let e=0;e<w.children.length;e+=1)w.children[e].classList.contains("visually-hidden-mobile")&&w.children[e].classList.remove("visually-hidden-mobile")})),k.addEventListener("click",(function(){k.classList.add("visually-hidden-mobile");for(let e=0;e<g.children.length;e+=1)g.children[e].classList.contains("visually-hidden-mobile")&&g.children[e].classList.remove("visually-hidden-mobile")})),f.addEventListener("click",(function(){f.classList.add("visually-hidden-mobile");for(let e=0;e<S.children.length;e+=1)S.children[e].classList.contains("visually-hidden-mobile")&&S.children[e].classList.remove("visually-hidden-mobile")}));const{height:q}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${q}px`;
//# sourceMappingURL=volunteer-legal-entity.4f8c4324.js.map
