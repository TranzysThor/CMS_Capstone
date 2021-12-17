(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animation_1_HTML5 Canvas_atlas_1", frames: [[0,0,591,1280],[593,0,607,964]]}
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



(lib.adani = function() {
	this.initialize(ss["animation_1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gamma_within = function() {
	this.initialize(ss["animation_1_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PowerButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("powerButtonSoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0)").s().p("Ag/CUQgTgIgcgcQgegfgKgRQgNgXAAgmQAAgmALgaQAKgbAcgbQAagbAYgHQARgGAsAAQA1AAAGACQAYADAZAZQAfAgAMAVQAPAcAAAkQAAAlgNAbQgMAXgeAdQgbAcgYAKQgYAJgmAAQgoAAgSgHg");
	this.shape.setTransform(0.6,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.298)").s().p("Ag/CUQgTgIgcgcQgfgfgJgSQgNgXAAglQAAgmALgaQALgaAbgdQAagaAXgHQASgGAsABQA2AAAFABQAYADAYAZQAgAgAMAVQAPAbABAlQAAAkgOAbQgLAXgfAeQgbAcgYAKQgYAJgmAAQgoABgSgIg");
	this.shape_1.setTransform(-0.1,-0.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,204,0.498)").s().p("Ag/CUQgTgIgcgcQgegfgKgRQgNgXAAgmQAAgmALgaQAKgbAcgbQAbgbAWgHQATgGAqAAQA3AAAFACQAYADAYAZQAhAgALAVQAQAcAAAkQAAAlgOAbQgMAXgdAdQgcAcgYAKQgXAJgnAAQgnAAgTgHg");
	this.shape_2.setTransform(-0.8,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,102,204,0.498)").s().p("Ag/CUQgTgIgcgcQgegfgKgRQgNgXAAgmQAAgmALgaQALgbAbgbQAagbAXgHQASgGAsAAQA2AAAFACQAYADAZAZQAfAgAMAVQAPAcAAAkQAAAlgNAbQgLAXgfAdQgbAcgYAKQgYAJgmAAQgoAAgSgHg");
	this.shape_3.setTransform(-0.65,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-16.4,34.1,31.299999999999997);


(lib.PanelButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("panelButtonSoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0)").s().p("A0uGmIAwtgMAn1AAAIA4N0g");
	this.shape.setTransform(72.9,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.298)").s().p("A0uGmIAwtgMAn1AAAIA4N0g");
	this.shape_1.setTransform(72.9,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,204,0.498)").s().p("A0uGmIAwtgMAn1AAAIA4N0g");
	this.shape_2.setTransform(72.9,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-40.9,265.4,88.5);


(lib.HoodButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("hoodButtonSoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0)").s().p("Ai8GQQikgIhJgvQgyghgShBQgIgigFgPQgIgagNgPQghgnhkAEQg7ADoLA0QlhAjAAggQAAggAVhDQAchZAxhOQCRjnEHgfQDmgcDzgMQD5gNE+AAQIoAAIKBCQDBAYC/DHQBBBEA3BMQAqA9ALAaQAdBKghAdQgdAZhSgGQg8gEh6gZIjagsQmJhIjCAXQiNARhMBRQgVAWgkAuQgjAogkAXQhXA2isAAQgfAAghgCg");
	this.shape.setTransform(15.5032,15.9568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.298)").s().p("Ai8GQQikgIhJgvQgyghgShBQgIgigFgPQgIgagNgPQghgnhkAEQg7ADoLA0QlhAjAAggQAAggAVhDQAchZAxhOQCRjnEHgfQDmgcDzgMQD5gNE+AAQIoAAIKBCQDBAYC/DHQBBBEA3BMQAqA9ALAaQAdBKghAdQgdAZhSgGQg8gEh6gZIjagsQmJhIjCAXQiNARhMBRQgVAWgkAuQgjAogkAXQhXA2isAAQgfAAghgCg");
	this.shape_1.setTransform(15.5032,15.9568);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,204,0.498)").s().p("Ai8GQQikgIhJgvQgyghgShBQgIgigFgPQgIgagNgPQghgnhkAEQg7ADoLA0QlhAjAAggQAAggAVhDQAchZAxhOQCRjnEHgfQDmgcDzgMQD5gNE+AAQIoAAIKBCQDBAYC/DHQBBBEA3BMQAqA9ALAaQAdBKghAdQgdAZhSgGQg8gEh6gZIjagsQmJhIjCAXQiNARhMBRQgVAWgkAuQgjAogkAXQhXA2isAAQgfAAghgCg");
	this.shape_2.setTransform(15.5032,15.9568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-24.2,319.1,80.3);


(lib.GammaButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("gammaButtonSoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0)").s().p("AkrKsQjCglhyhgQh+hrhRiYQhVifAAiOQAAiKB4ijQBsiTCSheQCIhWCIgjQB9gfCzAAQCzAACPAtQCZAvB2BlQCDBwA6BhQBDBxAACLQAACJhOB9QhCBpiHBzQiIBzh7A+QiUBLicANQhDAGg/AAQh4AAhrgUg");
	this.shape.setTransform(9,76.9616);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.298)").s().p("AkrKsQjCglhyhgQh+hrhRiYQhVifAAiOQAAiKB4ijQBsiTCSheQCIhWCIgjQB9gfCzAAQCzAACPAtQCZAvB2BlQCDBwA6BhQBDBxAACLQAACJhOB9QhCBpiHBzQiIBzh7A+QiUBLicANQhDAGg/AAQh4AAhrgUg");
	this.shape_1.setTransform(9,76.9616);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,204,0.498)").s().p("AkrKsQjCglhyhgQh+hrhRiYQhVifAAiOQAAiKB4ijQBsiTCSheQCIhWCIgjQB9gfCzAAQCzAACPAtQCZAvB2BlQCDBwA6BhQBDBxAACLQAACJhOB9QhCBpiHBzQiIBzh7A+QiUBLicANQhDAGg/AAQh4AAhrgUg");
	this.shape_2.setTransform(9,76.9616);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,6.6,180,140.8);


(lib.BodyButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("bodyButtonSoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0)").s().p("AMeOeQlzgCmRgRQmbgBl7gEQrvgHgIgUQgPgngEnfQgBjwABjnMAwgAAAQAHDPACDkQAEHHgaBdQgQA6ptAAIhygBgA4jtwIX4guIYgAuIApGBMgxBAAVg");
	this.shape.setTransform(10.2262,27.2722);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.298)").s().p("AMeOeQlzgCmRgRQmbgBl7gEQrvgHgIgUQgPgngEnfQgBjwABjnMAwgAAAQAHDPACDkQAEHHgaBdQgQA6ptAAIhygBgA4jtwIX4guIYgAuIApGBMgxBAAVg");
	this.shape_1.setTransform(10.2262,27.2722);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,102,204,0.498)").s().p("AMeOeQlzgCmRgRQmbgBl7gEQrvgHgIgUQgPgngEnfQgBjwABjnMAwgAAAQAHDPACDkQAEHHgaBdQgQA6ptAAIhygBgA4jtwIX4guIYgAuIApGBMgxBAAVg");
	this.shape_2.setTransform(10.2262,27.2722);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-65.4,314.3,185.4);


// stage content:
(lib.animation1_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_8
	this.instance = new lib.PanelButton();
	this.instance.setTransform(322.7,470.9,1.0811,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.PanelButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_6
	this.instance_1 = new lib.GammaButton();
	this.instance_1.setTransform(985.3,537.3,0.7531,1.2893,180);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.GammaButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой_5
	this.instance_2 = new lib.BodyButton();
	this.instance_2.setTransform(313.2,263.15,1.0904,1,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.BodyButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой_4
	this.instance_3 = new lib.HoodButton();
	this.instance_3.setTransform(305.45,141.65,1.0872,1,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.HoodButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой_3
	this.instance_4 = new lib.PowerButton();
	this.instance_4.setTransform(146.85,497.35);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.PowerButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой_1
	this.instance_5 = new lib.adani();
	this.instance_5.setTransform(-5,-172,1.1057,1);

	this.instance_6 = new lib.gamma_within();
	this.instance_6.setTransform(630,719.6,1.2267,0.712,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(635,188,681.4000000000001,920);
// library properties:
lib.properties = {
	id: '050BB552F1EC834698189A062B29D9CE',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animation_1_HTML5 Canvas_atlas_1.png?1634911496729", id:"animation_1_HTML5 Canvas_atlas_1"},
		{src:"sounds/bodyButtonSoundwav.mp3?1634911496764", id:"bodyButtonSoundwav"},
		{src:"sounds/gammaButtonSoundwav.mp3?1634911496764", id:"gammaButtonSoundwav"},
		{src:"sounds/hoodButtonSoundwav.mp3?1634911496764", id:"hoodButtonSoundwav"},
		{src:"sounds/panelButtonSoundwav.mp3?1634911496764", id:"panelButtonSoundwav"},
		{src:"sounds/powerButtonSoundwav.mp3?1634911496764", id:"powerButtonSoundwav"}
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
an.compositions['050BB552F1EC834698189A062B29D9CE'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;