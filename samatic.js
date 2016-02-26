(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
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
	this.shape.graphics.f().s("#F1C40F").ss(1,1,1).p("AmPmPIMfAAIAAMfIsfAAg");
	this.shape.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,82,82);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1C40F").s().p("AjMDNIAAmZIGZAAIAAGZg");
	this.shape.setTransform(20.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.circ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F1C40F").ss(1,1,1).p("AEsAAQAAB8hZBXQhXBZh8AAQh7AAhYhZQhYhXAAh8QAAh7BYhYQBYhYB7AAQB8AABXBYQBZBYAAB7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C40F").s().p("AjTDUQhXhYgBh8QABh7BXhYQBYhXB7gBQB8ABBXBXQBZBYAAB7QAAB8hZBYQhXBXh8ABQh7gBhYhXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-31,62,62);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circ();
	this.instance.setTransform(190,270);

	this.instance_1 = new lib.circ();
	this.instance_1.setTransform(30,110);

	this.instance_2 = new lib.circ();
	this.instance_2.setTransform(110,30);

	this.instance_3 = new lib.circ();
	this.instance_3.setTransform(110,190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,221,301);


(lib.rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,0,1,1,0,0,0,20.5,20.5);
	this.instance.alpha = 0.191;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:144.6,alpha:0.156},0).wait(1).to({rotation:235.4,x:0.1,alpha:0.124},0).wait(1).to({rotation:271.1,alpha:0.093},0).wait(1).to({rotation:252.9,alpha:0.064},0).wait(1).to({rotation:180.3,x:0,alpha:0.036},0).wait(1).to({rotation:52.6,y:0.1,alpha:0.01},0).wait(1).to({rotation:231,x:0.1,y:0,alpha:0.391},0).wait(1).to({rotation:355,x:0,alpha:0.9},0).wait(1).to({rotation:424.5,y:0.1},0).wait(1).to({rotation:439.5},0).wait(1).to({rotation:400.1,x:0.1},0).wait(1).to({rotation:306.2,y:0},0).wait(1).to({rotation:157.8,x:0},0).wait(1).to({rotation:314.9,x:0.1},0).wait(1).to({rotation:417.6,x:0,y:0.1},0).wait(1).to({rotation:465.8,y:0},0).wait(1).to({rotation:459.5},0).wait(1).to({rotation:399.4,x:0.1},0).wait(1).to({rotation:284.2,x:0},0).wait(1).to({rotation:114.6},0).wait(1).to({rotation:251.1,x:0.1},0).wait(1).to({rotation:332.5,y:0.1},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(0,0,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({alpha:0.928},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.612},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.232},0).wait(1).to({alpha:0.178},0).wait(1).to({alpha:0.131},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.058},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-40.5,81,81);


// stage content:



(lib.samatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rec();
	this.instance.setTransform(180,240);

	this.instance_1 = new lib.rec();
	this.instance_1.setTransform(260,320);

	this.instance_2 = new lib.rec();
	this.instance_2.setTransform(420,160);

	this.instance_3 = new lib.rec();
	this.instance_3.setTransform(420,320);

	this.instance_4 = new lib.rec();
	this.instance_4.setTransform(340,240);

	this.instance_5 = new lib.rec();
	this.instance_5.setTransform(260,160);

	this.instance_6 = new lib.rec();
	this.instance_6.setTransform(180,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(24));

	// circ
	this.instance_7 = new lib.Symbol3();
	this.instance_7.setTransform(260,200,1,1,0,0,0,110,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:198.6},0).wait(1).to({y:197.2},0).wait(1).to({y:195.8},0).wait(1).to({y:194.4},0).wait(1).to({y:193},0).wait(1).to({y:194.2},0).wait(1).to({y:195.3},0).wait(1).to({y:196.5},0).wait(1).to({y:197.7},0).wait(1).to({y:198.8},0).wait(1).to({y:200},0).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(414.5,239.5,321,321);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
