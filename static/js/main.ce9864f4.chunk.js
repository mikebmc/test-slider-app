(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),l=(n(14),n(2)),s=n(3),u=n(5),c=n(4),m=n(6),h=(n(16),n(1)),d=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){o.a.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"===typeof t.type&&(t=i.a.cloneElement(t)),o.a.render(t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(i.a.Component),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).segmentLabels=["zeroths","whole","halves","thirds","fourths","fifths","sixths","sevenths","eighths","ninths","tenths"],n.state={iwidth:window.innerWidth,iheight:window.innerHeight,width:window.innerWidth-100,height:400,numberlines:[{numberOfSegments:4,value:4,numberOfSegmentsLabel:n.segmentLabels[4]},{numberOfSegments:5,value:5,numberOfSegmentsLabel:n.segmentLabels[5]}]},n.updateWindowDimensions=n.updateWindowDimensions,n.componentDidMount=function(){n.updateWindowDimensions()},n.updateWindowDimensions=function(){n.setState({iwidth:window.innerWidth,iheight:window.innerHeight,width:window.innerWidth-100})},n.sliderHandlerTop=function(e){var t=e.target.value;n.setState({numberlines:[{numberOfSegments:t,value:t,numberOfSegmentsLabel:n.segmentLabels[t]},{numberOfSegments:5,value:5,numberOfSegmentsLabel:n.segmentLabels[5]}]})},n.sliderHandlerBottom=function(e){var t=e.target.value;n.setState({numberlines:[{numberOfSegments:4,value:4,numberOfSegmentsLabel:n.segmentLabels[4]},{numberOfSegments:t,value:t,numberOfSegmentsLabel:n.segmentLabels[t]}]})},n.answerHandlerYes=function(e){console.log(n.state)},n.answerHandlerNo=function(e){console.log("No")},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h.Stage,{ref:function(t){e.stage=t},width:this.state.width-100,height:this.state.height},i.a.createElement(h.Layer,null,i.a.createElement(h.Rect,{width:this.state.width-300,height:this.state.height,x:200,cornerRadius:45,stroke:"cornflowerblue",strokeWidth:4})),i.a.createElement(h.Layer,null,i.a.createElement(b,{x:this.state.width/2-300,y:100,fraction:"1/4",value:this.state.numberlines[0].value,name:"fourths",numberOfSegments:this.state.numberlines[0].numberOfSegments,numberOfSegmentsLabel:this.state.numberlines[0].numberOfSegmentsLabel,changed:this.sliderHandlerTop}),i.a.createElement(b,{x:this.state.width/2-300,y:200,fraction:"1/5",value:this.state.numberlines[1].value,name:"fifths",numberOfSegments:this.state.numberlines[1].numberOfSegments,numberOfSegmentsLabel:this.state.numberlines[1].numberOfSegmentsLabel,changed:this.sliderHandlerBottom})),i.a.createElement(h.Layer,null,i.a.createElement(E,{title:"Yes",changed:this.answerHandlerYes,x:this.state.width-270,y:this.state.height-70}),i.a.createElement(E,{title:"No",changed:this.answerHandlerNo,x:this.state.width-200,y:this.state.height-70})))}}]),t}(a.Component),b=function(e){var t={left:e.x+235,top:e.y+180,position:"absolute"};return i.a.createElement(h.Group,{x:e.x,y:e.y,height:200},i.a.createElement(g,{fraction:e.fraction}),i.a.createElement(p,null),i.a.createElement(w,null),i.a.createElement(v,{numberOfSegments:e.numberOfSegments}),i.a.createElement(O,{numberOfSegments:e.numberOfSegments}),i.a.createElement(y,null),i.a.createElement(k,{numberOfSegmentsLabel:e.numberOfSegmentsLabel}),i.a.createElement(d,null,i.a.createElement("input",{style:t,className:"numberline-slider",type:"range",name:e.name,min:1,max:10,step:1,onChange:e.changed,defaultValue:e.value})))},g=function(e){return i.a.createElement(h.Text,{align:"center",width:50,fontFamily:"Helvetica Neue",fontSize:28,text:e.fraction,stroke:"grey",strokeWidth:1,x:-75,y:7})},p=function(){return i.a.createElement(h.Rect,{height:200,width:600})},w=function(){return i.a.createElement(h.Arrow,{points:[0,20,600,20],stroke:"black",strokeWidth:5,pointerAtBeginning:"true"})},y=function(){return i.a.createElement(h.Line,{sceneFunc:function(e){e.beginPath(),e.strokeStyle="black",e.lineWidth=3,e.moveTo(30,5),e.lineTo(30,35),e.fill(),e.stroke(),e.beginPath(),e.strokeStyle="black",e.lineWidth=3,e.moveTo(570,5),e.lineTo(570,35),e.font="20px Helvetica Neue",e.fillText(0,25,55),e.fillText(1,565,55),e.fill(),e.stroke()}})},v=function(e){var t=540/e.numberOfSegments;return i.a.createElement(h.Line,{sceneFunc:function(e){for(var n=t+30;n<=570-t;n+=t)e.beginPath(),e.strokeStyle="black",e.lineWidth=3,e.moveTo(n,10),e.lineTo(n,30),e.fill(),e.stroke()}})},O=function(e){return i.a.createElement(h.Rect,null)},k=function(e){return i.a.createElement(h.Text,{align:"center",width:150,fontFamily:"Helvetica Neue",fontSize:28,text:e.numberOfSegmentsLabel,stroke:"grey",strokeWidth:1,x:225,y:45})},E=function(e){return i.a.createElement(h.Group,null,i.a.createElement(h.Rect,{fill:"#dddddd",width:60,height:40,x:e.x,y:e.y,cornerRadius:5,stroke:"cornflowerblue",strokeWidth:2}),i.a.createElement(h.Text,{align:"center",width:60,fontFamily:"Helvetica Neue",fontSize:28,text:e.title,stroke:"black",strokeWidth:1,x:e.x,y:e.y+5,onClick:e.changed}))},S=f,x=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"problem-description"},i.a.createElement("h1",{id:"problem-title"},"Comparison"),i.a.createElement("p",{id:"problem-description"},"Mark says 1/4 of his candy bar is smaller than 1/5 of the same candy bar. Is Mark right? Yes or No. Draw a picture or use words to explain why you think Mark is right or wrong.")),i.a.createElement(S,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(27)}},[[9,2,1]]]);
//# sourceMappingURL=main.ce9864f4.chunk.js.map