/*
 * jQuery UI Effects 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
(function(a,c){var b="ui-effects-";a.effects={effect:{}};
/*
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(r,g){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",k=/^([\-+])=\s*(\d+\.?\d*)/,j=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1],s[2],s[3],s[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1]*2.55,s[2]*2.55,s[3]*2.55,s[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(s){return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(s){return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(s){return[s[1],s[2]/100,s[3]/100,s[4]]}}],h=r.Color=function(t,u,s,v){return new r.Color.fn.parse(t,u,s,v)},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},q={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},p=h.support={},e=r("<p>")[0],d,o=r.each;e.style.cssText="background-color:rgba(1,1,1,.5)";p.rgba=e.style.backgroundColor.indexOf("rgba")>-1;o(m,function(s,t){t.cache="_"+s;t.props.alpha={idx:3,type:"percent",def:1}});function l(t,v,u){var s=q[v.type]||{};if(t==null){return(u||!v.def)?null:v.def}t=s.floor?~~t:parseFloat(t);if(isNaN(t)){return v.def}if(s.mod){return(t+s.mod)%s.mod}return 0>t?0:s.max<t?s.max:t}function i(s){var u=h(),t=u._rgba=[];s=s.toLowerCase();o(j,function(z,A){var x,y=A.re.exec(s),w=y&&A.parse(y),v=A.space||"rgba";if(w){x=u[v](w);u[m[v].cache]=x[m[v].cache];t=u._rgba=x._rgba;return false}});if(t.length){if(t.join()==="0,0,0,0"){r.extend(t,d.transparent)}return u}return d[s]}h.fn=r.extend(h.prototype,{parse:function(y,w,s,x){if(y===g){this._rgba=[null,null,null,null];return this}if(y.jquery||y.nodeType){y=r(y).css(w);w=g}var v=this,u=r.type(y),t=this._rgba=[];if(w!==g){y=[y,w,s,x];u="array"}if(u==="string"){return this.parse(i(y)||d._default)}if(u==="array"){o(m.rgba.props,function(z,A){t[A.idx]=l(y[A.idx],A)});return this}if(u==="object"){if(y instanceof h){o(m,function(z,A){if(y[A.cache]){v[A.cache]=y[A.cache].slice()}})}else{o(m,function(A,B){var z=B.cache;o(B.props,function(C,D){if(!v[z]&&B.to){if(C==="alpha"||y[C]==null){return}v[z]=B.to(v._rgba)}v[z][D.idx]=l(y[C],D,true)});if(v[z]&&r.inArray(null,v[z].slice(0,3))<0){v[z][3]=1;if(B.from){v._rgba=B.from(v[z])}}})}return this}},is:function(u){var s=h(u),v=true,t=this;o(m,function(w,y){var z,x=s[y.cache];if(x){z=t[y.cache]||y.to&&y.to(t._rgba)||[];o(y.props,function(A,B){if(x[B.idx]!=null){v=(x[B.idx]===z[B.idx]);return v}})}return v});return v},_space:function(){var s=[],t=this;o(m,function(u,v){if(t[v.cache]){s.push(u)}});return s.pop()},transition:function(t,z){var u=h(t),v=u._space(),w=m[v],x=this.alpha()===0?h("transparent"):this,y=x[w.cache]||w.to(x._rgba),s=y.slice();u=u[w.cache];o(w.props,function(D,F){var C=F.idx,B=y[C],A=u[C],E=q[F.type]||{};if(A===null){return}if(B===null){s[C]=A}else{if(E.mod){if(A-B>E.mod/2){B+=E.mod}else{if(B-A>E.mod/2){B-=E.mod}}}s[C]=l((A-B)*z+B,F)}});return this[v](s)},blend:function(v){if(this._rgba[3]===1){return this}var u=this._rgba.slice(),t=u.pop(),s=h(v)._rgba;return h(r.map(u,function(w,x){return(1-t)*s[x]+t*w}))},toRgbaString:function(){var t="rgba(",s=r.map(this._rgba,function(u,w){return u==null?(w>2?1:0):u});if(s[3]===1){s.pop();t="rgb("}return t+s.join()+")"},toHslaString:function(){var t="hsla(",s=r.map(this.hsla(),function(u,w){if(u==null){u=w>2?1:0}if(w&&w<3){u=Math.round(u*100)+"%"}return u});if(s[3]===1){s.pop();t="hsl("}return t+s.join()+")"},toHexString:function(s){var t=this._rgba.slice(),u=t.pop();if(s){t.push(~~(u*255))}return"#"+r.map(t,function(w){w=(w||0).toString(16);return w.length===1?"0"+w:w}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});h.fn.parse.prototype=h.fn;function f(u,t,s){s=(s+1)%1;if(s*6<1){return u+(t-u)*s*6}if(s*2<1){return t}if(s*3<2){return u+(t-u)*((2/3)-s)*6}return u}m.hsla.to=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]}var t=v[0]/255,y=v[1]/255,z=v[2]/255,B=v[3],A=Math.max(t,y,z),w=Math.min(t,y,z),C=A-w,D=A+w,u=D*0.5,x,E;if(w===A){x=0}else{if(t===A){x=(60*(y-z)/C)+360}else{if(y===A){x=(60*(z-t)/C)+120}else{x=(60*(t-y)/C)+240}}}if(C===0){E=0}else{if(u<=0.5){E=C/D}else{E=C/(2-D)}}return[Math.round(x)%360,E,u,B==null?1:B]};m.hsla.from=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]}var w=x[0]/360,v=x[1],u=x[2],t=x[3],y=u<=0.5?u*(1+v):u+v-u*v,z=2*u-y;return[Math.round(f(z,y,w+(1/3))*255),Math.round(f(z,y,w)*255),Math.round(f(z,y,w-(1/3))*255),t]};o(m,function(t,v){var u=v.props,s=v.cache,x=v.to,w=v.from;h.fn[t]=function(C){if(x&&!this[s]){this[s]=x(this._rgba)}if(C===g){return this[s].slice()}var z,B=r.type(C),y=(B==="array"||B==="object")?C:arguments,A=this[s].slice();o(u,function(D,F){var E=y[B==="object"?D:F.idx];if(E==null){E=A[F.idx]}A[F.idx]=l(E,F)});if(w){z=h(w(A));z[s]=A;return z}else{return h(A)}};o(u,function(y,z){if(h.fn[y]){return}h.fn[y]=function(D){var F=r.type(D),C=(y==="alpha"?(this._hsla?"hsla":"rgba"):t),B=this[C](),E=B[z.idx],A;if(F==="undefined"){return E}if(F==="function"){D=D.call(this,E);F=r.type(D)}if(D==null&&z.empty){return this}if(F==="string"){A=k.exec(D);if(A){D=E+parseFloat(A[2])*(A[1]==="+"?1:-1)}}B[z.idx]=D;return this[C](B)}})});h.hook=function(t){var s=t.split(" ");o(s,function(u,v){r.cssHooks[v]={set:function(z,A){var x,y,w="";if(A!=="transparent"&&(r.type(A)!=="string"||(x=i(A)))){A=h(x||A);if(!p.rgba&&A._rgba[3]!==1){y=v==="backgroundColor"?z.parentNode:z;while((w===""||w==="transparent")&&y&&y.style){try{w=r.css(y,"backgroundColor");y=y.parentNode}catch(B){}}A=A.blend(w&&w!=="transparent"?w:"_default")}A=A.toRgbaString()}try{z.style[v]=A}catch(B){}}};r.fx.step[v]=function(w){if(!w.colorInit){w.start=h(w.elem,v);w.end=h(w.end);w.colorInit=true}r.cssHooks[v].set(w.elem,w.start.transition(w.end,w.pos))}})};h.hook(n);r.cssHooks.borderColor={expand:function(t){var s={};o(["Top","Right","Bottom","Left"],function(v,u){s["border"+u+"Color"]=t});return s}};d=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,i){a.fx.step[i]=function(j){if(j.end!=="none"&&!j.setAttr||j.pos===1&&!j.setAttr){jQuery.style(j.elem,i,j.end);j.setAttr=true}}});function g(l){var i,h,j=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,k={};if(j&&j.length&&j[0]&&j[j[0]]){h=j.length;while(h--){i=j[h];if(typeof j[i]==="string"){k[a.camelCase(i)]=j[i]}}}else{for(i in j){if(typeof j[i]==="string"){k[i]=j[i]}}}return k}function d(h,j){var l={},i,k;for(i in j){k=j[i];if(h[i]!==k){if(!f[i]){if(a.fx.step[i]||!isNaN(parseFloat(k))){l[i]=k}}}}return l}if(!a.fn.addBack){a.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))}}a.effects.animateClass=function(h,i,l,k){var j=a.speed(i,l,k);return this.queue(function(){var o=a(this),m=o.attr("class")||"",n,p=j.children?o.find("*").addBack():o;p=p.map(function(){var q=a(this);return{el:q,start:g(this)}});n=function(){a.each(e,function(q,r){if(h[r]){o[r+"Class"](h[r])}})};n();p=p.map(function(){this.end=g(this.el[0]);this.diff=d(this.start,this.end);return this});o.attr("class",m);p=p.map(function(){var s=this,q=a.Deferred(),r=a.extend({},j,{queue:false,complete:function(){q.resolve(s)}});this.el.animate(this.diff,r);return q.promise()});a.when.apply(a,p.get()).done(function(){n();a.each(arguments,function(){var q=this.el;a.each(this.diff,function(r){q.css(r,"")})});j.complete.call(o[0])})})};a.fn.extend({addClass:(function(h){return function(j,i,l,k){return i?a.effects.animateClass.call(this,{add:j},i,l,k):h.apply(this,arguments)}})(a.fn.addClass),removeClass:(function(h){return function(j,i,l,k){return arguments.length>1?a.effects.animateClass.call(this,{remove:j},i,l,k):h.apply(this,arguments)}})(a.fn.removeClass),toggleClass:(function(h){return function(k,j,i,m,l){if(typeof j==="boolean"||j===c){if(!i){return h.apply(this,arguments)}else{return a.effects.animateClass.call(this,(j?{add:k}:{remove:k}),i,m,l)}}else{return a.effects.animateClass.call(this,{toggle:k},j,i,m)}}})(a.fn.toggleClass),switchClass:function(h,j,i,l,k){return a.effects.animateClass.call(this,{add:j,remove:h},i,l,k)}})})();(function(){a.extend(a.effects,{version:"1.10.4",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data(b+h[f],g[0].style[h[f]])}}},restore:function(g,j){var h,f;for(f=0;f<j.length;f++){if(j[f]!==null){h=g.data(b+j[f]);if(h===c){h=""}g.css(j[f],h)}}},setMode:function(f,g){if(g==="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(g){if(g.parent().is(".ui-effects-wrapper")){return g.parent()}var h={width:g.outerWidth(true),height:g.outerHeight(true),"float":g.css("float")},k=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:g.width(),height:g.height()},j=document.activeElement;try{j.id}catch(i){j=document.body}g.wrap(k);if(g[0]===j||a.contains(g[0],j)){a(j).focus()}k=g.parent();if(g.css("position")==="static"){k.css({position:"relative"});g.css({position:"relative"})}else{a.extend(h,{position:g.css("position"),zIndex:g.css("z-index")});a.each(["top","left","bottom","right"],function(l,m){h[m]=g.css(m);if(isNaN(parseInt(h[m],10))){h[m]="auto"}});g.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}g.css(f);return k.css(h).show()},removeWrapper:function(f){var g=document.activeElement;if(f.parent().is(".ui-effects-wrapper")){f.parent().replaceWith(f);if(f[0]===g||a.contains(f[0],g)){a(g).focus()}}return f},setTransition:function(g,i,f,h){h=h||{};a.each(i,function(k,j){var l=g.cssUnit(j);if(l[0]>0){h[j]=l[0]*f+l[1]}});return h}});function d(g,f,h,i){if(a.isPlainObject(g)){f=g;g=g.effect}g={effect:g};if(f==null){f={}}if(a.isFunction(f)){i=f;h=null;f={}}if(typeof f==="number"||a.fx.speeds[f]){i=h;h=f;f={}}if(a.isFunction(h)){i=h;h=null}if(f){a.extend(g,f)}h=h||f.duration;g.duration=a.fx.off?0:typeof h==="number"?h:h in a.fx.speeds?a.fx.speeds[h]:a.fx.speeds._default;g.complete=i||f.complete;return g}function e(f){if(!f||typeof f==="number"||a.fx.speeds[f]){return true}if(typeof f==="string"&&!a.effects.effect[f]){return true}if(a.isFunction(f)){return true}if(typeof f==="object"&&!f.effect){return true}return false}a.fn.extend({effect:function(){var h=d.apply(this,arguments),j=h.mode,f=h.queue,g=a.effects.effect[h.effect];if(a.fx.off||!g){if(j){return this[j](h.duration,h.complete)}else{return this.each(function(){if(h.complete){h.complete.call(this)}})}}function i(m){var n=a(this),l=h.complete,o=h.mode;function k(){if(a.isFunction(l)){l.call(n[0])}if(a.isFunction(m)){m()}}if(n.is(":hidden")?o==="hide":o==="show"){n[o]();k()}else{g.call(n[0],h,k)}}return f===false?this.each(i):this.queue(f||"fx",i)},show:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)}else{var g=d.apply(this,arguments);g.mode="show";return this.effect.call(this,g)}}})(a.fn.show),hide:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)}else{var g=d.apply(this,arguments);g.mode="hide";return this.effect.call(this,g)}}})(a.fn.hide),toggle:(function(f){return function(h){if(e(h)||typeof h==="boolean"){return f.apply(this,arguments)}else{var g=d.apply(this,arguments);g.mode="toggle";return this.effect.call(this,g)}}})(a.fn.toggle),cssUnit:function(f){var g=this.css(f),h=[];a.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}})})();(function(){var d={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(f,e){d[e]=function(g){return Math.pow(g,f+2)}});a.extend(d,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(g){var e,f=4;while(g<((e=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((e*3-2)/22-g,2)}});a.each(d,function(f,e){a.easing["easeIn"+f]=e;a.easing["easeOut"+f]=function(g){return 1-e(1-g)};a.easing["easeInOut"+f]=function(g){return g<0.5?e(g*2)/2:1-e(g*-2+2)/2}})})()})(jQuery);
/*
 * jQuery UI Effects Transfer 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
(function(a,b){a.effects.effect.transfer=function(d,h){var f=a(this),k=a(d.to),n=k.css("position")==="fixed",j=a("body"),l=n?j.scrollTop():0,m=n?j.scrollLeft():0,c=k.offset(),g={top:c.top-l,left:c.left-m,height:k.innerHeight(),width:k.innerWidth()},i=f.offset(),e=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({top:i.top-l,left:i.left-m,height:f.innerHeight(),width:f.innerWidth(),position:n?"fixed":"absolute"}).animate(g,d.duration,d.easing,function(){e.remove();h()})}})(jQuery);