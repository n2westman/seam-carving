(this["webpackJsonpseam-carving"]=this["webpackJsonpseam-carving"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n.n(a),i=n(22),r=n.n(i),c=(n(32),n(33),n(23)),l=n(24),o=n(27),d=n(25),u=(n(34),n(1)),h=n.n(u),m=n(26),j=n(3),g=n.n(j),f=n(4);function p(e,t){for(var n=[],a=e.tolist(),s=0;s<e.shape[0];s++){n.push(a[s]);var i=t.get(s),r=[(e.get(s,i-1,0)+e.get(s,i,0)+e.get(s,i+1,0))/3,(e.get(s,i-1,1)+e.get(s,i,1)+e.get(s,i+1,1))/3,(e.get(s,i-1,2)+e.get(s,i,2)+e.get(s,i+1,2))/3];n[s].splice(i,0,r)}return h.a.array(n)}function b(e,t,n){return n?function(e,t){return p(e.transpose(1,0),t).transpose(1,0)}(e,t):p(e,t)}function v(e,t){for(var n=0;n<e.shape[0];n++)e.set(n,t.get(n),255);return e}function O(e,t,n){return n?function(e,t){return v(e.transpose(1,0),t).transpose(1,0)}(e,t):v(e,t)}function x(e,t){for(var n=[],a=e.tolist(),s=0;s<e.shape[0];s++)n.push(a[s]),n[s].splice(t.get(s),1);return h.a.array(n)}function y(e,t,n){return n?function(e,t){return x(e.transpose(1,0),t).transpose(1,0)}(e,t):x(e,t)}var k=g()({args:["array","array","array","array",{offset:[0,1],array:1},{offset:[0,1],array:2},{offset:[0,1],array:3},{offset:[1,0],array:1},{offset:[1,0],array:2},{offset:[1,0],array:3}],body:function(e,t,n,a,s,i,r,c,l,o){Math.sqrt((t-s)*(t-s)+(t-c)*(t-c)+(n-i)*(n-i)+(n-l)*(n-i)+(a-r)*(a-r)+(a-o)*(a-r))}});function I(e,t){var n=e.shape[0],a=e.shape[1],s=[n,a],i=new h.a.NdArray(new Uint16Array(n*a),s),r=e.selection.pick(null,null,0),c=e.selection.pick(null,null,1),l=e.selection.pick(null,null,2);return k(i.selection,r,c,l),t&&(i=i.add(t)),i}function S(e){for(var t=h.a.zeros(e.shape),n=e.shape[0],a=e.shape[1],s=1;s<n;s++)for(var i=0;i<a;i++){var r=e.get(s-1,i),c=0;i>0&&r>e.get(s-1,i-1)&&(r=e.get(s-1,i-1),c=-1),i<a-1&&r>e.get(s-1,i+1)&&(r=e.get(s-1,i+1),c=1),t.set(s,i,i+c),e.set(s,i,e.get(s,i)+r)}for(var l=[],o=Object(f.argmin)(e.slice(-1).flatten().selection),d=n-1;d>-1;d--)l.unshift(o),o=t.get(d,o);return h.a.array(l)}function w(e,t){return t?function(e){return S(e.transpose(1,0))}(e):S(e)}function F(e,t,n){var a=h.a.images.read(e).slice(null,null,[3]),s=null,i=document.getElementById("original");if(i.width=a.shape[1],i.height=a.shape[0],h.a.images.save(a,i),n){s=h.a.images.rgb2gray(h.a.images.read(n));var r=document.getElementById("mask");r.width=a.shape[1],r.height=a.shape[0],h.a.images.save(s,r)}var c=document.querySelector("input[type=checkbox][name=horizontal]").checked,l=document.querySelector("input[type=checkbox][name=addSeams]").checked;(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(s,i){var r=[],c=e.clone(),l=n&&n.clone(),o=0,d=setInterval((function(){if((o+=1)>t)return clearInterval(d),void s(r);var e=I(c,l),n=w(e.clone(),a);r.unshift(n);var i=O(e,n,a),u=document.getElementById("energy");u.width=i.shape[1],u.height=i.shape[0],h.a.images.save(i,u);var m=y(c,n,a);l&&(l=y(l,n,a));var j=document.getElementById("seam");j.width=m.shape[1],j.height=m.shape[0],h.a.images.save(m,j),c=m}),100)}))})(a,t,s,c).then((function(e){l&&function(e,t,n){var a=t.length;new Promise((function(s,i){var r=e,c=0,l=setInterval((function(){if((c+=1)>a)return clearInterval(l),void s();var e,i=t.pop(),o=b(r,i,n),d=Object(m.a)(t);try{for(d.s();!(e=d.n()).done;){var u=e.value,j=h.a.clip(u.subtract(i),-1,0).add(1).multiply(2);u.add(j,!1)}}catch(f){d.e(f)}finally{d.f()}var g=document.getElementById("seam");g.width=o.shape[1],g.height=o.shape[0],h.a.images.save(o,g),r=o}),100)}))}(a,e,c)})),document.getElementById("h").textContent=""+a.shape[0],document.getElementById("w").textContent=""+a.shape[1]}var B=n(0),C=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({iter:e.target.value})},a.state={image:null,isButtonDisabled:!0,iter:50},a}return Object(l.a)(n,[{key:"loadImage",value:function(e,t){var n=this,a=new Image;a.crossOrigin="Anonymous",a.onload=function(){t?n.setState({isButtonDisabled:!n.state.image,mask:a}):n.setState({isButtonDisabled:!1,image:a})},a.src=e}},{key:"handleFileSelect",value:function(e,t){var n=this,a=e.target.files[0],s=new FileReader;this.setState({isButtonDisabled:!0}),s.onload=function(e){n.loadImage(e.target.result,t)},s.readAsDataURL(a)}},{key:"processImage",value:function(e){F(this.state.image,this.state.iter,this.state.mask)}},{key:"render",value:function(){var e=this;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"Uploader",children:[Object(B.jsxs)("div",{className:"option",children:[Object(B.jsx)("input",{type:"number",id:"iter",name:"iter",value:this.state.num,onChange:function(t){return e.handleChange(t)}}),Object(B.jsx)("label",{htmlFor:"horizontal",children:"Number of iterations"})]}),Object(B.jsxs)("div",{className:"option",children:[Object(B.jsx)("input",{type:"checkbox",id:"horizontal",name:"horizontal"}),Object(B.jsx)("label",{htmlFor:"horizontal",children:"Horizontal?"})]}),Object(B.jsxs)("div",{className:"option",children:[Object(B.jsx)("input",{type:"checkbox",id:"addSeams",name:"addSeams"}),Object(B.jsx)("label",{htmlFor:"addSeams",children:"Add Seams?"})]}),Object(B.jsxs)("div",{className:"option",children:[Object(B.jsx)("label",{htmlFor:"file",children:"Image"}),Object(B.jsx)("input",{onChange:function(t){return e.handleFileSelect(t)},type:"file",id:"file",name:"file"})]}),Object(B.jsxs)("div",{className:"option",children:[Object(B.jsx)("label",{htmlFor:"file",children:"Image Mask (Optional)"}),Object(B.jsx)("input",{onChange:function(t){return e.handleFileSelect(t,!0)},type:"file",id:"maskFile",name:"maskFile"})]}),Object(B.jsx)("button",{onClick:function(t){return e.processImage()},type:"button",disabled:this.state.isButtonDisabled,children:"Start"})]}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("h3",{children:["Original image (h",Object(B.jsx)("span",{id:"h"}),", w",Object(B.jsx)("span",{id:"w"}),")"]}),Object(B.jsx)("canvas",{id:"original"})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("h3",{children:"Mask"}),Object(B.jsx)("canvas",{id:"mask"})]}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{className:"il",children:[Object(B.jsx)("h4",{children:"Energy"}),Object(B.jsx)("canvas",{id:"energy"})]}),Object(B.jsxs)("div",{className:"il",children:[Object(B.jsx)("h4",{children:"Seam"}),Object(B.jsx)("canvas",{id:"seam"})]})]}),Object(B.jsxs)("p",{children:["Processing took ",Object(B.jsx)("span",{id:"duration"}),"ms"]})]})}}]),n}(s.a.Component);var N=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)("header",{className:"App-header",children:Object(B.jsx)("p",{children:"Seam Carving"})}),Object(B.jsx)(C,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(N,{})}),document.getElementById("root")),E()}},[[65,1,2]]]);
//# sourceMappingURL=main.85f329bd.chunk.js.map