(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"網動HW_HTML5 Canvas_atlas_1", frames: [[651,0,560,577],[0,651,649,525],[0,0,649,649],[651,579,428,376]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.萼婆婆01 = function() {
	this.initialize(ss["網動HW_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.萼婆婆03 = function() {
	this.initialize(ss["網動HW_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.彩色鉛筆 = function() {
	this.initialize(ss["網動HW_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.遮色片 = function() {
	this.initialize(ss["網動HW_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.萼婆婆03();
	this.instance.setTransform(-324.5,-262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.5,-262.5,649,525);


(lib.補間動畫6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.萼婆婆03();
	this.instance.setTransform(-324.5,-262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.5,-262.5,649,525);


(lib.補間動畫1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.萼婆婆01();
	this.instance.setTransform(-280,-288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280,-288.5,560,577);


(lib.彩色鉛筆_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.彩色鉛筆();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.彩色鉛筆_1, new cjs.Rectangle(0,0,649,649), null);


// stage content:
(lib.網動HW_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 彩色鉛筆
	this.instance = new lib.彩色鉛筆_1();
	this.instance.setTransform(324.5,324.5,1,1,0,0,0,324.5,324.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1.1539,scaleY:1.1539},20).to({_off:true},10).wait(19).to({_off:false,scaleX:1,scaleY:1},0).to({scaleX:1.1539,scaleY:1.1539},20).wait(31).to({x:374.45},0).to({regX:324.4,regY:324.4,scaleX:1.7585,scaleY:1.7585,x:374.3,y:324.45},20).to({_off:true},11).wait(2));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3CyWMBC3AAAMAAAA6vMhC3AAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A3CyWMBC3AAAMAAAA6vMhC3AAAg");
	var mask_graphics_20 = new cjs.Graphics().p("A3aysMBDYAAAMAAAA7MMhDYAAAg");
	var mask_graphics_21 = new cjs.Graphics().p("A3yzBMBD5AAAMAAAA7pMhD5AAAg");
	var mask_graphics_22 = new cjs.Graphics().p("A4KzXMBEaAAAMAAAA8GMhEaAAAg");
	var mask_graphics_23 = new cjs.Graphics().p("A4hzsMBE6AAAMAAAA8jMhE6AAAg");
	var mask_graphics_24 = new cjs.Graphics().p("A450CMBFbAAAMAAAA9AMhFbAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("A5R0XMBF9AAAMAAAA9cMhF9AAAg");
	var mask_graphics_26 = new cjs.Graphics().p("A5p0tMBGeAAAMAAAA96MhGeAAAg");
	var mask_graphics_27 = new cjs.Graphics().p("A6B1CMBG/AAAMAAAA+WMhG/AAAg");
	var mask_graphics_28 = new cjs.Graphics().p("A6Z1YMBHgAAAMAAAA+0MhHgAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("A6w1tMBIAAAAMAAAA/QMhIAAAAg");
	var mask_graphics_30 = new cjs.Graphics().p("A7I2DMBIhAAAMAAAA/uMhIhAAAg");
	var mask_graphics_31 = new cjs.Graphics().p("A7g2YMBJCAAAMAAABAKMhJCAAAg");
	var mask_graphics_32 = new cjs.Graphics().p("A742uMBJjAAAMAAABAnMhJjAAAg");
	var mask_graphics_33 = new cjs.Graphics().p("A8Q3DMBKEAAAMAAABBEMhKEAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("A8o3ZMBKlAAAMAAABBhMhKlAAAg");
	var mask_graphics_35 = new cjs.Graphics().p("A8/3uMBLGAAAMAAABB+MhLGAAAg");
	var mask_graphics_36 = new cjs.Graphics().p("A9X4EMBLnAAAMAAABCbMhLnAAAg");
	var mask_graphics_37 = new cjs.Graphics().p("A9v4ZMBMIAAAMAAABC3MhMIAAAg");
	var mask_graphics_38 = new cjs.Graphics().p("A+H4vMBMpAAAMAAABDVMhMpAAAg");
	var mask_graphics_39 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_119 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_120 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_121 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_122 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_123 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_124 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_126 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_127 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_128 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_129 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_131 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_133 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_134 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_135 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_136 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("A+f5FMBNKAAAMAAABDyMhNKAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:280.5,y:258.5}).wait(19).to({graphics:mask_graphics_19,x:280.5,y:258.5}).wait(1).to({graphics:mask_graphics_20,x:281.4098,y:259.2412}).wait(1).to({graphics:mask_graphics_21,x:282.3196,y:259.9823}).wait(1).to({graphics:mask_graphics_22,x:283.2293,y:260.7235}).wait(1).to({graphics:mask_graphics_23,x:284.1391,y:261.4647}).wait(1).to({graphics:mask_graphics_24,x:285.0489,y:262.2058}).wait(1).to({graphics:mask_graphics_25,x:285.9587,y:262.947}).wait(1).to({graphics:mask_graphics_26,x:286.8685,y:263.6882}).wait(1).to({graphics:mask_graphics_27,x:287.7782,y:264.4293}).wait(1).to({graphics:mask_graphics_28,x:288.688,y:265.1705}).wait(1).to({graphics:mask_graphics_29,x:289.5978,y:265.9117}).wait(1).to({graphics:mask_graphics_30,x:290.5076,y:266.6528}).wait(1).to({graphics:mask_graphics_31,x:291.4173,y:267.394}).wait(1).to({graphics:mask_graphics_32,x:292.3271,y:268.1352}).wait(1).to({graphics:mask_graphics_33,x:293.2369,y:268.8763}).wait(1).to({graphics:mask_graphics_34,x:294.1467,y:269.6175}).wait(1).to({graphics:mask_graphics_35,x:295.0565,y:270.3587}).wait(1).to({graphics:mask_graphics_36,x:295.9662,y:271.0998}).wait(1).to({graphics:mask_graphics_37,x:296.876,y:271.841}).wait(1).to({graphics:mask_graphics_38,x:297.7858,y:272.5822}).wait(1).to({graphics:mask_graphics_39,x:298.6956,y:273.2945}).wait(80).to({graphics:mask_graphics_119,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_120,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_121,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_122,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_123,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_124,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_125,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_126,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_127,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_128,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_129,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_130,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_131,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_132,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_133,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_134,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_135,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_136,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_137,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_138,x:298.6956,y:273.2945}).wait(1).to({graphics:mask_graphics_139,x:298.6956,y:273.2945}).wait(13));

	// 萼婆婆03
	this.instance_1 = new lib.萼婆婆03();
	this.instance_1.setTransform(0,90);

	this.instance_2 = new lib.補間動畫6("synched",0);
	this.instance_2.setTransform(1036,352.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.補間動畫7("synched",0);
	this.instance_3.setTransform(324.5,352.5);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},99).to({state:[{t:this.instance_3}]},20).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({_off:true,x:324.5},20).wait(33));

	// 萼婆婆01
	this.instance_4 = new lib.補間動畫1("synched",0);
	this.instance_4.setTransform(921.85,313.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:300.2},13,cjs.Ease.circIn).to({startPosition:0},8).to({startPosition:0},18).to({startPosition:0},9).to({startPosition:0},1).to({_off:true},1).wait(102));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(128.4,78.5,1073.5,816.8);
// library properties:
lib.properties = {
	id: '25602CC474F3844786E8F1E856111055',
	width: 649,
	height: 649,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/網動HW_HTML5 Canvas_atlas_1.png?1729042077403", id:"網動HW_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['25602CC474F3844786E8F1E856111055'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;