/*!build time : 2014-01-16 4:31:46 PM*/
KISSY.add("swf",function(a,b,c,d,e,f){function g(){var c=this;g.superclass.constructor.apply(c,arguments);var d,e,h,i,j=c.get("expressInstall"),l=c.get("htmlMode"),n=c.get("params"),o=c.get("attrs"),p=c.get("document"),r=b.create("<span>",f,p),s=c.get("elBefore"),t=c.get("src"),u=c.get("version");return h=o.id=o.id||a.guid("ks-swf-"),B()?(u&&!C(u)&&(c.set("status",g.Status.TOO_LOW),j&&(t=j,(!("width"in o)||!/%$/.test(o.width)&&parseInt(o.width,10)<310)&&(o.width="310"),(!("height"in o)||!/%$/.test(o.height)&&parseInt(o.height,10)<137)&&(o.height="137"),i=n.flashVars=n.flashVars||{},a.mix(i,{MMredirectURL:location.href,MMplayerType:q.ie?"ActiveX":"PlugIn",MMdoctitle:p.title.slice(0,47)+" - Flash Player Installation"}))),e="full"==l?m(t,o,n):k(t,o,n),c.set("html",e),s?b.insertBefore(r,s):b.append(r,c.get("render")),"outerHTML"in r?r.outerHTML=e:r.parentNode.replaceChild(b.create(e),r),d=b.get("#"+h,p),c.set("swfObject",d),"full"==l&&(q.ie?c.set("swfObject",d):c.set("swfObject",d.parentNode)),c.set("el",d),c.get("status")||c.set("status",g.Status.SUCCESS),void 0):(c.set("status",g.Status.NOT_INSTALLED),void 0)}function h(a){for(var b in a)"function"==typeof a[b]&&(a[b]=null);a.parentNode.removeChild(a)}function i(a){var c,d,e,f="",g=[],h=b.nodeName(a);if("object"==h)for(f=b.attr(a,"data"),f&&g.push(a),c=a.childNodes,d=0;d<c.length;d++)e=c[d],1==e.nodeType&&("movie"==(b.attr(e,"name")||"").toLowerCase()?g.push(e):"embed"==b.nodeName(e)?g.push(e):"object"==b.nodeName(c[d])&&g.push(e));else"embed"==h&&g.push(a);return g}function j(b){var c=u;return a.each(b,function(a,b){b=b.toLowerCase(),b in F?c+=o(b,a):b==t&&(c+=o(b,n(a)))}),c}function k(a,b,c){return l(a,b,c,q.ie)+y+"/"+D+z}function l(b,c,d,e){var g,h=u,i=u;return e==f&&(e=q.ie),a.each(c,function(a,b){h+=p(b,a)}),e?(h+=p("classid",s),i+=o("movie",b)):(h+=p("data",b),h+=p("type",r)),i+=j(d),g=y+D+h+z+i}function m(a,b,c){var d,e;return q.ie?(d=l(a,b,c,1),delete b.id,delete b.style,e=l(a,b,c,0)):(e=l(a,b,c,0),delete b.id,delete b.style,d=l(a,b,c,1)),d+e+y+"/"+D+z+y+"/"+D+z}function n(b){var d,e=[];return a.each(b,function(a,b){"string"!=typeof a&&(a=c.stringify(a)),a&&e.push(b+"="+E(a))}),d=e.join("&")}function o(a,b){return'<param name="'+a+'" value="'+b+'"></param>'}function p(a,b){return v+a+w+x+b+x}var q=a.UA,r="application/x-shockwave-flash",s="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",t="flashvars",u="",v=" ",w="=",x='"',y="<",z=">",A=document,B=e.fpv,C=e.fpvGTE,D="object",E=encodeURIComponent,F={wmode:u,allowscriptaccess:u,allownetworking:u,allowfullscreen:u,play:"false",loop:u,menu:u,quality:u,scale:u,salign:u,bgcolor:u,devicefont:u,hasPriority:u,base:u,swliveconnect:u,seamlesstabbing:u};return a.extend(g,d,{callSWF:function(a,b){var c,d,e=this.get("el");b=b||[];try{e[a]&&(c=e[a].apply(e,b))}catch(f){d="",0!==b.length&&(d="'"+b.join("', '")+"'"),c=new Function("swf","return swf."+a+"("+d+");")(e)}return c},destroy:function(){var a=this;a.detach();var b=a.get("swfObject");q.ie?(b.style.display="none",function(){4==b.readyState?h(b):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b)}},{ATTRS:{expressInstall:{value:a.config("base")+"swf/assets/expressInstall.swf"},src:{},version:{value:"9"},params:{value:{}},attrs:{value:{}},render:{setter:function(a){return"string"==typeof a&&(a=b.get(a,this.get("document"))),a},valueFn:function(){return document.body}},elBefore:{setter:function(a){return"string"==typeof a&&(a=b.get(a,this.get("document"))),a}},document:{value:A},status:{},el:{},swfObject:{},html:{},htmlMode:{value:"default"}},fpv:B,fpvGTE:C}),g.fpvGEQ=C,g.getSrc=function(a){a=b.get(a);var c=i(a)[0],d=c&&b.nodeName(c);return"embed"==d?b.attr(c,"src"):"object"==d?b.attr(c,"data"):"param"==d?b.attr(c,"value"):null},g.Status={TOO_LOW:"flash version is too low",NOT_INSTALLED:"flash is not installed",SUCCESS:"success"},g.HtmlMode={DEFAULT:"default",FULL:"full"},g},{requires:["dom","json","base","swf/ua"]}),KISSY.add("swf/ua",function(a,b){function c(){var c,e="ShockwaveFlash";if(navigator.plugins&&navigator.mimeTypes.length)c=(navigator.plugins["Shockwave Flash"]||0).description;else if(k.ActiveXObject)try{c=new ActiveXObject(e+"."+e).GetVariable("$version")}catch(f){a.log("getFlashVersion failed via ActiveXObject")}return c?d(c):b}function d(a){return a.match(/\d+/g).splice(0,3)}function e(b){var c="string"==typeof b?d(b):b,e=b;return a.isArray(c)&&(e=parseFloat(c[0]+"."+f(c[1],3)+f(c[2],5))),e||0}function f(a,b){a=a||0,a+="";var c=b+1-a.length;return new Array(c>0?c:0).join("0")+a}function g(a){return(a||j)&&(j=!1,i=c()),i}function h(a,b){return e(g(b))>=e(a)}var i,j=!0,k=window;return{fpv:g,fpvGTE:h}});