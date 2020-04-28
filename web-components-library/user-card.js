!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e),t.d(e,"UserCard",(function(){return r}));const o=document.createElement("template");o.innerHTML='\n        <style>\n            .user-card {\n                box-sizing: border-box;\n                font-family: \'Arial\', sans-serif;\n                background: #f4f4f4;\n                height: 200px;\n                display: flex;\n                border-bottom: lightblue 5px solid;\n                align-items: center;\n            }\n            .user-card:hover {\n                background: #BDECFB;\n            }\n            .img-container {\n                box-sizing: border-box;\n                margin-right: 5%;\n                width: 30%;\n                text-align: center;\n            }\n            .img-container img {\n                border-radius: 50%;\n            }\n            .info-container {\n                width: 70%;\n            }\n            .user-card button {\n                cursor: pointer;\n                background: #989fa5;\n                color: #fff;\n                border: 0;\n                border-radius: 5px;\n                padding: 5px 10px;\n            }\n            .info {\n                display: none;\n            }\n            h3 {\n                color: coral;\n                cursor: pointer;\n            }\n            #delete-btn {\n                background: red;\n            }\n        </style>\n        <div class="user-card">\n            <div class="img-container">\n                <img></img>\n            </div>\n            <div class="info-container">\n                <h3></h3>\n                <div class="info">\n                    <p><slot name="email"/></p>\n                    <p><slot name="phone"/></p>\n                </div>\n                <button id="toggle-info">Show Info</button>\n                <button id="delete-btn">Delete</button>\n            </div>\n        </div>\n    ';class r extends HTMLElement{constructor(){super(),this.showInfo=!1,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o.content.cloneNode(!0))}connectedCallback(){this.shadowRoot.querySelector("#toggle-info").addEventListener("click",()=>this.toggleInfo())}get id(){return this.getAttribute("id")}get name(){return this.getAttribute("name")}set name(n){this.shadowRoot.querySelector("h3").innerText=n,this.setAttribute("name",n)}set avatar(n){this.shadowRoot.querySelector("img").src=n,this.setAttribute("avatar",n)}disconnectedCallback(){this.shadowRoot.querySelector("#toggle-info").removeEventListener()}toggleInfo(){this.showInfo=!this.showInfo;const n=this.shadowRoot.querySelector(".info"),e=this.shadowRoot.querySelector("#toggle-info");this.showInfo?(n.style.display="block",e.innerText="Hide Info"):(n.style.display="none",e.innerText="Show Info")}}window.customElements.get("user-card")||window.customElements.define("user-card",r)}]);