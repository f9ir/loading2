(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF8E27").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F20").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// black2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(120,200,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:128.4},0).wait(1).to({x:136.8},0).wait(1).to({x:145.3},0).wait(1).to({x:153.7},0).wait(1).to({x:162.1},0).wait(1).to({x:170.5},0).wait(1).to({x:178.9},0).wait(1).to({x:187.4},0).wait(1).to({x:195.8},0).wait(1).to({x:204.2},0).wait(1).to({x:212.6},0).wait(1).to({x:221},0).wait(1).to({x:229.5},0).wait(1).to({x:237.9},0).wait(1).to({x:246.3},0).wait(1).to({x:254.7},0).wait(1).to({x:263.2},0).wait(1).to({x:271.6},0).wait(1).to({x:280},0).wait(1).to({x:273.7,y:207.4},0).wait(1).to({x:267,y:214.6},0).wait(1).to({x:260.1,y:221.5},0).wait(1).to({x:252.7,y:227.9},0).wait(1).to({x:245,y:233.9},0).wait(1).to({x:236.8,y:239.2},0).wait(1).to({x:228.1,y:243.6},0).wait(1).to({x:219,y:247.1},0).wait(1).to({x:209.5,y:249.4},0).wait(1).to({x:199.7,y:250.3},0).wait(1).to({x:190,y:249.7},0).wait(1).to({x:180.4,y:247.6},0).wait(1).to({x:171.3,y:244.3},0).wait(1).to({x:162.6,y:239.8},0).wait(1).to({x:154.4,y:234.5},0).wait(1).to({x:146.7,y:228.5},0).wait(1).to({x:139.4,y:221.9},0).wait(1).to({x:132.6,y:215},0).wait(1).to({x:126.1,y:207.6},0).wait(1).to({x:120,y:200},0).wait(1));

	// black1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(120,200,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:128.4},0).wait(1).to({x:136.8},0).wait(1).to({x:145.3},0).wait(1).to({x:153.7},0).wait(1).to({x:162.1},0).wait(1).to({x:170.5},0).wait(1).to({x:178.9},0).wait(1).to({x:187.4},0).wait(1).to({x:195.8},0).wait(1).to({x:204.2},0).wait(1).to({x:212.6},0).wait(1).to({x:221},0).wait(1).to({x:229.5},0).wait(1).to({x:237.9},0).wait(1).to({x:246.3},0).wait(1).to({x:254.7},0).wait(1).to({x:263.2},0).wait(1).to({x:271.6},0).wait(1).to({x:280},0).wait(1).to({x:273.6,y:192.1},0).wait(1).to({x:266.9,y:184.3},0).wait(1).to({x:259.9,y:176.9},0).wait(1).to({x:252.6,y:169.8},0).wait(1).to({x:244.8,y:163.2},0).wait(1).to({x:236.6,y:157.2},0).wait(1).to({x:227.9,y:151.9},0).wait(1).to({x:218.6,y:147.6},0).wait(1).to({x:208.9,y:144.5},0).wait(1).to({x:198.8,y:143.1},0).wait(1).to({x:188.6,y:143.4},0).wait(1).to({x:178.7,y:145.6},0).wait(1).to({x:169.2,y:149.4},0).wait(1).to({x:160.4,y:154.5},0).wait(1).to({x:152.3,y:160.7},0).wait(1).to({x:144.8,y:167.7},0).wait(1).to({x:137.9,y:175.2},0).wait(1).to({x:131.5,y:183.2},0).wait(1).to({x:125.6,y:191.4},0).wait(1).to({x:120,y:200},0).wait(1));

	// orange
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(280,200,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:271.6},0).wait(1).to({x:263.2},0).wait(1).to({x:254.7},0).wait(1).to({x:246.3},0).wait(1).to({x:237.9},0).wait(1).to({x:229.5},0).wait(1).to({x:221.1},0).wait(1).to({x:212.6},0).wait(1).to({x:204.2},0).wait(1).to({x:195.8},0).wait(1).to({x:187.4},0).wait(1).to({x:179},0).wait(1).to({x:170.5},0).wait(1).to({x:162.1},0).wait(1).to({x:153.7},0).wait(1).to({x:145.3},0).wait(1).to({x:136.8},0).wait(1).to({x:128.4},0).wait(1).to({x:120},0).wait(1).to({x:128},0).wait(1).to({x:136},0).wait(1).to({x:144},0).wait(1).to({x:152},0).wait(1).to({x:160},0).wait(1).to({x:168},0).wait(1).to({x:176},0).wait(1).to({x:184},0).wait(1).to({x:192},0).wait(1).to({x:200},0).wait(1).to({x:208},0).wait(1).to({x:216},0).wait(1).to({x:224},0).wait(1).to({x:232},0).wait(1).to({x:240},0).wait(1).to({x:248},0).wait(1).to({x:256},0).wait(1).to({x:264},0).wait(1).to({x:272},0).wait(1).to({x:280},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(307.5,387.5,185,25);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
