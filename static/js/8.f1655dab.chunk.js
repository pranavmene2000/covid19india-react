(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[8],{598:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(28),i=a.n(c),s=a(0),o=a.n(s),l=a(59);t.default=function(e){var t=Object(s.useState)([]),a=Object(n.a)(t,2),c=a[0],r=a[1];Object(s.useEffect)((function(){u()}),[]),Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]);var u=function(){i.a.get("https://api.covid19india.org/website_data.json").then((function(e){r(e.data.faq)})).catch((function(e){console.log(e)}))};return o.a.createElement("div",{className:"FAQ"},o.a.createElement(l.a,null,o.a.createElement("title",null,"FAQ - covid19india.org"),o.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),c.map((function(e,t){return o.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},o.a.createElement("h2",{className:"question"},e.question),o.a.createElement("h2",{className:"answer",dangerouslySetInnerHTML:{__html:e.answer}}))})))}}}]);
//# sourceMappingURL=8.f1655dab.chunk.js.map