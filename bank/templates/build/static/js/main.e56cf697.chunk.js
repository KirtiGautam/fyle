(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{63:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(32),l=s.n(i),r=(s(40),s(13)),d=s(15),j=s(16),o=s(9),h=s(18),b=s(17),O=s(14),x=s.n(O),m="https://quiet-peak-48956.herokuapp.com/",u=s(8),f=s.n(u),p=s(2),g=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).ddos="",c.state={banks:[],offset:0,limit:5,q:"",count:0},c.onChangeHandle=c.onChangeHandle.bind(Object(o.a)(c)),c.pageDecrementHandle=c.pageDecrementHandle.bind(Object(o.a)(c)),c.pageIncrementHandle=c.pageIncrementHandle.bind(Object(o.a)(c)),c.getBanks=c.getBanks.bind(Object(o.a)(c)),c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;f()("#loader").removeClass("d-none"),f()("#banks").addClass("d-none"),x.a.get("".concat(m,"api/branches/?q=&limit=").concat(this.state.limit,"&offset=").concat(this.state.offset)).then((function(t){e.setState({banks:t.data.branches,count:t.data.count}),f()("#loader").addClass("d-none"),f()("#banks").removeClass("d-none")})).catch((function(e){console.log(e.response)}))}},{key:"pageDecrementHandle",value:function(){var e=this.state.offset-1;this.setState({offset:e}),this.ddos=setTimeout(this.getBanks,500)}},{key:"pageIncrementHandle",value:function(){var e=this.state.offset+1;this.setState({offset:e}),this.ddos=setTimeout(this.getBanks,500)}},{key:"onChangeHandle",value:function(e){var t;this.setState((t={},Object(r.a)(t,e.currentTarget.name,e.currentTarget.value),Object(r.a)(t,"offset",0),t)),clearTimeout(this.ddos),this.ddos=setTimeout(this.getBanks,500)}},{key:"getBanks",value:function(){var e=this;f()("#loader").removeClass("d-none"),f()("#banks").addClass("d-none"),x.a.get("".concat(m,"api/branches/?q=").concat(this.state.q,"&limit=").concat(this.state.limit,"&offset=").concat(this.state.offset)).then((function(t){e.setState({banks:t.data.branches,count:t.data.count}),f()("#loader").addClass("d-none"),f()("#banks").removeClass("d-none")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"m-5 col-12",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h1",{className:"font-weight-bold col-12",children:"Bank Branches"}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsxs)("select",{defaultValue:"",className:"form-control",name:"q",onChange:this.onChangeHandle,children:[Object(c.jsx)("option",{disabled:!0,value:"",children:"Select city"}),Object(c.jsx)("option",{value:"Ludhiana",children:"Ludhiana"}),Object(c.jsx)("option",{value:"Bangalore",children:"Bangalore"}),Object(c.jsx)("option",{value:"Delhi",children:"Delhi"}),Object(c.jsx)("option",{value:"Chandigarh",children:"Chandigarh"}),Object(c.jsx)("option",{value:"Amritsar",children:"Amritsar"})]})}),Object(c.jsx)("div",{className:"col-lg-3"}),Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsxs)("div",{className:"input-group md-form form-sm form-1 pl-0",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("span",{className:"input-group-text purple lighten-3",id:"basic-text1",children:Object(c.jsx)("i",{className:"fas fa-search text-white","aria-hidden":"true"})})}),Object(c.jsx)("input",{className:"form-control my-0 py-1",name:"q",type:"text",placeholder:"Search","aria-label":"Search",value:this.state.q,onChange:this.onChangeHandle})]})}),Object(c.jsxs)("table",{className:"col-12 mt-5 table table-striped",children:[Object(c.jsx)("thead",{className:"thead-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"#"}),Object(c.jsx)("th",{scope:"col",children:"IFSC"}),Object(c.jsx)("th",{scope:"col",children:"Bank"}),Object(c.jsx)("th",{scope:"col",children:"Branch"}),Object(c.jsx)("th",{scope:"col",children:"Address"}),Object(c.jsx)("th",{scope:"col",children:"City"}),Object(c.jsx)("th",{scope:"col",children:"District"}),Object(c.jsx)("th",{scope:"col",children:"State"})]})}),Object(c.jsx)("tbody",{id:"loader",className:"d-none",children:Object(c.jsx)("tr",{className:"text-center",children:Object(c.jsxs)("td",{colSpan:"8",children:["Loading data...",Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})}),Object(c.jsx)("tbody",{id:"banks",children:this.state.banks.length>0?this.state.banks.map((function(t,s){return Object(c.jsxs)("tr",{onClick:function(){return e.props.history.push("/banks/".concat(t.ifsc))},children:[Object(c.jsx)("td",{children:++s+e.state.offset*e.state.limit}),Object(c.jsx)("td",{children:t.ifsc}),Object(c.jsx)("td",{children:t.bank}),Object(c.jsx)("td",{children:t.branch}),Object(c.jsx)("td",{children:t.address}),Object(c.jsx)("td",{children:t.city}),Object(c.jsx)("td",{children:t.district}),Object(c.jsx)("td",{children:t.state})]},t.ifsc)})):Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:"8",className:"text-center",children:"No data to show"})})})]}),Object(c.jsxs)("div",{className:"col-12 text-center",children:[Object(c.jsx)("button",{className:"btn btn-small",disabled:this.state.offset<=0,onClick:this.pageDecrementHandle,children:Object(c.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})}),Object(c.jsx)("span",{children:0===this.state.count?0:this.state.offset+1}),"/",Object(c.jsx)("span",{children:Math.ceil(this.state.count/this.state.limit)}),Object(c.jsx)("button",{className:"btn btn-small",disabled:this.state.offset*this.state.limit>=this.state.count,onClick:this.pageIncrementHandle,children:Object(c.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"})})]})]})})})})}}]),s}(n.a.Component),v=Object(p.f)(g),N=s(34),k=s(11),C=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(d.a)(this,s),(c=t.call(this,e)).state={ifsc:e.match.params.ifsc,bank:"",branch:"",address:"",city:"",district:"",state:""},x.a.get("".concat(m,"api/bank/").concat(c.state.ifsc,"/")).then((function(e){c.setState(Object(N.a)({},e.data.bank))})).catch((function(e){return console.log(e)})),c}return Object(j.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"container mt-5 ml-5",children:Object(c.jsxs)("div",{className:"row mt-5 ml-5",children:[Object(c.jsx)("div",{className:"col-lg-3"}),Object(c.jsxs)("div",{className:"card text-center shadow p-3 mb-5 bg-white rounded mt-5 col-lg-9",children:[Object(c.jsxs)("div",{className:"card-header",children:[Object(c.jsx)("span",{children:Object(c.jsx)(k.b,{className:"btn btn-lg float-left",to:"/",children:Object(c.jsx)("i",{className:"fa fa-chevron-left","aria-hidden":"true"})})}),Object(c.jsx)("h2",{children:"Bank Details"})]}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:this.state.bank}),Object(c.jsxs)("p",{className:"card-text row",children:[Object(c.jsx)("div",{className:"col-lg-1"}),Object(c.jsxs)("table",{className:"table col-lg-10",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"IFSC"}),Object(c.jsx)("td",{children:this.state.ifsc})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Branch"}),Object(c.jsx)("td",{children:this.state.ifsc})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Address"}),Object(c.jsx)("td",{children:this.state.address||Object(c.jsxs)("div",{children:["Please wait fetching data...",Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"City"}),Object(c.jsx)("td",{children:this.state.city||Object(c.jsxs)("div",{children:["Please wait fetching data...",Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"State"}),Object(c.jsx)("td",{children:this.state.state||Object(c.jsxs)("div",{children:["Please wait fetching data...",Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"District"}),Object(c.jsx)("td",{children:this.state.district||Object(c.jsxs)("div",{children:["Please wait fetching data...",Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]})})]})]})]})]})]})]})})}}]),s}(n.a.Component);var y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{exact:!0,path:"/",component:v}),Object(c.jsx)(p.a,{path:"/banks/:ifsc",component:C})]})})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,64)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(k.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.e56cf697.chunk.js.map