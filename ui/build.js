!function(){"use strict";function e(e,t,n){("name"in t&&"object"==typeof e.name||e.name!==n.name||"data"in t&&"object"==typeof e.data||e.data!==n.data)&&(e.choices=t.choices=c.computed.choices(e.name,e.data)),("name"in t&&"object"==typeof e.name||e.name!==n.name||"data"in t&&"object"==typeof e.data||e.data!==n.data)&&(e.text=t.text=c.computed.text(e.name,e.data))}function t(e,t){var r=document.createElement("p"),o=document.createTextNode(e.text);r.appendChild(o);var a=document.createTextNode("\n"),i=document.createElement("ol"),c=document.createComment("#each choices");i.appendChild(c);for(var u=e.choices,d=[],s=0;s<u.length;s+=1)d[s]=n(e,u,u[s],s,t),d[s].mount(c.parentNode,c);return{mount:function(e,t){e.insertBefore(r,t),e.insertBefore(a,t),e.insertBefore(i,t)},update:function(e,r){o.data=r.text;for(var a=r.choices,i=0;i<a.length;i+=1)d[i]?d[i].update(e,r,a,a[i],i):(d[i]=n(r,a,a[i],i,t),d[i].mount(c.parentNode,c));for(var i=a.length;i<d.length;i+=1)d[i].teardown(!0);d.length=a.length},teardown:function(e){for(var t=0;t<d.length;t+=1)d[t].teardown(!1);e&&(r.parentNode.removeChild(r),a.parentNode.removeChild(a),i.parentNode.removeChild(i))}}}function n(e,t,n,r,o){var a=document.createElement("li"),i=document.createTextNode(n.text);return a.appendChild(i),{mount:function(e,t){e.insertBefore(a,t)},update:function(e,t,n,r,o){var r=n[o];i.data=r.text},teardown:function(e){e&&a.parentNode.removeChild(a)}}}function r(n){function r(e,t,n){for(var r in e)if(r in t){var a=t[r],i=n[r];if(a!==i||"object"==typeof a){var c=e[r];if(c)for(var u=0;u<c.length;u+=1){var d=c[u];d.__calling||(d.__calling=!0,d.call(o,a,i),d.__calling=!1)}}}}n=n||{};var o=this,a=Object.assign(c.data(),n.data);e(a,a,{});var i={immediate:Object.create(null),deferred:Object.create(null)},u=Object.create(null);this.fire=function(e,t){var n=this,r=e in u&&u[e].slice();if(r)for(var o=0;o<r.length;o+=1)r[o].call(n,t)},this.get=function(e){return e?a[e]:a},this.set=function(t){var n=a;a=Object.assign({},n,t),e(a,t,n),r(i.immediate,t,n),d&&d.update(t,a),r(i.deferred,t,n)},this._mount=function(e,t){d.mount(e,t)},this.observe=function(e,t,n){var r=n&&n.defer?i.deferred:i.immediate;return(r[e]||(r[e]=[])).push(t),n&&n.init===!1||(t.__calling=!0,t.call(o,a[e]),t.__calling=!1),{cancel:function(){var n=r[e].indexOf(t);~n&&r[e].splice(n,1)}}},this.on=function(e,t){var n=u[e]||(u[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}},this.teardown=function(e){this.fire("teardown"),d.teardown(e!==!1),d=null,a={}},this.root=n.root,this.yield=n.yield;var d=t(a,this);n.target&&this._mount(n.target),n.root?n.root.__renderHooks.push({fn:c.onrender,context:this}):c.onrender.call(this)}function o(e,t){var n=document.createElement("ul"),r=document.createComment("#each adventurers");n.appendChild(r);for(var o=e.adventurers,i=[],c=0;c<o.length;c+=1)i[c]=a(e,o,o[c],c,t),i[c].mount(r.parentNode,r);return{mount:function(e,t){e.insertBefore(n,t)},update:function(e,n){for(var o=n.adventurers,c=0;c<o.length;c+=1)i[c]?i[c].update(e,n,o,o[c],c):(i[c]=a(n,o,o[c],c,t),i[c].mount(r.parentNode,r));for(var c=o.length;c<i.length;c+=1)i[c].teardown(!0);i.length=o.length},teardown:function(e){for(var t=0;t<i.length;t+=1)i[t].teardown(!1);e&&n.parentNode.removeChild(n)}}}function a(e,t,n,r,o){var a=document.createElement("li"),i=document.createElement("h4");i.className="debug",a.appendChild(i);var c=document.createTextNode(n.conversation_uuid);i.appendChild(c),a.appendChild(document.createTextNode("\n    "));var d=document.createElement("h2");a.appendChild(d),d.appendChild(document.createTextNode("Adventurer "));var s=document.createTextNode(n.number);d.appendChild(s),a.appendChild(document.createTextNode("\n    "));var l={name:n.state},f=new u.components.State({target:a,root:o.root||o,data:l});return{mount:function(e,t){e.insertBefore(a,t)},update:function(e,t,n,r,o){var r=n[o];c.data=r.conversation_uuid,s.data=r.number;var a={};"adventurers"in e&&(a.name=r.state),Object.keys(a).length&&f.set(a)},teardown:function(e){f.teardown(!1),e&&a.parentNode.removeChild(a)}}}function i(e){function t(e,t,n){for(var o in e)if(o in t){var a=t[o],i=n[o];if(a!==i||"object"==typeof a){var c=e[o];if(c)for(var u=0;u<c.length;u+=1){var d=c[u];d.__calling||(d.__calling=!0,d.call(r,a,i),d.__calling=!1)}}}}var n=this;e=e||{};var r=this,a=e.data||{},i={immediate:Object.create(null),deferred:Object.create(null)},c=Object.create(null);this.fire=function(e,t){var n=this,r=e in c&&c[e].slice();if(r)for(var o=0;o<r.length;o+=1)r[o].call(n,t)},this.get=function(e){return e?a[e]:a},this.set=function(e){var n=this,r=a;for(a=Object.assign({},r,e),t(i.immediate,e,r),u&&u.update(e,a),t(i.deferred,e,r);this.__renderHooks.length;){var o=n.__renderHooks.pop();o.fn.call(o.context)}},this._mount=function(e,t){u.mount(e,t)},this.observe=function(e,t,n){var o=n&&n.defer?i.deferred:i.immediate;return(o[e]||(o[e]=[])).push(t),n&&n.init===!1||(t.__calling=!0,t.call(r,a[e]),t.__calling=!1),{cancel:function(){var n=o[e].indexOf(t);~n&&o[e].splice(n,1)}}},this.on=function(e,t){var n=c[e]||(c[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}},this.teardown=function(e){this.fire("teardown"),u.teardown(e!==!1),u=null,a={}},this.root=e.root,this.yield=e.yield,this.__renderHooks=[];var u=o(a,this);for(e.target&&this._mount(e.target);this.__renderHooks.length;){var d=n.__renderHooks.pop();d.fn.call(d.context)}}var c=function(){var e=fetch("http://localhost:3000/adventure.json").then(function(e){return e.json()});return{data:function(){return{name:"start",data:{}}},onrender:function(){var t=this;e.then(function(e){return t.set({data:e})})},computed:{choices:function(e,t){return t[e]?t[e].choices||[]:[]},text:function(e,t){return t[e]?t[e].text:"-"}}}}(),u=function(){return{components:{State:r}}}(),d=function(e){return e&&2===e.CLOSING},s=function(){return"undefined"!=typeof WebSocket&&d(WebSocket)},l=function(){return{constructor:s()?WebSocket:null,maxReconnectionDelay:1e4,minReconnectionDelay:1500,reconnectionDelayGrowFactor:1.3,connectionTimeout:4e3,maxRetries:1/0,debug:!1}},f=function(e,t,n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},enumerable:!0,configurable:!0})},v=function(e){return e.minReconnectionDelay+Math.random()*e.minReconnectionDelay},h=function(e,t){var n=t*e.reconnectionDelayGrowFactor;return n>e.maxReconnectionDelay?e.maxReconnectionDelay:n},m=["onopen","onclose","onmessage","onerror"],p=function(e,t,n){Object.keys(n).forEach(function(t){n[t].forEach(function(n){var r=n[0],o=n[1];e.addEventListener(t,r,o)})}),t&&m.forEach(function(n){e[n]=t[n]})},g=function(e,t,n){var r=this;void 0===n&&(n={});var o,a,i=0,c=0,u=!0,s=null,m={};if(!(this instanceof g))throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator");var y=l();if(Object.keys(y).filter(function(e){return n.hasOwnProperty(e)}).forEach(function(e){return y[e]=n[e]}),!d(y.constructor))throw new TypeError("Invalid WebSocket constructor. Set `options.constructor`");var _=y.debug?function(){for(var e=arguments,t=[],n=0;n<arguments.length;n++)t[n-0]=e[n];return console.log.apply(console,["RWS:"].concat(t))}:function(){},b=function(e,t){return setTimeout(function(){var n=new Error(t);n.code=e,Array.isArray(m.error)&&m.error.forEach(function(e){var t=e[0];return t(n)}),o.onerror&&o.onerror(n)},0)},x=function(){return _("close"),c++,_("retries count:",c),c>y.maxRetries?void b("EHOSTDOWN","Too many failed connection attempts"):(i=i?h(y,i):v(y),_("reconnectDelay:",i),void(u&&setTimeout(w,i)))},w=function(){_("connect");var n=o;o=new y.constructor(e,t),a=setTimeout(function(){_("timeout"),o.close(),b("ETIMEDOUT","Connection timeout")},y.connectionTimeout),_("bypass properties");for(var u in o)["addEventListener","removeEventListener","close","send"].indexOf(u)<0&&f(o,r,u);o.addEventListener("open",function(){clearTimeout(a),_("open"),i=v(y),_("reconnectDelay:",i),c=0}),o.addEventListener("close",x),p(o,n,m),o.onclose=o.onclose||s,s=null};_("init"),w(),this.close=function(e,t,n){void 0===e&&(e=1e3),void 0===t&&(t="");var r=void 0===n?{}:n,a=r.keepClosed,c=void 0!==a&&a,d=r.fastClose,l=void 0===d||d,f=r.delay,v=void 0===f?0:f;if(v&&(i=v),u=!c,o.close(e,t),l){var h={code:e,reason:t,wasClean:!0};x(),o.removeEventListener("close",x),Array.isArray(m.close)&&m.close.forEach(function(e){var t=e[0],n=e[1];t(h),o.removeEventListener("close",t,n)}),o.onclose&&(s=o.onclose,o.onclose(h),o.onclose=null)}},this.send=function(e){o.send(e)},this.addEventListener=function(e,t,n){Array.isArray(m[e])?m[e].some(function(e){var n=e[0];return n===t})||m[e].push([t,n]):m[e]=[[t,n]],o.addEventListener(e,t,n)},this.removeEventListener=function(e,t,n){Array.isArray(m[e])&&(m[e]=m[e].filter(function(e){var n=e[0];return n!==t})),o.removeEventListener(e,t,n)}},y=g;fetch("/number").then(function(e){return e.text()}).then(function(e){return document.querySelector("#number").innerText=e});var _=new i({target:document.querySelector("main"),data:{adventurers:[]}}),b=[],x=function(e){var t=e.type,n=e.body;if("create"==t){var r=b.filter(function(e){return e.conversation_uuid==n.conversation_uuid});r.length||b.unshift({conversation_uuid:n.conversation_uuid,number:n.from,state:"start",created:Date.now()}),_.set({adventurers:b})}if("update"==t){var o=b.filter(function(e){return e.conversation_uuid==n.conversation_uuid});o.length&&(o[0].state=n.state),_.set({adventurers:b})}},w=location.origin.replace(/^http/,"ws"),E=new y(w);E.onmessage=function(e){x(JSON.parse(e.data))},_.set({adventurers:b})}();