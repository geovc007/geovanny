(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(e,a,t){"use strict";t.r(a);var c=t("ln6h"),s=t.n(c),n=t("q1tI"),i=t.n(n),r=t("pJ0N"),o=t("vcXL"),l=t.n(o),m=i.a.createElement,d=function(e){var a=e.precio,t=a.price,c=a.percent_change_1h,s=a.percent_change_7d,n=a.percent_change_24h;return m("div",{className:"card text-white bg-success mb-3"},m("div",{className:"card-header"},"Precion del Bitcoin"),m("div",{className:"card-body"},m("h4",{className:"card-title"}," Precio Actual: $",t),m("div",{className:"d-md-flex justify-content-between"},m("p",{className:"card-text"},m("span",{className:"font-weight-bold"},"Ultima hora: "),c,"%"),m("p",{className:"card-text"},m("span",{className:"font-weight-bold"},"Ultimas 24 horas: "),n,"%"),m("p",{className:"card-text"},m("span",{className:"font-weight-bold"},"Ultima 7 Dias: "),s,"%"))))},p=i.a.createElement,u=function(e){var a=e.noticia,t=a.urlToImage,c=a.url,s=a.title,n=a.description,i=a.source,r="";return r=""!==t?p("img",{src:t,alt:s,className:"card-img-top"}):p("p",{className:"text-center my-5"},"Imagen no Disponible"),p("div",{className:"col-md-6 col-12 mb-4"},p("div",{className:"card"},p("div",{className:"card-image"},r),p("div",{className:"card-body"},p("h3",{className:"card-title"},s),p("p",{className:"card-text"},n),p("p",{className:"card-text"},i.name),p("a",{href:c,target:"_blank",className:"btn btn-primary d-block"},"Leer Noticia"))))},N=i.a.createElement,b=function(e){return N("div",{className:"row"},e.noticias.map((function(e){return N(u,{key:e.url,noticia:e})})))},h=(t("pLtp"),i.a.createElement,i.a.createElement,i.a.createElement),v=function(e){return h(r.a,null,h("div",{className:"row"},h("div",{className:"col-12"},h("h2",null,"Precio del Bitcoin"),h(d,{precio:e.precioBitcoin})),h("div",{className:"col-8"},h("h2",{className:"mb-3"},"Noticias sobre Bitcoin"),h(b,{noticias:e.noticias})),h("div",{className:"col-4"},h("h2",{className:"mb-3"},"Proximos Eventos Bitcoin"))))};v.getInitialProps=function(){var e,a,t,c;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(l()("https://api.coinmarketcap.com/v2/ticker/1/"));case 2:return e=n.sent,n.next=5,s.a.awrap(l()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6c1c1dfcb4a943c7bf481bc628b80153&languaje=es"));case 5:return a=n.sent,n.next=8,s.a.awrap(e.json());case 8:return t=n.sent,n.next=11,s.a.awrap(a.json());case 11:return c=n.sent,n.abrupt("return",{precioBitcoin:t.data.quotes.USD,noticias:c.articles});case 13:case"end":return n.stop()}}))};a.default=v},vcXL:function(e,a,t){"use strict";var c=self.fetch.bind(self);e.exports=c,e.exports.default=e.exports},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1]]]);