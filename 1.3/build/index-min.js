/*!build time : 2014-01-16 5:18:24 PM*/
KISSY.add("gallery/tb-video-player/1.3/index",function(a,b,c,d,e,f){function g(){var a={};if(f.mobile)switch(a.isPC=!1,a.isMobile=!0,f.os){case"ios":a.equipmentType=f.ipad?2:3;break;case"android":a.equipmentType=f.android<3?6:5;break;default:a.equipmentType=6}else a.isPC=!0,a.isMobile=!1,a.equipmentType=1;return a}function h(b){var c=new RegExp(/\d+$/i);if(!c.test(b.vid))return a.log(b.vid+"is illegal!"),void 0;var d="";return d+="http://cloud.video.",d+=b.isDaily?"daily.taobao.net":"taobao.com",d+="/play/u/",d+=b.uid+"/p/",d+=(b.isAutoPlay?1:2)+"/e/",d+=p.equipmentType+"/t/",d+=b.tid+"/",d+=b.vid+".",d+=1===p.equipmentType?"swf":a.inArray(p.equipmentType,[2,3,5])?"m3u8":"mp4"}function i(a){a.flashvars.autoplay=a.isAutoPlay,a.flashvars.poster=a.poster,a.showloadinglogo||(a.flashvars.reservelt=9527),a.flashvars.show_controlbar_logo=a.showlogobtn,a.flashvars.show_fullscreen_button=a.showfullscreenbtn,a.flashvars.show_share_button=a.showsharebutton}function j(b,c,f){i(c);var g="string"==typeof c.container?d.get(c.container):c.container;if(p.isPC)m=new e({src:b,attrs:{width:c.width,height:c.height,id:r},params:{wmode:c.wmode,allowScriptAccess:c.allowScriptAccess,allowFullScreen:c.allowFullScreen,flashVars:c.flashvars},render:g});else{if(!p.isMobile)return a.log("Neither PC or Mobile, tell me what to do..."),void 0;var h=d.create("<video>",{width:c.width,height:c.height,controls:"controls",src:b,id:r});c.poster&&d.attr(h,"poster",c.poster),c.isAutoPlay&&d.attr(h,"autoplay","autoplay"),d.append(h,g)}"function"==typeof f&&f(d.get("#"+r))}function k(){if(p.isPC)m&&m.destroy();else{if(!p.isMobile)return;o("#"+r).detach().remove()}r=a.guid("TbVideoPlayer-"),m=void 0}function l(b,c){var d=this;l.superclass.constructor.call(d,b,c);var e=a.merge(q,b),f=h(e);j(f,e,c)}var m,n="",o=b.all,p=g(),q={vid:n,uid:"727053408",tid:"1",isAutoPlay:!1,width:"100%",height:"100%",isDaily:!1,container:"body",allowScriptAccess:"always",wmode:"transparent",allowFullScreen:!0,poster:n,flashvars:{},showloadinglogo:!0,showlogobtn:!1,showfullscreenbtn:!0,showsharebutton:!0},r=a.guid("TbVideoPlayer-");return a.extend(l,c,{destory:function(){k()}},{ATTRS:{}}),l},{requires:["node","base","dom",KISSY.version<"1.30"?"./core/swf":"swf","ua"]});