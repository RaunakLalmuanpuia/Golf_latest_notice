(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a461baf4"],{"0fd9":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),a=i("d9f7"),n=i("80d2");const r=["sm","md","lg","xl"],c=["start","end","center"];function o(t,e){return r.reduce((i,s)=>(i[t+Object(n["G"])(s)]=e(),i),{})}const l=t=>[...c,"baseline","stretch"].includes(t),d=o("align",()=>({type:String,default:null,validator:l})),h=t=>[...c,"space-between","space-around"].includes(t),u=o("justify",()=>({type:String,default:null,validator:h})),g=t=>[...c,"space-between","space-around","stretch"].includes(t),p=o("alignContent",()=>({type:String,default:null,validator:g})),f={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(p)},m={align:"align",justify:"justify",alignContent:"align-content"};function A(t,e,i){let s=m[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const v=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:i,children:s}){let n="";for(const a in e)n+=String(e[a]);let r=v.get(n);if(!r){let t;for(t in r=[],f)f[t].forEach(i=>{const s=e[i],a=A(t,i,s);a&&r.push(a)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),v.set(n,r)}return t(e.tag,Object(a["a"])(i,{staticClass:"row",class:r}),s)}})},"17b3":function(t,e,i){},"22f1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAACWCAIAAACn/+04AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9btVUqDnYQcchQxcGCqIijVqEIFUKt0KqDyaVf0KQhSXFxFFwLDn4sVh1cnHV1cBUEwQ8QNzcnRRcp8X9JoUWMB8f9eHfvcfcO8NfLTDU7xgFVs4xUIi5ksqtC8BXdCKELo4DETH1OFJPwHF/38PH1LsazvM/9OXqVnMkAn0A8y3TDIt4gnt60dM77xBFWlBTic+Ixgy5I/Mh12eU3zgWH/TwzYqRT88QRYqHQxnIbs6KhEk8RRxVVo3x/xmWF8xZntVxlzXvyF4Zz2soy12kOIYFFLEGEABlVlFCGhRitGikmUrQf9/APOn6RXDK5SmDkWEAFKiTHD/4Hv7s185MTblI4DnS+2PbHMBDcBRo12/4+tu3GCRB4Bq60lr9SB2Y+Sa+1tOgR0LcNXFy3NHkPuNwBBp50yZAcKUDTn88D72f0TVmg/xboWXN7a+7j9AFIU1fJG+DgEBgpUPa6x7tD7b39e6bZ3w8KSXJ9qJfV2AAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UJCAY0ONVcXdQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAABs0lEQVR42u3UMQ0AAAgEMcC/3w8bPkgr4YbrbAqAX0YCAHMHwNwBMHcAzB0AcwcwdwDMHQBzB8DcATB3AHMHwNwBMHcAzB0AcwfA3AHMHQBzB8DcATB3AMwdwNwBMHcAzB0AcwfA3AEwdwBzB8DcATB3AMwdAHMHMHcAzB0AcwfA3AEwdwDMHcDcATB3AMwdAHMHwNwBzB0AcwfA3AEwdwDMHQBzBzB3AMwdAHMHwNwBMHcAcwfA3AEwdwDMHQBzB8DcAcwdAHMHwNwBMHcAzB3A3AEwdwDMHQBzB8DcATB3AHMHwNwBMHcAzB0AcwcwdwDMHQBzB8DcATB3AMwdwNwBMHcAzB0AcwfA3AHMHQBzB8DcATB3AMwdAHMHMHcAzB0AcwfA3AEwdwBzB8DcATB3AMwdAHMHwNwBzB0AcwfA3AEwdwDMHcDcATB3AMwdAHMHwNwBMHcAcwfA3AEwdwDMHQBzBzB3AMwdAHMHwNwBMHcAzB3A3AEwdwDMHQBzB8DcAcwdAHMHwNwBMHcAzB0AcwcwdwDMHQBzB8DcATB3AHMHwNwBMHcAzB0AcwfA3AE+Owg2BBPOymI+AAAAAElFTkSuQmCC"},"36a7":function(t,e,i){},"5ddb":function(t,e,i){"use strict";i("f79d")},"62ad":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),a=i("d9f7"),n=i("80d2");const r=["sm","md","lg","xl"],c=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),o=(()=>r.reduce((t,e)=>(t["offset"+Object(n["G"])(e)]={type:[String,Number],default:null},t),{}))(),l=(()=>r.reduce((t,e)=>(t["order"+Object(n["G"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(c),offset:Object.keys(o),order:Object.keys(l)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...c,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:n}){let r="";for(const a in e)r+=String(e[a]);let c=u.get(r);if(!c){let t;for(t in c=[],d)d[t].forEach(i=>{const s=e[i],a=h(t,i,s);a&&c.push(a)});const i=c.some(t=>t.startsWith("col-"));c.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(r,c)}return t(e.tag,Object(a["a"])(i,{class:c}),s)}})},"891e":function(t,e,i){"use strict";i("17b3");var s=i("9d26"),a=i("dc22"),n=i("a9ad"),r=i("de2c"),c=i("7560"),o=i("58df");e["a"]=Object(o["a"])(n["a"],Object(r["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:a["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,s=Math.floor(e/2),a=this.length-s+1+i;if(this.value>s&&this.value<a){const t=1,e=this.length,a=this.value-s+2,n=this.value+s-2-i,r=a-1===t+1?2:"...",c=n+1===e-1?n+1:"...";return[1,r,...this.range(a,n),c,this.length]}if(this.value===s){const t=this.value+s-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===a){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(a,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let s=t;s<=e;s++)i.push(s);return i},genIcon(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:a}},[t(s["a"],[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),s=e===this.value,a=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(a,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},"8efc":function(t,e,i){},adda:function(t,e,i){"use strict";i("8efc");var s=i("90a2"),a=(i("36a7"),i("24b2")),n=i("58df"),r=i("80d2"),c=Object(n["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(r["s"])(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=c,l=i("7560"),d=i("d9f7"),h=i("d9bd");const u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(o,l["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(h["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){const t=Object(r["s"])(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=o.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},c082:function(t,e,i){"use strict";i.r(e);var s=i("8336"),a=i("62ad"),n=i("a523"),r=i("132d"),c=i("adda"),o=i("8860"),l=i("da13"),d=i("1800"),h=i("8270"),u=i("5d23"),g=i("891e"),p=i("0fd9"),f=function(){var t=this,e=t._self._c;return e("div",[e(n["a"],{staticClass:"header",attrs:{fluid:""}},[e(c["a"],{staticClass:"d-none d-md-flex d-lg-flex",attrs:{height:"300",src:i("c279")}},[e(p["a"],[e("div",{staticClass:"title-container"},[e(a["a"],{attrs:{"md-4":"",offset:"2"}},[e("div",{staticClass:"my-title-2"},[t._v("Where To Stay")])])],1)])],1),e("div",{staticClass:"d-flex d-md-none"},[e(c["a"],{attrs:{height:"150",src:i("22f1")}}),e("div",{staticClass:"pageTitle"},[t._v("Where To Stay")])],1),e("br")],1),e(n["a"],{staticClass:"stay-container"},[e(p["a"],[e(a["a"],{attrs:{md:"6"}},[e("h3",[t._v("Select your desire service")]),e(o["a"],t._l(t.guides,(function(i,a){return e(l["a"],{key:a,staticStyle:{border:"#ededed solid 1px","border-radius":"20px","margin-top":"5px",padding:"8px"}},[e(h["a"],[e(c["a"],{staticStyle:{"border-radius":"10px"},attrs:{src:i.image}})],1),e(u["a"],[e(u["c"],[e("b",[t._v(t._s(i.title))])]),e(u["b"],{staticClass:"mobile-number",staticStyle:{color:"#04d39b","font-weight":"bold","padding-top":"5px","letter-spacing":"1px"}},[t._v(t._s(i.contact))]),e(u["b"],[t._v(t._s(i.address))])],1),e(d["a"],{staticClass:"phone-icon"},[e(s["a"],{attrs:{href:"tel:"+i.contact,icon:"",outlined:"",rounded:"",color:"#04d39b"}},[e(r["a"],[t._v("mdi-phone")])],1)],1)],1)})),1)],1)],1),e(p["a"],[t.numberOfPages>1?e(a["a"],{staticClass:"justify-start",attrs:{md:"6"}},[e(g["a"],{attrs:{length:t.numberOfPages},on:{input:t.onPageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)],1)],1)},m=[],A={data(){return{page:1,guides:[],numberOfPages:0}},mounted(){this.getGuide()},methods:{getGuide(){this.$axios.get("/guide/Where To Stay?page="+this.page).then(t=>{this.numberOfPages=t.data.guides.last_page,this.page=t.data.guides.current_page,this.guides=t.data.guides.data}).catch(t=>{throw t})},onPageChange(){this.getGuide()}}},v=A,b=(i("5ddb"),i("2877")),w=Object(b["a"])(v,f,m,!1,null,"2f123089",null);e["default"]=w.exports},c279:function(t,e,i){t.exports=i.p+"img/wherestay.a1914fff.jpg"},f79d:function(t,e,i){}}]);