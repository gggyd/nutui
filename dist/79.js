/*! NutUI v1.2.9 Thu Jun 28 2018 17:03:52 GMT+0800 (CST) */
webpackJsonpnutui([79],{1064:function(i,o,t){(i.exports=t(1)()).push([i.i,".pic-box{display:flex}.pic-box span{width:60px;height:60px;margin-right:20px;border:1px solid #eee}.pic-box span img{width:100%;height:100%}",""])},1140:function(i,o){i.exports={render:function(){var i=this,o=i.$createElement,t=i._self._c||o;return t("div",[t("nut-demoheader",{attrs:{name:i.$route.name}}),i._v(" "),t("div",{staticClass:"pic-box"},i._l(i.picBox,function(o,e){return t("span",{on:{click:function(o){i.setPicShow(e)}}},[t("img",{attrs:{src:o}})])})),i._v(" "),t("nut-pictureview",{attrs:{visible:i.picShow,bgColor:i.coverColor,imgArr:i.picBox,initNum:i.picShowNum,pagination:i.showPage},on:{"update:visible":function(o){i.picShow=o},"close-pic":i.closeDo}})],1)},staticRenderFns:[]}},1273:function(i,o,t){var e=t(1064);"string"==typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);t(3)("40ff94d6",e,!0,{})},840:function(i,o,t){var e=t(2)(t(939),t(1140),function(i){t(1273)},null,null);i.exports=e.exports},939:function(i,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{picShow:!1,picShowNum:1,showPage:!0,coverColor:"rgba(0,0,0,.7)",picBox:["http://img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg","http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg","http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"]}},methods:{setPicShow:function(i){this.picShowNum=i+1,this.picShow=!0},closeDo:function(){console.log("关闭了")}}}}});