(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[486],{9136:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=function(){var t=this,e=t._self._c;return e("div",[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v("订单管理")]),e("el-breadcrumb-item",[t._v("订单列表")])],1),e("el-card",[e("el-row",[e("el-col",{attrs:{span:8}},[e("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入订单号",clearable:""},on:{clear:t.clearQueryInput},model:{value:t.queryParams.query,callback:function(e){t.$set(t.queryParams,"query",e)},expression:"queryParams.query"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)],1),e("el-table",{attrs:{data:t.orderList,stripe:"",border:""}},[e("el-table-column",{attrs:{label:"#",type:"index",align:"center"}}),e("el-table-column",{attrs:{label:"订单编号",prop:"order_number"}}),e("el-table-column",{attrs:{label:"订单价格",prop:"order_price",align:"center"}}),e("el-table-column",{attrs:{label:"是否支付",align:"center"},scopedSlots:t._u([{key:"default",fn:function(r){return["0"===r.row.pay_status?e("el-tag",{attrs:{type:"danger"}},[t._v("未支付")]):e("el-tag",{attrs:{type:"success"}},[t._v("已支付")])]}}])}),e("el-table-column",{attrs:{label:"是否发货",prop:"is_send",align:"center"}}),e("el-table-column",{attrs:{label:"下单时间",prop:"create_time",align:"center"}})],1),e("el-pagination",{attrs:{"current-page":parseInt(t.currentPage),"page-sizes":[1,2,5,7,10,15,50],"page-size":t.queryParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},s=[],a=r(5743),i=r.n(a),u={name:"Orders",created(){this.getOrderList()},data(){return{queryParams:{query:"",pagenum:1,pagesize:7},orderList:[],total:0,currentPage:1}},methods:{async getOrderList(){const{data:t}=await this.$http.get("orders",{params:this.queryParams});if(200!==t.meta.status)return this.$message({message:t.meta.msg,type:"error",center:!0});t.data.goods.forEach((t=>{t.create_time=i()(1e3*t.create_time).format("YYYY-MM-DD HH:mm:ss"),t.update_time=i()(1e3*t.update_time).format("YYYY-MM-DD HH:mm:ss")})),this.orderList=t.data.goods,this.total=t.data.total,this.currentPage=t.data.pagenum},clearQueryInput(){this.getOrderList()},handleSizeChange(t){this.queryParams.pagesize=t,this.getOrderList()},handleCurrentChange(t){this.queryParams.pagenum=t,this.getOrderList()}}},o=u,c=r(1001),l=(0,c.Z)(o,n,s,!1,null,"7f827567",null),h=l.exports},5743:function(t){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",a="minute",i="hour",u="day",o="week",c="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},y={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,c),a=r-s<0,i=e.clone().add(n+(a?-1:1),c);return+(-(n+(r-s)/(a?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:u,D:d,h:i,m:a,s:s,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=p;var D=function(t){return t instanceof w},b=function t(e,r,n){var s;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();M[a]&&(s=a),r&&(M[a]=r,s=a);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var u=e.name;M[u]=e,s=u}return!n&&s&&(v=s),s||!n&&v},_=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new w(r)},S=y;S.l=b,S.i=D,S.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function p(t){this.$L=b(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var r=_(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return _(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<_(t)},g.$g=function(t,e,r){return S.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!S.u(e)||e,l=S.p(t),f=function(t,e){var s=S.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},m=function(t,e){return S.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},$=this.$W,p=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case h:return n?f(1,0):f(31,11);case c:return n?f(1,p):f(0,p+1);case o:var v=this.$locale().weekStart||0,M=($<v?$+7:$)-v;return f(n?g-M:g+(6-M),p);case u:case d:return m(y+"Hours",0);case i:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case s:return m(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,o=S.p(t),l="set"+(this.$u?"UTC":""),f=(r={},r[u]=l+"Date",r[d]=l+"Date",r[c]=l+"Month",r[h]=l+"FullYear",r[i]=l+"Hours",r[a]=l+"Minutes",r[s]=l+"Seconds",r[n]=l+"Milliseconds",r)[o],m=o===u?this.$D+(e-this.$W):e;if(o===c||o===h){var $=this.clone().set(d,1);$.$d[f](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[S.p(t)]()},g.add=function(n,l){var d,f=this;n=Number(n);var m=S.p(l),$=function(t){var e=_(f);return S.w(e.date(e.date()+Math.round(t*n)),f)};if(m===c)return this.set(c,this.$M+n);if(m===h)return this.set(h,this.$y+n);if(m===u)return $(1);if(m===o)return $(7);var p=(d={},d[a]=e,d[i]=r,d[s]=t,d)[m]||1,g=this.$d.getTime()+n*p;return S.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),a=this.$H,i=this.$m,u=this.$M,o=r.weekdays,c=r.months,l=function(t,r,s,a){return t&&(t[r]||t(e,n))||s[r].slice(0,a)},h=function(t){return S.s(a%12||12,t,"0")},d=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:S.s(u+1,2,"0"),MMM:l(r.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,o,2),ddd:l(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:S.s(a,2,"0"),h:h(1),hh:h(2),a:d(a,i,!0),A:d(a,i,!1),m:String(i),mm:S.s(i,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return n.replace($,(function(t,e){return e||m[t]||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,f){var m,$=S.p(d),p=_(n),g=(p.utcOffset()-this.utcOffset())*e,y=this-p,v=S.m(this,p);return v=(m={},m[h]=v/12,m[c]=v,m[l]=v/3,m[o]=(y-g)/6048e5,m[u]=(y-g)/864e5,m[i]=y/r,m[a]=y/e,m[s]=y/t,m)[$]||y,f?v:S.a(v)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=b(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),O=w.prototype;return _.prototype=O,[["$ms",n],["$s",s],["$m",a],["$H",i],["$W",u],["$M",c],["$y",h],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,w,_),t.$i=!0),_},_.locale=b,_.isDayjs=D,_.unix=function(t){return _(1e3*t)},_.en=M[v],_.Ls=M,_.p={},_}))}}]);
//# sourceMappingURL=orders.45e1501d.js.map