!function(){var e,t,c,o,n,d,r,l,s;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),o=document.querySelector(".js-closeByHome"),n=document.querySelector(".js-closeByAboutAs"),d=document.querySelector(".js-closeByHowItMade"),r=document.querySelector(".js-closeByProducts"),l=document.querySelector(".js-closeByContact"),s=function(){var c="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!c),e.classList.toggle("is-open"),bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",s),c.addEventListener("click",s),o.addEventListener("click",s),n.addEventListener("click",s),d.addEventListener("click",s),r.addEventListener("click",s),l.addEventListener("click",s),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(c){c.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.d562739d.js.map
