var r=document.querySelector(".game-score"),e=document.querySelector(".start"),t=document.querySelectorAll(".field-cell"),o=document.querySelector(".message-lose"),a=document.querySelector(".message-win"),n=document.querySelector(".message-start"),s=0,c=[];function d(){for(var e=[],o=0;o<4;o++)for(var a=0;a<4;a++)0===c[o][a]&&e.push({row:o,col:a});if(e.length>0){var n=e[Math.floor(Math.random()*e.length)];c[n.row][n.col]=.9>Math.random()?2:4}for(var d=0;d<t.length;d++){var f=Math.floor(d/4),i=d%4;t[d].textContent=0===c[f][i]?"":c[f][i],t[d].className="field-cell",0!==c[f][i]&&t[d].classList.add("field-cell--".concat(c[f][i]))}r.textContent=s}e.addEventListener("click",function(){s=0,e.textContent="Restart",e.classList.remove("start"),e.classList.add("restart"),r.textContent=s,o.classList.add("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],d(),d()}),document.addEventListener("keydown",function(r){var e=!1;switch(r.key){case"ArrowUp":e=function(){for(var r=!1,e=0;e<4;e++)for(var t=1;t<4;t++)if(0!==c[t][e]){for(var o=t;o>0&&0===c[o-1][e];)c[o-1][e]=c[o][e],c[o][e]=0,o--,r=!0;o>0&&c[o-1][e]===c[o][e]&&(c[o-1][e]*=2,s+=c[o-1][e],c[o][e]=0,r=!0)}return r}();break;case"ArrowDown":e=function(){for(var r=!1,e=0;e<4;e++)for(var t=2;t>=0;t--)if(0!==c[t][e]){for(var o=t;o<3&&0===c[o+1][e];)c[o+1][e]=c[o][e],c[o][e]=0,o++,r=!0;o<3&&c[o+1][e]===c[o][e]&&(c[o+1][e]*=2,s+=c[o+1][e],c[o][e]=0,r=!0)}return r}();break;case"ArrowRight":e=function(){for(var r=!1,e=0;e<4;e++)for(var t=2;t>=0;t--)if(0!==c[e][t]){for(var o=t;o<3&&0===c[e][o+1];)c[e][o+1]=c[e][o],c[e][o]=0,o++,r=!0;o<3&&c[e][o+1]===c[e][o]&&(c[e][o+1]*=2,s+=c[e][o+1],c[e][o]=0,r=!0)}return r}();break;case"ArrowLeft":e=function(){for(var r=!1,e=0;e<4;e++)for(var t=1;t<=3;t++)if(0!==c[e][t]){for(var o=t;o>0&&0===c[e][o-1];)c[e][o-1]=c[e][o],c[e][o]=0,o--,r=!0;o>0&&c[e][o-1]===c[e][o]&&(c[e][o-1]*=2,s+=c[e][o-1],c[e][o]=0,r=!0)}return r}()}e&&d(),function(){for(var r=0;r<4;r++)for(var e=0;e<4;e++)if(0===c[r][e]||r<3&&c[r][e]===c[r+1][e]||e<3&&c[r][e]===c[r][e+1])return!1;return!0}()?o.classList.remove("hidden"):function(){for(var r=0;r<4;r++)for(var e=0;e<4;e++)if(2048===c[r][e])return!0;return!1}()&&(o.classList.add("hidden"),a.classList.remove("hidden"))});
//# sourceMappingURL=index.6a6aa163.js.map