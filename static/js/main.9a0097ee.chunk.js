(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hacksea.e41b8f51.png"},function(e,t,a){e.exports=a.p+"static/media/hacksea2.c8c8a015.png"},function(e,t,a){e.exports=a.p+"static/media/hacksea3.bf7c7142.png"},function(e,t,a){e.exports=a.p+"static/media/hacc.128149c8.png"},function(e,t,a){e.exports=a.p+"static/media/blueplanet.ed1bcc82.png"},function(e,t,a){e.exports=a.p+"static/media/marvelApi.387381fc.png"},function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(14),l=a.n(o),c=(a(26),a(4)),r=a(5),s=a(7),m=a(6),d=a(8),h=(a(29),a(10)),u=a.n(h),p=a(9),v=a(3),f=a(2),b=a(11);p.b.add(f.e,f.b),p.b.add(b.a);var g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"inroContainer"},i.a.createElement("div",{id:"introText"},i.a.createElement("h1",null,"Kyle Lingat"),i.a.createElement("h2",null,"Front End Web Developer"),i.a.createElement("div",{id:"contactBar"},i.a.createElement("a",{href:"https://github.com/kylelingat",target:"_blank"},i.a.createElement(v.a,{icon:b.a})),i.a.createElement("a",{href:"mailto:kylejlingat@gmail.com"},i.a.createElement(v.a,{icon:f.e})))),i.a.createElement("div",{id:"arrowDown"},i.a.createElement(u.a,{href:"#t"},i.a.createElement(v.a,{icon:f.b}))))}}]),t}(n.Component),E=(a(33),a(35),a(15)),k=a.n(E),I=a(16),w=a.n(I),C=a(17),N=a.n(C),y=a(18),j=a.n(y),H=a(19),S=a.n(H),A=a(20),O=a.n(A),P={hackSeaInfo:{title:"Hack for the Sea Hackathon 2nd Place",mainImg:k.a,description:"This project was a hackathon project that placed second overall. The challenge was to design a website that improves debris reporting efficiency. I worked with a team of 5 (including me) and I took the role of the website designer and front-end developer. Most of the effort spent went through the front-end because we needed the visuals to 'wow' the judges. The whole website was built under 24 hours, I estimate that we spent 20 hours coding and 4 hours sleeping that day.",img2:w.a,description2:"This report debris page serves as a form for users to submit debris. This page improves reporting efficiency because it has better design and lets the user know what information to submit. The layout was made via CSS grid. The form doesn't actually 'submit' because we couldn't build a back-end in under 24 hours so it just submits mock data.",img3:N.a,description3:"This page is where you can see other users' reported debris and if you click on the debris it opens a modal that includes more information about the debris like who submitted it, the description, and the type which is basically everything you submitted from your form. You can also comment on the debris to give what you think about it and communicate with others to plan possible debris cleaning.",urls:{site:"https://kylelingat.github.io/hack-for-the-sea/",gitHub:"https://github.com/kylelingat/hack-for-the-sea"}},haccInfo:{title:"HACC4Edu Hackathon 1st Place",mainImg:j.a,description:"The HACC4Edu hackathon was a 24 hour state hackathon. My team competed in the high school divison representing Waipahu High School. We came in up against private and charter schools but we managed to place first. We were tasked with improving algae debris reporting efficiency. We developed a website that improves the efficiency by a online forum and a heat map of algae debris.",urls:{site:"https://zakattack9.github.io/HACC4Edu/",gitHub:"https://github.com/kylelingat/HACC4Edu"}},bluePlanetInfo:{title:"BluePlanet Foundation Project",mainImg:S.a,description:"This project was for school. Businesses came to our class and gave their pitches of problems they had. As students, we had to decide which business we're going to pick. We picked BluePlanet because they had a simple problem that we had a solution for. We decided on making an educational reflex-based game that improves clean energy and fossil fuels awareness.",urls:{site:"http://infinite-power.s3-website-us-west-2.amazonaws.com/",gitHub:"https://github.com/AOE-Dylan/BluePlanet-Project"}},marvelApiInfo:{title:"Marvel API Project",mainImg:O.a,description:"This was a personal project that I did. I wanted to play around with an API and as a big Marvel fan, I thoght that working with the MarvelAPI should be fun. Currently, all the website does is display MCU characters and if you click on the characters, it shows you their description is they have one. I'm most likely going to improve on this project and add more functionality such as displaying comics or other things in the API.",urls:{site:"https://kylelingat.github.io/marvel-api/",gitHub:"https://github.com/kylelingat/marvel-api"}},sushiInfo:{title:"Sushi Website Mockup",mainImg:"url(./images/kunio.png)",description:"For this projectss12123sss",urls:{site:"https://kylelingat.github.io/sushiwebsite/",gitHub:"https://github.com/kylelingat/sushiwebsite"}},constructionInfo:{title:"Construction Website Mockup",mainImg:"url(./images/construction.png)",description:"For this projectzxczxcssss",urls:{site:"https://kylelingat.github.io/construction-company-website/",gitHub:"https://github.com/kylelingat/construction-company-website"}}};p.b.add(f.c,f.d),p.b.add(f.a);var x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={previous:"marvelApi",next:"haccEdu"},a.keyEventHandler=function(e){var t=(e=e||window.event).which||e.keyCode;37==t?(a.props.modalContentHandler("previous",a.state.previous),console.log("test")):39==t&&a.props.modalContentHandler("next",a.state.next)},a.mainImgBg={backgroundImage:"url(".concat(P.hackSeaInfo.mainImg,")")},a.secondImgBg={backgroundImage:"url(".concat(P.hackSeaInfo.img2,")")},a.thirdImgBg={backgroundImage:"url(".concat(P.hackSeaInfo.img3,")")},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{tabIndex:"0",id:"myModal",className:"modal",onKeyDown:this.keyEventHandler.bind(this)},i.a.createElement("div",{className:"modalBody",onClick:this.props.infoClickHandler}),i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"topBar"},i.a.createElement("h2",{id:"projName"},P.hackSeaInfo.title),i.a.createElement("span",{onClick:this.props.infoClickHandler,className:"close"},i.a.createElement("p",null,"\xd7"))),i.a.createElement("div",{className:"midModal"},i.a.createElement("div",{id:"topAnchor",className:"contentContainer"},i.a.createElement("div",{className:"modalProjectImage",style:this.mainImgBg}),i.a.createElement("p",{className:"modalDescription"},P.hackSeaInfo.description),i.a.createElement("div",{className:"modalProjectImage",style:this.secondImgBg}),i.a.createElement("p",{className:"modalDescription"},P.hackSeaInfo.description2),i.a.createElement("div",{className:"modalProjectImage",style:this.thirdImgBg}),i.a.createElement("p",{className:"modalDescription"},P.hackSeaInfo.description3)),i.a.createElement("div",{className:"bottomBar"},i.a.createElement("div",{className:"modalSwitchContainer"},i.a.createElement("div",{className:"previousSwitch",onClick:this.props.modalContentHandler.bind(this,"previous",this.state.previous)},i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.c})),i.a.createElement("p",null,"Previous")),i.a.createElement("div",{className:"backTopSwitch"},i.a.createElement("a",{href:"#topAnchor"},i.a.createElement(v.a,{icon:f.a}))),i.a.createElement("div",{className:"nextSwitch",onClick:this.props.modalContentHandler.bind(this,"next",this.state.next)},i.a.createElement("p",null,"Next"),i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.d}))))))))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={previous:"hackSea",next:"bluePlanet"},a.keyEventHandler=function(e){var t=(e=e||window.event).which||e.keyCode;37==t?(a.props.modalContentHandler("previous",a.state.previous),console.log("test")):39==t&&a.props.modalContentHandler("next",a.state.next)},a.mainImgBg={backgroundImage:"url(".concat(P.haccInfo.mainImg,")")},console.log(e),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{tabIndex:"0",id:"myModal",className:"modal",onKeyDown:this.keyEventHandler.bind(this)},i.a.createElement("div",{className:"modalBody",onClick:this.props.infoClickHandler}),i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"topBar"},i.a.createElement("h2",{id:"projName"},P.haccInfo.title),i.a.createElement("span",{onClick:this.props.infoClickHandler,className:"close"},i.a.createElement("p",null,"\xd7"))),i.a.createElement("div",{className:"midModal"},i.a.createElement("div",{id:"topAnchor",className:"contentContainer"},i.a.createElement("div",{className:"modalProjectImage",style:this.mainImgBg}),i.a.createElement("p",{className:"modalDescription"},P.haccInfo.description)),i.a.createElement("div",{className:"bottomBar"},i.a.createElement("div",{className:"modalSwitchContainer"},i.a.createElement("div",{className:"previousSwitch",onClick:this.props.modalContentHandler.bind(this,"previous",this.state.previous)},i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.c})),i.a.createElement("p",null,"Previous")),i.a.createElement("div",{className:"backTopSwitch"},i.a.createElement("a",{href:"#topAnchor"},i.a.createElement(v.a,{icon:f.a}))),i.a.createElement("div",{className:"nextSwitch",onClick:this.props.modalContentHandler.bind(this,"next",this.state.next)},i.a.createElement("p",null,"Next"),i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.d}))))))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={previous:"haccEdu",next:"marvelApi"},a.keyEventHandler=function(e){var t=(e=e||window.event).which||e.keyCode;37==t?(a.props.modalContentHandler("previous",a.state.previous),console.log("test")):39==t&&a.props.modalContentHandler("next",a.state.next)},a.mainImgBg={backgroundImage:"url(".concat(P.bluePlanetInfo.mainImg,")")},a.secondImgBg={backgroundImage:"url(".concat(P.bluePlanetInfo.mainImg,")")},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{tabIndex:"0",id:"myModal",className:"modal",onKeyDown:this.keyEventHandler.bind(this)},i.a.createElement("div",{className:"modalBody",onClick:this.props.infoClickHandler}),i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"topBar"},i.a.createElement("h2",{id:"projName"},P.bluePlanetInfo.title),i.a.createElement("span",{onClick:this.props.infoClickHandler,className:"close"},i.a.createElement("p",null,"\xd7"))),i.a.createElement("div",{className:"midModal"},i.a.createElement("div",{id:"topAnchor",className:"contentContainer"},i.a.createElement("div",{className:"modalProjectImage",style:this.mainImgBg}),i.a.createElement("p",{className:"modalDescription"},P.bluePlanetInfo.description)),i.a.createElement("div",{className:"bottomBar"},i.a.createElement("div",{className:"modalSwitchContainer"},i.a.createElement("div",{className:"previousSwitch",onClick:this.props.modalContentHandler.bind(this,"previous",this.state.previous)},i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.c})),i.a.createElement("p",null,"Previous")),i.a.createElement("div",{className:"backTopSwitch"},i.a.createElement("a",{href:"#topAnchor"},i.a.createElement(v.a,{icon:f.a}))),i.a.createElement("div",{className:"nextSwitch",onClick:this.props.modalContentHandler.bind(this,"next",this.state.next)},i.a.createElement("p",null,"Next"),i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.d}))))))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={previous:"bluePlanet",next:"hackSea"},a.keyEventHandler=function(e){var t=(e=e||window.event).which||e.keyCode;37==t?(a.props.modalContentHandler("previous",a.state.previous),console.log("test")):39==t&&a.props.modalContentHandler("next",a.state.next)},a.mainImgBg={backgroundImage:"url(".concat(P.marvelApiInfo.mainImg,")")},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{tabIndex:"0",id:"myModal",className:"modal",onKeyDown:this.keyEventHandler.bind(this)},i.a.createElement("div",{className:"modalBody",onClick:this.props.infoClickHandler}),i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"topBar"},i.a.createElement("h2",{id:"projName"},P.marvelApiInfo.title),i.a.createElement("span",{onClick:this.props.infoClickHandler,className:"close"},i.a.createElement("p",null,"\xd7"))),i.a.createElement("div",{className:"midModal"},i.a.createElement("div",{id:"topAnchor",className:"contentContainer"},i.a.createElement("div",{className:"modalProjectImage",style:this.mainImgBg}),i.a.createElement("p",{className:"modalDescription"},P.marvelApiInfo.description)),i.a.createElement("div",{className:"bottomBar"},i.a.createElement("div",{className:"modalSwitchContainer"},i.a.createElement("div",{className:"previousSwitch",onClick:this.props.modalContentHandler.bind(this,"previous",this.state.previous)},i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.c})),i.a.createElement("p",null,"Previous")),i.a.createElement("div",{className:"backTopSwitch"},i.a.createElement("a",{href:"#topAnchor"},i.a.createElement(v.a,{icon:f.a}))),i.a.createElement("div",{className:"nextSwitch",onClick:this.props.modalContentHandler.bind(this,"next",this.state.next)},i.a.createElement("p",null,"Next"),i.a.createElement("div",{className:"buttonArrowIcon"},i.a.createElement(v.a,{icon:f.d}))))))))}}]),t}(n.Component),D=(n.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={modalOpen:null,changeProj:!1,projectParent:null},a.modalContentHandler=function(e,t){"previous"===e?(console.log("previous",t),a.setState({projectParent:t})):"next"===e&&(console.log("next",t),a.setState({projectParent:t}))},a.infoClickHandler=function(){a.setState({modalOpen:!a.state.modalOpen,projectParent:a.props.project})},a.state={projectParent:e.project},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return!0===this.state.modalOpen&&"hackSea"===this.state.projectParent?i.a.createElement("div",null,i.a.createElement("div",{className:"moreInfoButton"},i.a.createElement("a",{className:"infoButtonA",target:"_blank",onClick:this.infoClickHandler},"More info"),i.a.createElement(x,{infoClickHandler:this.infoClickHandler,modalContentHandler:this.modalContentHandler}))):!0===this.state.modalOpen&&"haccEdu"===this.state.projectParent?i.a.createElement("div",null,i.a.createElement("div",{className:"moreInfoButton"},i.a.createElement("a",{className:"infoButtonA",target:"_blank",onClick:this.infoClickHandler},"More info"),i.a.createElement(B,{infoClickHandler:this.infoClickHandler,modalContentHandler:this.modalContentHandler}))):!0===this.state.modalOpen&&"bluePlanet"===this.state.projectParent?i.a.createElement("div",null,i.a.createElement("div",{className:"moreInfoButton"},i.a.createElement("a",{className:"infoButtonA",target:"_blank",onClick:this.infoClickHandler},"More info"),i.a.createElement(M,{infoClickHandler:this.infoClickHandler,modalContentHandler:this.modalContentHandler}))):!0===this.state.modalOpen&&"marvelApi"===this.state.projectParent?i.a.createElement("div",null,i.a.createElement("div",{className:"moreInfoButton"},i.a.createElement("a",{className:"infoButtonA",target:"_blank",onClick:this.infoClickHandler},"More info"),i.a.createElement(T,{infoClickHandler:this.infoClickHandler,modalContentHandler:this.modalContentHandler}))):i.a.createElement("div",null,i.a.createElement("div",{className:"moreInfoButton"},i.a.createElement("a",{className:"infoButtonA",target:"_blank",onClick:this.infoClickHandler},"More info")))}}]),t}(n.Component)),W=function(e){var t={backgroundImage:"url(".concat(e.image,")")};return i.a.createElement("div",{className:"projectGridItem"},i.a.createElement("div",{className:"projectImage",style:t}),i.a.createElement("div",{className:"projectTitle"},i.a.createElement("h2",null,e.title)),i.a.createElement("div",{className:"projectDesc"},i.a.createElement("p",null,e.desc)),i.a.createElement("div",{className:"buttonGrid"},i.a.createElement("div",{className:"visitSiteButton"},i.a.createElement("a",{href:e.hrefSite,target:"_blank"},"Visit Site")),i.a.createElement("div",{className:"visitGithubButton"},i.a.createElement("a",{href:e.hrefGit,target:"_blank"},"Visit Github")),e.title===P.hackSeaInfo.title?i.a.createElement("div",null,i.a.createElement(D,{project:"hackSea"})):e.title===P.haccInfo.title?i.a.createElement("div",null,i.a.createElement(D,{project:"haccEdu"})):e.title===P.bluePlanetInfo.title?i.a.createElement("div",null,i.a.createElement(D,{project:"bluePlanet"})):e.title===P.marvelApiInfo.title?i.a.createElement("div",null,i.a.createElement(D,{project:"marvelApi"})):null))},G=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"projectsContainer"},i.a.createElement("h1",{id:"t"},"Projects"),i.a.createElement("div",{id:"projectGridContainer"},i.a.createElement(W,{title:P.hackSeaInfo.title,desc:P.hackSeaInfo.description,image:P.hackSeaInfo.mainImg,hrefSite:P.hackSeaInfo.urls.site,hrefGit:P.hackSeaInfo.urls.gitHub,modalClick:"hackSea"}),i.a.createElement(W,{title:P.haccInfo.title,desc:P.haccInfo.description,image:P.haccInfo.mainImg,hrefSite:P.haccInfo.urls.site,hrefGit:P.haccInfo.urls.gitHub}),i.a.createElement(W,{title:P.bluePlanetInfo.title,desc:P.bluePlanetInfo.description,image:P.bluePlanetInfo.mainImg,hrefSite:P.bluePlanetInfo.urls.site,hrefGit:P.bluePlanetInfo.urls.gitHub}),i.a.createElement(W,{title:P.marvelApiInfo.title,desc:P.marvelApiInfo.description,image:P.marvelApiInfo.mainImg,hrefSite:P.marvelApiInfo.urls.site,hrefGit:P.marvelApiInfo.urls.gitHub})))}}]),t}(n.Component),_=(a(37),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null),i.a.createElement(G,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,2,1]]]);
//# sourceMappingURL=main.9a0097ee.chunk.js.map