!function(){var t=document.body,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");d.disabled="true",e.addEventListener("click",(function(){e.disabled="true",d.disabled="",timerId=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),d.addEventListener("click",(function(){clearInterval(timerId),e.disabled="",d.disabled="true"}))}();
//# sourceMappingURL=01-color-switcher.8834978f.js.map