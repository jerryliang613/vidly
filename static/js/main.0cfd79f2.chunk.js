(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"apiEndpoint":"https://jerrys-vidly.herokuapp.com/api/"}')},43:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),l=a.n(s),o=a(7),c=(a(48),a(49),a(50),a(1)),i=a(4),u=a(3),m=a(2),p=(a(51),a(6)),d=a(26),h=(a(52),function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(o.b,{className:"nav-item nav-link",to:"/movies"},"Movies"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{className:"nav-item nav-link",to:"/customers"},"Customers"),r.a.createElement(o.b,{className:"nav-item nav-link",to:"rentals"},"Rentals")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{className:"nav-item nav-link",to:"/profile"},t.name),r.a.createElement(o.b,{className:"nav-item nav-link",to:"/logout"},"Logout")),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(o.b,{className:"nav-item nav-link",to:"/register"},"Register")))))}),v=a(17),b=a(8),f=a(5),g=a.n(f),y=a(11),E=a(24),k=a.n(E),j=a(21),O=a.n(j);O.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||d.b.error("unexpected error occured"),Promise.reject(e)}));var S={get:O.a.get,post:O.a.post,put:O.a.put,delete:O.a.delete,setJwt:function(e){O.a.defaults.headers.common["x-auth-token"]=e}},w=a(13),C=function(){return S.get(w.apiEndpoint+"movies")},x=function(e){return S.get(w.apiEndpoint+"movies/"+e)},N=function(e){return S.delete(w.apiEndpoint+"movies/"+e)},I=function(e){var t=e._id;return delete e._id,""!==t?S.put(w.apiEndpoint+"movies/"+t,e):S.post(w.apiEndpoint+"movies",e)};function D(){return S.get(w.apiEndpoint+"genres")}var M=function(e){var t=e.pagecount,a=e.currentpage,n=e.onClick;if(1===t)return null;for(var s=[],l=0;l<t;l++)s.push(l+1);return r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"pagination"},s.map((function(e){return r.a.createElement("li",{onClick:function(){return n(e)},key:e,className:e===a?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link"},e))}))))},A=function(e){var t=e.genres,a=e.selectedgenre,n=e.onClick;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e._id,onClick:function(){return n(e)},style:{cursor:"pointer"},className:e._id===a._id?"list-group-item active":"list-group-item"},e.name)})))},_=[{key:"Check"},{path:"title",label:"Title"},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"Like"},{key:"Delete"}],L=[{path:"name",label:"Name"},{path:"email",label:"Email"},{path:"phone",label:"Phone"},{path:"address",label:"Address"},{path:"class",label:"Class"}],R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).raiseSort=function(t){var a=Object(b.a)({},e.props.sortpath),n="asc";t===a.path&&(n="asc"===a.order?"desc":"asc"),a={path:t,order:n},e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortpath;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e.renderCheckbox=function(){return r.a.createElement("div",null,r.a.createElement("input",{onChange:e.props.onDeleteAll,checked:e.props.deleteall,type:"checkbox"}),0!==e.props.deletedmovies.length&&r.a.createElement("i",{onClick:e.props.onDeleteMulti,className:"fa fa-trash btn"}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.user;return r.a.createElement("thead",{className:"bg-primary ",style:{color:"white"}},t&&t.isAdmin&&r.a.createElement("tr",{className:"bg-light"},r.a.createElement("th",{colSpan:this.props.colums.length},this.renderCheckbox())),r.a.createElement("tr",null,this.props.colums.map((function(t){return r.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return e.raiseSort(t.path)},key:t.path||t.key,scope:"col"},t.label,e.renderSortIcon(t))}))))}}]),a}(n.Component),T=function(e){var t=e.movie,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{onClick:function(){return a(t)},className:t.isLike?"fa fa-heart btn":"fa fa-heart-o btn"}))},G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).user=e.props.user,e.extraColums1={key:"Checkbox",content:function(t){return e.user&&e.user.isAdmin?r.a.createElement("input",{value:t._id,onChange:e.props.onCheck,type:"checkbox",checked:!!e.props.deletedmovies.includes(t._id)}):null}},e.extraColums=[{key:"Like",content:function(t){return r.a.createElement(T,{onClick:e.props.onLike,movie:t})}},{key:"Delete",content:function(t){return e.user&&e.user.isAdmin?r.a.createElement("button",{onClick:function(){return e.props.onDelete(t._id)},className:"btn btn-danger"},"Delete"):null}}],e.colums=[Object(b.a)({},e.extraColums1)].concat(Object(v.a)(_.filter((function(e){return e.path}))),Object(v.a)(e.extraColums)),e.renderCell=function(e,t){if(t.path){if("title"===t.path){var a="/movies/"+e._id;return r.a.createElement(o.b,{to:a},e.title)}return k.a.get(e,t.path)}if(t.content)return t.content(e)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.movies;return r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t._id},e.colums.map((function(a){return r.a.createElement("td",{key:t._id+(a.path||a.key)},e.renderCell(t,a))})))})))}}]),a}(n.Component),P=function(e){var t=e.movies,a=e.onDelete,n=e.onLike,s=e.onSort,l=e.sortpath,o=e.onCheck,c=e.deletedmovies,i=e.deleteall,u=e.onDeleteAll,m=e.onDeleteMulti,p=e.user;return r.a.createElement("table",{className:"table table-striped"},r.a.createElement(R,{colums:_,onSort:s,sortpath:l,deletedmovies:c,onDeleteAll:u,deleteall:i,onDeleteMulti:m,user:p}),r.a.createElement(G,{movies:t,onDelete:a,onLike:n,onCheck:o,deleteall:i,deletedmovies:c,user:p}))},B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",value:t,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Search...",className:"form-control my-3"})}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],selectedgenre:{name:"All Genres"},currentpage:1,sortpath:{path:"title",order:"asc"},searchQuery:"",deletedMovies:[],deleteall:!1,loading:!0},e.handleDelete=function(){var t=Object(y.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=n.filter((function(e){return e._id!==a})),e.setState({movies:r}),t.prev=3,t.next=6,N(a);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&alert("The movie has been deleted"),e.setState({movies:n});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var a=Object(b.a)(Object(b.a)({},t),{},{isLike:!t.isLike}),n=Object(v.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(b.a)({},a),e.setState({movies:n})},e.handlePageChang=function(t){e.setState({currentpage:t})},e.paginate=function(e,t){var a=6*(t-1);return e.slice(a,a+6)},e.handleGenreChange=function(t){e.setState({selectedgenre:t,searchQuery:"",currentpage:1,sortpath:{path:"title",order:"asc"}})},e.filterMovie=function(){var t=e.state,a=t.movies,n=t.selectedgenre,r=t.sortpath,s=r.path,l=r.order,o=e.state.searchQuery,c=o?a.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())})):a;return n._id?k.a.orderBy(c.filter((function(e){return e.genre._id===n._id})),[s],[l]):k.a.orderBy(c,[s],[l])},e.handleSort=function(t){e.setState({sortpath:t})},e.getPageCount=function(e){return e.length%6!==0?Math.trunc(e.length/6)+1:e.length/6},e.handleMovieSelected=function(t){e.props.history.push("/movies/"+t)},e.handleSearch=function(t){e.setState({searchQuery:t,selectedgenre:{name:"All Genres"},currentpage:1})},e.handleCheck=function(t){var a=t.currentTarget,n=Object(v.a)(e.state.deletedMovies);a.checked?n.push(a.value):(n=n.filter((function(e){return e!==a.value})),e.setState({deleteall:!1})),e.setState({deletedMovies:n})},e.handelDeleteAll=function(){var t=Object(y.a)(g.a.mark((function t(a){var n,r,s,l,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.currentTarget,r=[],s=n.checked,t.next=5,C();case 5:l=t.sent,o=l.data,s&&(r=o.map((function(e){return e._id}))),e.setState({deleteall:s,deletedMovies:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDeleteMulti=function(){var t=Object(v.a)(e.state.movies),a=Object(v.a)(e.state.deletedMovies);t=t.filter((function(e){return!a.includes(e._id)})),e.setState({movies:t,deletedMovies:[]})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,a,n,r,s=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,a=t.data,e.next=6,D();case 6:n=e.sent,r=n.data,this.setState({movies:a,genres:[{_id:"",name:"All Genres"}].concat(Object(v.a)(r))}),this.timerId=setTimeout((function(){s.setState({loading:!1})}),1e4);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearTimeout(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.currentpage,n=e.genres,s=e.selectedgenre,l=e.sortpath,c=e.searchQuery,i=e.deletedMovies,u=e.deleteall,m=e.loading,p=this.filterMovie(t,s,l),d=this.getPageCount(p),h=p.length,v=this.paginate(p,a),b=this.props.user;return 0!==t.length&&0!==n.length||!m?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2 my-3"},r.a.createElement(A,{genres:n,selectedgenre:s,onClick:this.handleGenreChange})),r.a.createElement("div",{className:"col"},b&&r.a.createElement(o.b,{to:"/movies/new",className:"btn btn-primary",style:{marginTop:"20px",marginBottom:"20px"}},"New Movie"),0===h?r.a.createElement("p",null,"There are no movies in database"):r.a.createElement("p",null,"Showing ",h," movie(s) in database"),r.a.createElement(B,{value:c,onChange:this.handleSearch}),0!==h&&r.a.createElement(P,{itemcount:h,movies:v,onDelete:this.handleDelete,onLike:this.handleLike,onSort:this.handleSort,sortpath:l,onCheck:this.handleCheck,deletedmovies:i,onDeleteAll:this.handelDeleteAll,deleteall:u,onDeleteMulti:this.handleDeleteMulti,user:b}),0!==h&&r.a.createElement(M,{pagecount:d,currentpage:a,onClick:this.handlePageChang}))):r.a.createElement("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{className:"spinner-border text-primary ",style:{width:"4rem",height:"4rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={customers:[],currentpage:1,sortpath:{path:"name",order:"asc"},searchQuery:"",loading:!0},e.handleDelete=function(){console.log("handle delete")},e.handleSort=function(){console.log("hnadle sort")},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,a,n=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get(w.apiEndpoint+"customers");case 3:t=e.sent,a=t.data,this.setState(a),setTimeout((function(){n.setState({loading:!1})}),1e4),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Can not get data properly!");case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.setState,t=e.customers,a=e.sortpath,n=this.props.user;return r.a.createElement("div",{className:"content"},n&&r.a.createElement(o.b,{to:"/customers/new",className:"btn btn-primary",style:{marginTop:"20px",marginBottom:"20px"}},"New Customer"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement(R,{colums:L,onSort:this.handleSort,sortpath:a,user:n}),r.a.createElement(G,{data:t,onDelete:this.handleDelete,user:n})))}}]),a}(n.Component),Q=function(e){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Rentals"),r.a.createElement("button",{onClick:function(){return e.history.push("/movies")},className:"btn btn-primary"},"return"))},J=function(e){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Not Found"),r.a.createElement("button",{onClick:function(){return e.history.push("/movies")},className:"btn btn-primary"},"Return"))},U=a(23),W=a(22),V=function(e){var t=e.name,a=e.label,n=e.error,s=Object(W.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({name:t,id:t},s,{className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},$=a(10),z=a.n($),H=function(e){var t=e.items,a=e.selectedItem,n=e.label,s=e.error,l=e.onChange,o=e.disabled,c=Object(W.a)(e,["items","selectedItem","label","error","onChange","disabled"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputGroupSelect"},n),r.a.createElement("select",Object.assign({className:"custom-select",id:"inputGroupSelect",onChange:l,disabled:o,value:a},c),!a&&r.a.createElement("option",{value:""},"Choose..."),t.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),s&&r.a.createElement("div",{className:"alert alert-danger"},s))},K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={},e.styles={maxWidth:"400px",margin:"auto"},e.validate=function(){var t=Object(b.a)({},e.state.data),a=z.a.validate(t,e.schema,{abortEarly:!1}).error;return a?a.details.map((function(e){return Object(U.a)({},e.path[0],e.message)})).reduce((function(e,t){return Object(b.a)(Object(b.a)({},e),t)})):null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate(),n=a||{};e.setState({errors:n}),0===Object.keys(n).length&&e.doSubmit()},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(U.a)({},a,n),s=Object(U.a)({},a,e.schema[a]),l=z.a.validate(r,s).error;return l?l.details[0].message:null},e.handleChange=function(t){var a=t.currentTarget,n=Object(b.a)({},e.state.errors),r=a.name,s=e.validateProperty(a);s?n[r]=s:delete n[r];var l=Object(b.a)({},e.state.data);l[a.name]=a.value,e.setState({data:l,errors:n})},e.renderButton=function(t){return r.a.createElement("button",{disabled:e.validate(),className:"btn btn-primary"},t)},e.renderInput=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=e.state,o=l.data,c=l.errors;return r.a.createElement(V,{type:n,name:t,value:o[t],label:a,onChange:e.handleChange,error:c[t],readOnly:s})},e.renderGroupSelect=function(t,a,n,s,l){return r.a.createElement(H,{items:t,name:n,label:s,value:e.state.data[n],error:e.state.errors[n],onChange:e.handleChange,disabled:l,selectedItem:a})},e}return a}(n.Component),X=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{_id:"",title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],selectedGenre:"",errors:{}},e.schema={_id:z.a.any(),title:z.a.string().required().label("Title"),genreId:z.a.string().required().label("Genre"),numberInStock:z.a.number().min(0).required().label("Stock"),dailyRentalRate:z.a.number().min(1).max(10).required().label("Rate")},e.doSubmit=Object(y.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e.state.data);case 3:e.props.history.push("/movies"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0.response&&t.t0.response.status>=400&&t.t0.response.status<500&&alert("something wrong");case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,a,n,r,s,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieid,e.next=3,D();case 3:if(a=e.sent,n=a.data,this.setState({genres:Object(v.a)(n)}),!t){e.next=21;break}return e.t0=b.a,e.t1={},e.next=11,x(t);case 11:if(e.t2=e.sent,r=(0,e.t0)(e.t1,e.t2),s=r.data,l=Object(b.a)({},s),0!==Object.keys(l).length){e.next=17;break}return e.abrupt("return",this.props.history.replace("/notfound"));case 17:l.genreId=l.genre._id,this.setState({selectedGenre:l.genreId}),delete l.genre,this.setState({data:l});case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.user,t=this.state,a=t.genres,n=t.selectedGenre;return r.a.createElement("form",{onSubmit:this.handleSubmit,style:this.styles},r.a.createElement("h1",null,"Movie Form"),this.renderInput("title","Title","text",!e),this.renderGroupSelect(a,n,"genreId","Genre",!e),this.renderInput("numberInStock","Stock","text",!e),this.renderInput("dailyRentalRate","Rate","text",!e),e&&this.renderButton("Save"))}}]),a}(K),Y=a(42),Z=w.apiEndpoint+"auth";function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(y.a)(g.a.mark((function e(t,a){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post(Z,{email:t,password:a});case 2:n=e.sent,r=n.data,console.log(r),localStorage.setItem("token",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){try{var e=localStorage.getItem("token");return Object(Y.a)(e)}catch(t){}}S.setJwt(localStorage.getItem("token"));var ne=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:z.a.string().required().label("Username"),password:z.a.string().required().label("Password")},e.doSubmit=Object(y.a)(g.a.mark((function t(){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.props.location.state,n=e.state.data,t.next=5,ee(n.username,n.password);case 5:window.location=a?a.from.pathname:"/vidly",t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.t0.response&&400===t.t0.response.status&&((r=e.state.errors).username=t.t0.response.data,e.setState({errors:r}));case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return ae()?r.a.createElement(p.a,{to:"/vidly"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,style:this.styles},r.a.createElement("h1",null,"Login"),this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Submit"),r.a.createElement("div",{class:"alert alert-light mt-3",style:{padding:0},role:"alert"},r.a.createElement("li",{style:{listStyleType:"none"}},"admin@jerryliang.co"),r.a.createElement("li",{style:{listStyleType:"none"}},"admin"))))}}]),a}(K);function re(e){return S.post(w.apiEndpoint+"users",{email:e.email,password:e.password,name:e.username})}var se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{email:"",password:"",username:""},errors:{}},e.schema={email:z.a.string().email().required().label("Email"),password:z.a.string().min(5).required().label("Password"),username:z.a.string().required().label("Username")},e.doSubmit=Object(y.a)(g.a.mark((function t(){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,re(e.state.data);case 3:a=t.sent,n=a.headers,localStorage.setItem("token",n["x-auth-token"]),window.location="/vidly",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(b.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:r}));case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,style:this.styles},r.a.createElement("h1",null,"Register"),this.renderInput("email","Email"),this.renderInput("password","Password"),this.renderInput("username","Username"),this.renderButton("Register"))}}]),a}(K),le=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("token"),window.location="/vidly"}},{key:"render",value:function(){return null}}]),a}(n.Component),oe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Customer ID")}}]),a}(n.Component),ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"new customer")}}]),a}(n.Component),ie=function(e){var t=e.component,a=e.render,n=Object(W.a)(e,["component","render"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return ae()?t?r.a.createElement(t,Object.assign({},e,{user:ae()})):a(e):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ue=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=ae();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null),r.a.createElement(h,{user:e}),r.a.createElement("div",{className:"content"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/login",component:ne}),r.a.createElement(p.b,{path:"/logout",component:le}),r.a.createElement(ie,{path:"/register",component:se}),r.a.createElement(ie,{path:"/customers/new",component:ce}),r.a.createElement(ie,{path:"/customers/:id",component:oe}),r.a.createElement(ie,{path:"/customers",component:F}),r.a.createElement(ie,{path:"/rentals",component:Q}),r.a.createElement(ie,{path:"/movies/new",component:X}),r.a.createElement(p.b,{path:"/movies/:movieid",render:function(t){return r.a.createElement(X,Object.assign({},t,{user:e}))}}),r.a.createElement(p.b,{path:"/movies",render:function(t){return r.a.createElement(q,Object.assign({},t,{user:e}))}}),r.a.createElement(p.b,{path:"/vidly",exact:!0,render:function(t){return r.a.createElement(q,Object.assign({},t,{user:e}))}}),r.a.createElement(p.b,{path:"/",exact:!0,render:function(t){return r.a.createElement(q,Object.assign({},t,{user:e}))}}),r.a.createElement(p.b,{path:"/notfound",component:J}),r.a.createElement(p.a,{to:"/notfound"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.0cfd79f2.chunk.js.map