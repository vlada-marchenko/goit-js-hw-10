import"./assets/styles-Cif6P8h5.js";import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";const t={input:document.querySelector("#datetime-picker"),button:document.querySelector("button"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let s=null;t.button.disabled=!0;new Date().getTime();let o=null;l("input#datetime-picker",{locale:{firstDayOfWeek:1},enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){f(e[0])}});function f(e){const n=new Date().getTime();e.getTime()>n?(s=e.getTime(),t.button.disabled=!1):(m.warning({message:"Please choose a date in the future"}),t.button.disabled=!0)}t.button.addEventListener("click",h);function h(e){o&&clearInterval(o),t.input.disabled=!0,o=setInterval(()=>{const n=new Date().getTime(),r=s-n;if(y(r),r<=0){clearInterval(o),t.input.disabled=!1,b();return}},1e3)}function y(e){if(e>0){const n=p(e);t.days.textContent=u(n.days),t.hours.textContent=u(n.hours),t.minutes.textContent=u(n.minutes),t.seconds.textContent=u(n.seconds)}}function b(){t.days.textContent="00",t.hours.textContent="00",t.minutes.textContent="00",t.seconds.textContent="00"}function u(e){return String(e).padStart(2,"0")}function p(e){const a=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:c,seconds:d}}
//# sourceMappingURL=1-timer.js.map
