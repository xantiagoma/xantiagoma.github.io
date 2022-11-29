import{R as L,r as et}from"./chunks/index.8a81b5de.js";import{u as _t,t as Mt,j as U}from"./chunks/jsx-runtime.bb771748.js";function r(u,c,d){return c in u?Object.defineProperty(u,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[c]=d,u}function wt(u,c){u.prototype=Object.create(c.prototype),u.prototype.constructor=u,K(u,c)}function K(u,c){return K=Object.setPrototypeOf||function(g,l){return g.__proto__=l,g},K(u,c)}function o(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function St(u,c){var d;return function(){for(var g=arguments.length,l=new Array(g),f=0;f<g;f++)l[f]=arguments[f];var w=this;clearTimeout(d),d=setTimeout(function(){return u.apply(w,l)},c)}}function $(u,c){for(;u;){if(u.classList&&u.classList.contains(c))return!0;u=u.parentElement}return!1}function nt(u){var c=u.getBoundingClientRect();return{x:c.left,y:c.top}}function xt(u,c,d){var g=String.fromCharCode(97+(u+c+d)%3);return"https://"+g+".tile.openstreetmap.org/"+d+"/"+u+"/"+c+".png"}var V=300,Tt=1500,Et=150,bt=40,j=2,Q=300,Ct=60,Zt=300,Dt=300,y=function(){return!0},Y=function(c,d){return(c+180)/360*Math.pow(2,d)},N=function(c,d){return(1-Math.log(Math.tan(c*Math.PI/180)+1/Math.cos(c*Math.PI/180))/Math.PI)/2*Math.pow(2,d)};function z(u,c){return u/Math.pow(2,c)*360-180}function R(u,c){var d=Math.PI-2*Math.PI*u/Math.pow(2,c);return 180/Math.PI*Math.atan(.5*(Math.exp(d)-Math.exp(-d)))}function A(u,c){var d=nt(u);return[c.clientX-d.x,c.clientY-d.y]}function Lt(u){return u*(2-u)}var H=[R(Math.pow(2,10),10),R(0,10),z(0,10),z(Math.pow(2,10),10)],G=typeof window<"u",W=G&&window.performance&&window.performance.now?function(){return window.performance.now()}:function(){var u=new Date().getTime();return function(){return new Date().getTime()-u}}(),q=function(c){return G?(window.requestAnimationFrame||window.setTimeout)(c):(c(new Date().getTime()),null)},J=function(c){return G&&c?(window.cancelAnimationFrame||window.clearTimeout)(c):!1};function tt(u,c,d,g,l){return!u||u.length===0?"":u.map(function(f){return c(d,g,l,f)+(f===1?"":" "+f+"x")}).join(", ")}var At=function(c){var d=c.tile,g=c.tileLoaded;return L.createElement("img",{src:d.url,srcSet:d.srcSet,width:d.width,height:d.height,loading:"lazy",onLoad:g,alt:"",style:{position:"absolute",left:d.left,top:d.top,willChange:"transform",transformOrigin:"top left",opacity:1}})},at=function(u){wt(c,u);function c(g){var l,f,w,x,M,b,T,_,t;return t=u.call(this,g)||this,r(o(t),"_containerRef",void 0),r(o(t),"_mousePosition",void 0),r(o(t),"_loadTracker",void 0),r(o(t),"_dragStart",null),r(o(t),"_mouseDown",!1),r(o(t),"_moveEvents",[]),r(o(t),"_lastClick",null),r(o(t),"_lastTap",null),r(o(t),"_lastWheel",null),r(o(t),"_touchStartPixel",null),r(o(t),"_touchStartMidPoint",null),r(o(t),"_touchStartDistance",null),r(o(t),"_secondTouchEnd",null),r(o(t),"_warningClearTimeout",null),r(o(t),"_isAnimating",!1),r(o(t),"_animationStart",null),r(o(t),"_animationEnd",null),r(o(t),"_zoomStart",null),r(o(t),"_centerTarget",null),r(o(t),"_zoomTarget",null),r(o(t),"_zoomAround",null),r(o(t),"_animFrame",null),r(o(t),"_boundsSynced",!1),r(o(t),"_minMaxCache",null),r(o(t),"_lastZoom",void 0),r(o(t),"_lastCenter",void 0),r(o(t),"_centerStart",void 0),r(o(t),"_resizeObserver",null),r(o(t),"updateWidthHeight",function(){if(t._containerRef){var e=t._containerRef.getBoundingClientRect();if(e&&e.width>0&&e.height>0)return t.setState({width:e.width,height:e.height}),!0}return!1}),r(o(t),"wa",function(){var e;return(e=window).addEventListener.apply(e,arguments)}),r(o(t),"wr",function(){var e;return(e=window).removeEventListener.apply(e,arguments)}),r(o(t),"bindMouseEvents",function(){t.wa("mousedown",t.handleMouseDown),t.wa("mouseup",t.handleMouseUp),t.wa("mousemove",t.handleMouseMove)}),r(o(t),"bindTouchEvents",function(){t.wa("touchstart",t.handleTouchStart,{passive:!1}),t.wa("touchmove",t.handleTouchMove,{passive:!1}),t.wa("touchend",t.handleTouchEnd,{passive:!1})}),r(o(t),"unbindMouseEvents",function(){t.wr("mousedown",t.handleMouseDown),t.wr("mouseup",t.handleMouseUp),t.wr("mousemove",t.handleMouseMove)}),r(o(t),"unbindTouchEvents",function(){t.wr("touchstart",t.handleTouchStart),t.wr("touchmove",t.handleTouchMove),t.wr("touchend",t.handleTouchEnd)}),r(o(t),"bindResizeEvent",function(){t.wa("resize",t.updateWidthHeight)}),r(o(t),"unbindResizeEvent",function(){t.wr("resize",t.updateWidthHeight)}),r(o(t),"bindWheelEvent",function(){t._containerRef&&t._containerRef.addEventListener("wheel",t.handleWheel,{passive:!1})}),r(o(t),"unbindWheelEvent",function(){t._containerRef&&t._containerRef.removeEventListener("wheel",t.handleWheel)}),r(o(t),"setCenterZoomTarget",function(e,n,a,i,s){if(a===void 0&&(a=!1),i===void 0&&(i=null),s===void 0&&(s=V),t.props.animate&&(!a||t.distanceInScreens(e,n,t.state.center,t.state.zoom)<=t.props.animateMaxScreens)){if(t._isAnimating){J(t._animFrame);var h=t.animationStep(W()),m=h.centerStep,v=h.zoomStep;t._centerStart=m,t._zoomStart=v}else t._isAnimating=!0,t._centerStart=t.limitCenterAtZoom([t._lastCenter[0],t._lastCenter[1]],t._lastZoom),t._zoomStart=t._lastZoom,t.onAnimationStart();t._animationStart=W(),t._animationEnd=t._animationStart+s,i?(t._zoomAround=i,t._centerTarget=t.calculateZoomCenter(t._lastCenter,i,t._lastZoom,n)):(t._zoomAround=null,t._centerTarget=e),t._zoomTarget=n,t._animFrame=q(t.animate)}else if(t.stopAnimating(),i){var p=t.calculateZoomCenter(t._lastCenter,i,t._lastZoom,n);t.setCenterZoom(p,n,a)}else t.setCenterZoom(e||t.state.center,n,a)}),r(o(t),"setCenterZoomForChildren",function(e,n){t.setCenterZoomTarget(e||t.state.center,n||t.state.zoom,!0)}),r(o(t),"distanceInScreens",function(e,n,a,i){var s=t.state,h=s.width,m=s.height,v=t.latLngToPixel(a,a,i),p=t.latLngToPixel(e,a,i),S=t.latLngToPixel(a,a,n),C=t.latLngToPixel(e,a,n),E=(Math.abs(v[0]-p[0])+Math.abs(S[0]-C[0]))/2/h,D=(Math.abs(v[1]-p[1])+Math.abs(S[1]-C[1]))/2/m;return Math.sqrt(E*E+D*D)}),r(o(t),"animationStep",function(e){if(!t._animationEnd||!t._animationStart||!t._zoomTarget||!t._zoomStart||!t._centerStart||!t._centerTarget)return{centerStep:t.state.center,zoomStep:t.state.zoom};var n=t._animationEnd-t._animationStart,a=Math.max(e-t._animationStart,0),i=Lt(a/n),s=(t._zoomTarget-t._zoomStart)*i,h=t._zoomStart+s;if(t._zoomAround){var m=t.calculateZoomCenter(t._centerStart,t._zoomAround,t._zoomStart,h);return{centerStep:m,zoomStep:h}}else{var v=[t._centerStart[0]+(t._centerTarget[0]-t._centerStart[0])*i,t._centerStart[1]+(t._centerTarget[1]-t._centerStart[1])*i];return{centerStep:v,zoomStep:h}}}),r(o(t),"animate",function(e){if(!t._animationEnd||e>=t._animationEnd)t._isAnimating=!1,t.setCenterZoom(t._centerTarget,t._zoomTarget,!0),t.onAnimationStop();else{var n=t.animationStep(e),a=n.centerStep,i=n.zoomStep;t.setCenterZoom(a,i),t._animFrame=q(t.animate)}}),r(o(t),"stopAnimating",function(){t._isAnimating&&(t._isAnimating=!1,t.onAnimationStop(),J(t._animFrame))}),r(o(t),"limitCenterAtZoom",function(e,n){var a=t.getBoundsMinMax(n||t.state.zoom);return[Math.max(Math.min(!e||isNaN(e[0])?t.state.center[0]:e[0],a[1]),a[0]),Math.max(Math.min(!e||isNaN(e[1])?t.state.center[1]:e[1],a[3]),a[2])]}),r(o(t),"onAnimationStart",function(){t.props.onAnimationStart&&t.props.onAnimationStart()}),r(o(t),"onAnimationStop",function(){t.props.onAnimationStop&&t.props.onAnimationStop()}),r(o(t),"setCenterZoom",function(e,n,a){a===void 0&&(a=!1);var i=t.limitCenterAtZoom(e,n);if(n&&Math.round(t.state.zoom)!==Math.round(n)){var s=t.tileValues(t.state),h=t.tileValues({center:i,zoom:n,width:t.state.width,height:t.state.height}),m=t.state.oldTiles;t.setState({oldTiles:m.filter(function(Z){return Z.roundedZoom!==s.roundedZoom}).concat(s)},y);for(var v={},p=h.tileMinX;p<=h.tileMaxX;p++)for(var S=h.tileMinY;S<=h.tileMaxY;S++){var C=p+"-"+S+"-"+h.roundedZoom;v[C]=!1}t._loadTracker=v}t.setState({center:i,zoom:n||t.state.zoom},y);var E=t.props.zoom?t.props.zoom:t._lastZoom,D=t.props.center?t.props.center:t._lastCenter;n&&(a||Math.abs(E-n)>.001||Math.abs(D[0]-i[0])>1e-5||Math.abs(D[1]-i[1])>1e-5)&&(t._lastZoom=n,t._lastCenter=[].concat(i),t.syncToProps(i,n))}),r(o(t),"getBoundsMinMax",function(e){if(t.props.limitBounds==="center")return H;var n=t.state,a=n.width,i=n.height;if(t._minMaxCache&&t._minMaxCache[0]===e&&t._minMaxCache[1]===a&&t._minMaxCache[2]===i)return t._minMaxCache[3];var s=Math.pow(2,e)*256,h=a>s?0:z(a/512,e),m=i>s?0:R(Math.pow(2,e)-i/512,e),v=a>s?0:z(Math.pow(2,e)-a/512,e),p=i>s?0:R(i/512,e),S=[m,p,h,v];return t._minMaxCache=[e,a,i,S],S}),r(o(t),"tileLoaded",function(e){if(t._loadTracker&&e in t._loadTracker){t._loadTracker[e]=!0;var n=Object.values(t._loadTracker).filter(function(a){return!a}).length;n===0&&t.setState({oldTiles:[]},y)}}),r(o(t),"handleTouchStart",function(e){if(!!t._containerRef&&!(e.target&&$(e.target,"pigeon-drag-block"))){if(e.touches.length===1){var n=e.touches[0],a=A(t._containerRef,n);if(t.coordsInside(a)&&(t._touchStartPixel=[a],!t.props.twoFingerDrag))if(t.stopAnimating(),t._lastTap&&W()-t._lastTap<Q){e.preventDefault();var i=t.pixelToLatLng(t._touchStartPixel[0]);t.setCenterZoomTarget(null,Math.max(t.props.minZoom,Math.min(t.state.zoom+1,t.props.maxZoom)),!1,i)}else t._lastTap=W(),t.trackMoveEvents(a)}else if(e.touches.length===2&&t._touchStartPixel){e.preventDefault(),t.stopTrackingMoveEvents(),(t.state.pixelDelta||t.state.zoomDelta)&&t.sendDeltaChange();var s=A(t._containerRef,e.touches[0]),h=A(t._containerRef,e.touches[1]);t._touchStartPixel=[s,h],t._touchStartMidPoint=[(s[0]+h[0])/2,(s[1]+h[1])/2],t._touchStartDistance=Math.sqrt(Math.pow(s[0]-h[0],2)+Math.pow(s[1]-h[1],2))}}}),r(o(t),"handleTouchMove",function(e){if(!t._containerRef){t._touchStartPixel=null;return}if(e.touches.length===1&&t._touchStartPixel){var n=e.touches[0],a=A(t._containerRef,n);t.props.twoFingerDrag?t.coordsInside(a)&&t.showWarning("fingers"):(e.preventDefault(),t.trackMoveEvents(a),t.setState({pixelDelta:[a[0]-t._touchStartPixel[0][0],a[1]-t._touchStartPixel[0][1]]},y))}else if(e.touches.length===2&&t._touchStartPixel&&t._touchStartMidPoint&&t._touchStartDistance){var i=t.state,s=i.width,h=i.height,m=i.zoom;e.preventDefault();var v=A(t._containerRef,e.touches[0]),p=A(t._containerRef,e.touches[1]),S=[(v[0]+p[0])/2,(v[1]+p[1])/2],C=[S[0]-t._touchStartMidPoint[0],S[1]-t._touchStartMidPoint[1]],E=Math.sqrt(Math.pow(v[0]-p[0],2)+Math.pow(v[1]-p[1],2)),D=Math.max(t.props.minZoom,Math.min(t.props.maxZoom,m+Math.log2(E/t._touchStartDistance)))-m,Z=Math.pow(2,D),P=[(s/2-S[0])*(Z-1),(h/2-S[1])*(Z-1)];t.setState({zoomDelta:D,pixelDelta:[P[0]+C[0]*Z,P[1]+C[1]*Z]},y)}}),r(o(t),"handleTouchEnd",function(e){if(!t._containerRef){t._touchStartPixel=null;return}if(t._touchStartPixel){var n=t.props,a=n.zoomSnap,i=n.twoFingerDrag,s=n.minZoom,h=n.maxZoom,m=t.state.zoomDelta,v=t.sendDeltaChange(),p=v.center,S=v.zoom;if(e.touches.length===0)if(i)t.clearWarning();else{var C=t._touchStartPixel[0],E=A(t._containerRef,e.changedTouches[0]);(Math.abs(C[0]-E[0])>j||Math.abs(C[1]-E[1])>j)&&(!t._secondTouchEnd||W()-t._secondTouchEnd>Zt)&&(e.preventDefault(),t.throwAfterMoving(E,p,S)),t._touchStartPixel=null,t._secondTouchEnd=null}else if(e.touches.length===1){e.preventDefault();var D=A(t._containerRef,e.touches[0]);if(t._secondTouchEnd=W(),t._touchStartPixel=[D],t.trackMoveEvents(D),a){var Z=t._touchStartMidPoint?t.pixelToLatLng(t._touchStartMidPoint):t.state.center,P;i&&Math.round(t.state.zoom)===Math.round(t.state.zoom+m)?P=Math.round(t.state.zoom):P=m>0?Math.ceil(t.state.zoom):Math.floor(t.state.zoom);var X=Math.max(s,Math.min(P,h));t.setCenterZoomTarget(Z,X,!1,Z)}}}}),r(o(t),"handleMouseDown",function(e){if(!!t._containerRef){var n=A(t._containerRef,e);if(e.button===0&&(!e.target||!$(e.target,"pigeon-drag-block"))&&t.coordsInside(n))if(t.stopAnimating(),e.preventDefault(),t._lastClick&&W()-t._lastClick<Q){if(!$(e.target,"pigeon-click-block")){var a=t.pixelToLatLng(t._mousePosition||n);t.setCenterZoomTarget(null,Math.max(t.props.minZoom,Math.min(t.state.zoom+1,t.props.maxZoom)),!1,a)}}else t._lastClick=W(),t._mouseDown=!0,t._dragStart=n,t.trackMoveEvents(n)}}),r(o(t),"handleMouseMove",function(e){!t._containerRef||(t._mousePosition=A(t._containerRef,e),t._mouseDown&&t._dragStart&&(t.trackMoveEvents(t._mousePosition),t.setState({pixelDelta:[t._mousePosition[0]-t._dragStart[0],t._mousePosition[1]-t._dragStart[1]]},y)))}),r(o(t),"handleMouseUp",function(e){if(!t._containerRef){t._mouseDown=!1;return}var n=t.state.pixelDelta;if(t._mouseDown){t._mouseDown=!1;var a=A(t._containerRef,e);if(t.props.onClick&&(!e.target||!$(e.target,"pigeon-click-block"))&&(!n||Math.abs(n[0])+Math.abs(n[1])<=j)){var i=t.pixelToLatLng(a);t.props.onClick({event:e,latLng:i,pixel:a}),t.setState({pixelDelta:void 0},y)}else{var s=t.sendDeltaChange(),h=s.center,m=s.zoom;t.throwAfterMoving(a,h,m)}}}),r(o(t),"stopTrackingMoveEvents",function(){t._moveEvents=[]}),r(o(t),"trackMoveEvents",function(e){var n=W();(t._moveEvents.length===0||n-t._moveEvents[t._moveEvents.length-1].timestamp>40)&&(t._moveEvents.push({timestamp:n,coords:e}),t._moveEvents.length>2&&t._moveEvents.shift())}),r(o(t),"throwAfterMoving",function(e,n,a){var i=t.state,s=i.width,h=i.height,m=t.props.animate,v=W(),p=t._moveEvents.shift();if(p&&m){var S=Math.max(v-p.timestamp,1),C=[(e[0]-p.coords[0])/S*120,(e[1]-p.coords[1])/S*120],E=Math.sqrt(C[0]*C[0]+C[1]*C[1]);if(E>bt){var D=Math.sqrt(s*s+h*h),Z=Tt*E/D,P=z(Y(n[1],a)-C[0]/256,a),X=R(N(n[0],a)-C[1]/256,a);t.setCenterZoomTarget([X,P],a,!1,null,Z)}}t.stopTrackingMoveEvents()}),r(o(t),"sendDeltaChange",function(){var e=t.state,n=e.center,a=e.zoom,i=e.pixelDelta,s=e.zoomDelta,h=n[0],m=n[1];return(i||s!==0)&&(m=z(Y(n[1],a+s)-(i?i[0]/256:0),a+s),h=R(N(n[0],a+s)-(i?i[1]/256:0),a+s),t.setCenterZoom([h,m],a+s)),t.setState({pixelDelta:void 0,zoomDelta:0},y),{center:t.limitCenterAtZoom([h,m],a+s),zoom:a+s}}),r(o(t),"getBounds",function(e,n){e===void 0&&(e=t.state.center),n===void 0&&(n=t.zoomPlusDelta());var a=t.state,i=a.width,s=a.height;return{ne:t.pixelToLatLng([i-1,0],e,n),sw:t.pixelToLatLng([0,s-1],e,n)}}),r(o(t),"syncToProps",function(e,n){e===void 0&&(e=t.state.center),n===void 0&&(n=t.state.zoom);var a=t.props.onBoundsChanged;if(a){var i=t.getBounds(e,n);a({center:e,zoom:n,bounds:i,initial:!t._boundsSynced}),t._boundsSynced=!0}}),r(o(t),"handleWheel",function(e){var n=t.props,a=n.mouseEvents,i=n.metaWheelZoom,s=n.zoomSnap,h=n.animate;if(!!a)if(!i||e.metaKey||e.ctrlKey){e.preventDefault();var m=-e.deltaY/Et;if(!s&&t._zoomTarget){var v=t._zoomTarget-t.state.zoom;t.zoomAroundMouse(m+v,e)}else h?t.zoomAroundMouse(m,e):(!t._lastWheel||W()-t._lastWheel>V)&&(t._lastWheel=W(),t.zoomAroundMouse(m,e))}else t.showWarning("wheel")}),r(o(t),"showWarning",function(e){(!t.state.showWarning||t.state.warningType!==e)&&t.setState({showWarning:!0,warningType:e}),t._warningClearTimeout&&window.clearTimeout(t._warningClearTimeout),t._warningClearTimeout=window.setTimeout(t.clearWarning,Dt)}),r(o(t),"clearWarning",function(){t.state.showWarning&&t.setState({showWarning:!1})}),r(o(t),"zoomAroundMouse",function(e,n){if(!!t._containerRef){var a=t.state.zoom,i=t.props,s=i.minZoom,h=i.maxZoom,m=i.zoomSnap;if(t._mousePosition=A(t._containerRef,n),!(!t._mousePosition||a===s&&e<0||a===h&&e>0)){var v=t.pixelToLatLng(t._mousePosition),p=a+e;m&&(p=e<0?Math.floor(p):Math.ceil(p)),p=Math.max(s,Math.min(p,h)),t.setCenterZoomTarget(null,p,!1,v)}}}),r(o(t),"zoomPlusDelta",function(){return t.state.zoom+t.state.zoomDelta}),r(o(t),"pixelToLatLng",function(e,n,a){n===void 0&&(n=t.state.center),a===void 0&&(a=t.zoomPlusDelta());var i=t.state,s=i.width,h=i.height,m=i.pixelDelta,v=[(e[0]-s/2-(m?m[0]:0))/256,(e[1]-h/2-(m?m[1]:0))/256],p=Y(n[1],a)+v[0],S=N(n[0],a)+v[1];return[Math.max(H[0],Math.min(H[1],R(S,a))),Math.max(H[2],Math.min(H[3],z(p,a)))]}),r(o(t),"latLngToPixel",function(e,n,a){n===void 0&&(n=t.state.center),a===void 0&&(a=t.zoomPlusDelta());var i=t.state,s=i.width,h=i.height,m=i.pixelDelta,v=Y(n[1],a),p=N(n[0],a),S=Y(e[1],a),C=N(e[0],a);return[(S-v)*256+s/2+(m?m[0]:0),(C-p)*256+h/2+(m?m[1]:0)]}),r(o(t),"calculateZoomCenter",function(e,n,a,i){var s=t.state,h=s.width,m=s.height,v=t.latLngToPixel(n,e,a),p=t.latLngToPixel(n,e,i),S=t.pixelToLatLng([h/2+p[0]-v[0],m/2+p[1]-v[1]],e,i);return t.limitCenterAtZoom(S,i)}),r(o(t),"setRef",function(e){t._containerRef=e}),t.syncToProps=St(t.syncToProps,Ct),t._lastZoom=(l=(f=g.defaultZoom)!==null&&f!==void 0?f:g.zoom)!==null&&l!==void 0?l:14,t._lastCenter=(w=(x=g.defaultCenter)!==null&&x!==void 0?x:g.center)!==null&&w!==void 0?w:[0,0],t.state={zoom:t._lastZoom,center:t._lastCenter,width:(M=(b=g.width)!==null&&b!==void 0?b:g.defaultWidth)!==null&&M!==void 0?M:-1,height:(T=(_=g.height)!==null&&_!==void 0?_:g.defaultHeight)!==null&&T!==void 0?T:-1,zoomDelta:0,pixelDelta:void 0,oldTiles:[],showWarning:!1,warningType:void 0},t}var d=c.prototype;return d.componentDidMount=function(){var l=this;this.props.mouseEvents&&this.bindMouseEvents(),this.props.touchEvents&&this.bindTouchEvents(),(!this.props.width||!this.props.height)&&(this.updateWidthHeight()||q(this.updateWidthHeight),this.bindResizeEvent()),this.bindWheelEvent(),this.syncToProps(),typeof window.ResizeObserver<"u"&&(this._resizeObserver=new window.ResizeObserver(function(){l.updateWidthHeight()}),this._resizeObserver.observe(this._containerRef))},d.componentWillUnmount=function(){this.props.mouseEvents&&this.unbindMouseEvents(),this.props.touchEvents&&this.unbindTouchEvents(),this.unbindWheelEvent(),(!this.props.width||!this.props.height)&&this.unbindResizeEvent(),this._resizeObserver&&this._resizeObserver.disconnect()},d.componentDidUpdate=function(l){var f;if(this.props.mouseEvents!==l.mouseEvents&&(this.props.mouseEvents?this.bindMouseEvents():this.unbindMouseEvents()),this.props.touchEvents!==l.touchEvents&&(this.props.touchEvents?this.bindTouchEvents():this.unbindTouchEvents()),this.props.width&&this.props.width!==l.width&&this.setState({width:this.props.width}),this.props.height&&this.props.height!==l.height&&this.setState({height:this.props.height}),!(!this.props.center&&!this.props.zoom)&&!((!this.props.center||this.props.center[0]===(l==null||(f=l.center)===null||f===void 0?void 0:f[0])&&this.props.center[1]===l.center[1])&&this.props.zoom===l.zoom)){var w=this._isAnimating?this._centerTarget:this.state.center,x=this._isAnimating?this._zoomTarget:this.state.zoom;if(w&&x){var M,b,T=(M=this.props.center)!==null&&M!==void 0?M:w,_=(b=this.props.zoom)!==null&&b!==void 0?b:x;(Math.abs(_-x)>.001||Math.abs(T[0]-w[0])>1e-4||Math.abs(T[1]-w[1])>1e-4)&&this.setCenterZoomTarget(T,_,!0)}}},d.coordsInside=function(l){var f=this.state,w=f.width,x=f.height;if(l[0]<0||l[1]<0||l[0]>=w||l[1]>=x)return!1;var M=this._containerRef;if(M){var b=nt(M),T=document.elementFromPoint(l[0]+b.x,l[1]+b.y);return M===T||M.contains(T)}else return!1},d.tileValues=function(l){var f=l.center,w=l.zoom,x=l.pixelDelta,M=l.zoomDelta,b=l.width,T=l.height,_=Math.round(w+(M||0)),t=w+(M||0)-_,e=Math.pow(2,t),n=b/e,a=T/e,i=Y(f[1],_)-(x?x[0]/256/e:0),s=N(f[0],_)-(x?x[1]/256/e:0),h=n/2/256,m=a/2/256,v=Math.floor(i-h),p=Math.floor(i+h),S=Math.floor(s-m),C=Math.floor(s+m);return{tileMinX:v,tileMaxX:p,tileMinY:S,tileMaxY:C,tileCenterX:i,tileCenterY:s,roundedZoom:_,zoomDelta:M||0,scaleWidth:n,scaleHeight:a,scale:e}},d.renderTiles=function(){for(var l=this,f=this.state,w=f.oldTiles,x=f.width,M=f.height,b=this.props.dprs,T=this.props.provider||xt,_=this.tileValues(this.state),t=_.tileMinX,e=_.tileMaxX,n=_.tileMinY,a=_.tileMaxY,i=_.tileCenterX,s=_.tileCenterY,h=_.roundedZoom,m=_.scaleWidth,v=_.scaleHeight,p=_.scale,S=[],C=0;C<w.length;C++){var E=w[C],D=E.roundedZoom-h;if(!(Math.abs(D)>4||D===0))for(var Z=1/Math.pow(2,D),P=-(t-E.tileMinX*Z)*256,X=-(n-E.tileMinY*Z)*256,it=Math.max(E.tileMinX,0),rt=Math.max(E.tileMinY,0),ot=Math.min(E.tileMaxX,Math.pow(2,E.roundedZoom)-1),st=Math.min(E.tileMaxY,Math.pow(2,E.roundedZoom)-1),O=it;O<=ot;O++)for(var k=rt;k<=st;k++)S.push({key:O+"-"+k+"-"+E.roundedZoom,url:T(O,k,E.roundedZoom),srcSet:tt(b,T,O,k,E.roundedZoom),left:P+(O-E.tileMinX)*256*Z,top:X+(k-E.tileMinY)*256*Z,width:256*Z,height:256*Z,active:!1})}for(var lt=Math.max(t,0),ht=Math.max(n,0),ut=Math.min(e,Math.pow(2,h)-1),ct=Math.min(a,Math.pow(2,h)-1),I=lt;I<=ut;I++)for(var F=ht;F<=ct;F++)S.push({key:I+"-"+F+"-"+h,url:T(I,F,h),srcSet:tt(b,T,I,F,h),left:(I-t)*256,top:(F-n)*256,width:256,height:256,active:!0});var mt={width:m,height:v,position:"absolute",top:"calc((100% - "+M+"px) / 2)",left:"calc((100% - "+x+"px) / 2)",overflow:"hidden",willChange:"transform",transform:"scale("+p+", "+p+")",transformOrigin:"top left"},dt=this.props.boxClassname||"pigeon-tiles-box",pt=-((i-t)*256-m/2),ft=-((s-n)*256-v/2),vt={position:"absolute",width:(e-t+1)*256,height:(a-n+1)*256,willChange:"transform",transform:"translate("+pt+"px, "+ft+"px)"},gt=this.props.tileComponent;return L.createElement("div",{style:mt,className:dt},L.createElement("div",{className:"pigeon-tiles",style:vt},S.map(function(B){return L.createElement(gt,{key:B.key,tile:B,tileLoaded:function(){return l.tileLoaded(B.key)}})})))},d.renderOverlays=function(){var l=this,f=this.state,w=f.width,x=f.height,M=f.center,b={bounds:this.getBounds(),zoom:this.zoomPlusDelta(),center:M,width:w,height:x},T=L.Children.map(this.props.children,function(t){if(!t)return null;if(!L.isValidElement(t))return t;var e=t.props,n=e.anchor,a=e.position,i=e.offset,s=l.latLngToPixel(n||a||M);return L.cloneElement(t,{left:s[0]-(i?i[0]:0),top:s[1]-(i?i[1]:0),latLngToPixel:l.latLngToPixel,pixelToLatLng:l.pixelToLatLng,setCenterZoom:l.setCenterZoomForChildren,mapProps:l.props,mapState:b})}),_={position:"absolute",width:w,height:x,top:"calc((100% - "+x+"px) / 2)",left:"calc((100% - "+w+"px) / 2)"};return L.createElement("div",{className:"pigeon-overlays",style:_},T)},d.renderAttribution=function(){var l=this.props,f=l.attribution,w=l.attributionPrefix;if(f===!1)return null;var x={position:"absolute",bottom:0,right:0,fontSize:"11px",padding:"2px 5px",background:"rgba(255, 255, 255, 0.7)",fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"#333"},M={color:"#0078A8",textDecoration:"none"};return L.createElement("div",{key:"attr",className:"pigeon-attribution",style:x},w===!1?null:L.createElement("span",null,w||L.createElement("a",{href:"https://pigeon-maps.js.org/",style:M,target:"_blank",rel:"noreferrer noopener"},"Pigeon")," | "),f||L.createElement("span",null," \xA9 ",L.createElement("a",{href:"https://www.openstreetmap.org/copyright",style:M,target:"_blank",rel:"noreferrer noopener"},"OpenStreetMap")," contributors"))},d.renderWarning=function(){var l=this.props,f=l.metaWheelZoom,w=l.metaWheelZoomWarning,x=l.twoFingerDrag,M=l.twoFingerDragWarning,b=l.warningZIndex,T=this.state,_=T.showWarning,t=T.warningType,e=T.width,n=T.height;if(f&&w||x&&M){var a={position:"absolute",top:0,left:0,width:e,height:n,overflow:"hidden",pointerEvents:"none",opacity:_?100:0,transition:"opacity 300ms",background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:22,fontFamily:'"Arial", sans-serif',textAlign:"center",zIndex:b},i=typeof window<"u"&&window.navigator&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"\u2318":"ctrl",s=t==="fingers"?M:w;return L.createElement("div",{className:"pigeon-overlay-warning",style:a},s.replace("META",i))}else return null},d.render=function(){var l=this.props,f=l.touchEvents,w=l.twoFingerDrag,x=this.state,M=x.width,b=x.height,T={width:this.props.width?M:"100%",height:this.props.height?b:"100%",position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd",touchAction:f?w?"pan-x pan-y":"none":"auto"},_=!!(M&&b);return L.createElement("div",{style:T,ref:this.setRef,dir:"ltr"},_&&this.renderTiles(),_&&this.renderOverlays(),_&&this.renderAttribution(),_&&this.renderWarning())},c}(et.exports.Component);r(at,"defaultProps",{animate:!0,metaWheelZoom:!1,metaWheelZoomWarning:"Use META + wheel to zoom!",twoFingerDrag:!1,twoFingerDragWarning:"Use two fingers to move the map",zoomSnap:!0,mouseEvents:!0,touchEvents:!0,warningZIndex:100,animateMaxScreens:5,minZoom:1,maxZoom:18,limitBounds:"center",dprs:[],tileComponent:At});const zt=()=>{const u=_t(Mt),c=et.exports.useCallback((g,l,f,w)=>{const x=["a","b","c","d"],M=Math.floor(Math.random()*x.length),b=x[M],T=u==="light",_=`https://${b}.basemaps.cartocdn.com/light_all/${f}/${g}/${l}.webp`,t=`https://${b}.basemaps.cartocdn.com/dark_all/${f}/${g}/${l}.webp`;return T?_:t},[u]),d=[6.244747,-75.574828];return U.exports.jsx("div",{role:"presentation",className:"map w-full h-screen",children:U.exports.jsx(at,{defaultCenter:d,defaultZoom:11,provider:c,attribution:U.exports.jsx("span",{children:"Pigeon Maps | CartoCDN Layers"}),attributionPrefix:!1,boxClassname:"opacity-50 w-full h-full"})})};export{zt as default};
