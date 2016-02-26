(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1000,
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



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1C40F").s().p("AoRISQjbjcgBk2QABk1DbjcQCKiJCsg0IAAWdQisg0iKiJgADlrLQCnA1CFCFQDdDcAAE1QAAE2jdDcQiFCFinA1g");
	this.shape.setTransform(75,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,143.8);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(825,201,1,1,180,0,0,75,71.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({rotation:109.6,x:797.5},0).wait(1).to({rotation:39.1,x:770},0).wait(1).to({rotation:-31.3,x:742.4},0).wait(1).to({rotation:-101.7,x:714.9},0).wait(1).to({rotation:-172.2,x:687.4},0).wait(1).to({rotation:-242.6,x:659.9},0).wait(1).to({rotation:-313,x:632.4},0).wait(1).to({rotation:-383.5,x:604.8},0).wait(1).to({rotation:-453.9,x:577.3},0).wait(1).to({rotation:-524.3,x:549.8},0).wait(1).to({rotation:-594.8,x:522.3},0).wait(1).to({rotation:-665.2,x:494.7},0).wait(1).to({rotation:-735.7,x:467.2},0).wait(1).to({rotation:-806.1,x:439.7},0).wait(1).to({rotation:-876.5,x:412.2},0).wait(1).to({rotation:-947,x:384.6},0).wait(1).to({rotation:-1017.4,x:357.1},0).wait(1).to({rotation:-1087.8,x:329.6},0).wait(1).to({rotation:-1158.3,x:302.1},0).wait(1).to({rotation:-1228.7,x:274.5},0).wait(1).to({rotation:-1299.1,x:247},0).wait(1).to({rotation:-1369.6,x:219.5},0).wait(1).to({rotation:-1440,x:192},0).wait(1));

	// Layer 1 copy
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(192,201,1,1,0,0,0,75,71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:106.1,x:245.8},0).wait(1).to({rotation:144.2,x:297.3},0).wait(1).to({rotation:112.8,x:346.4},0).wait(1).to({rotation:13.3,x:393},0).wait(1).to({rotation:-154.9,x:437.3},0).wait(1).to({rotation:-32.6,x:479.2},0).wait(1).to({rotation:21.7,x:518.7},0).wait(1).to({rotation:7.2,x:555.7},0).wait(1).to({rotation:-76.1,x:590.5},0).wait(1).to({rotation:-228.1,x:622.8},0).wait(1).to({rotation:-88.9,x:652.7},0).wait(1).to({rotation:-18.5,x:680.2},0).wait(1).to({rotation:-16.8,x:705.3},0).wait(1).to({rotation:-83.9,x:728.1},0).wait(1).to({rotation:-219.8,x:748.4},0).wait(1).to({rotation:-64.4,x:766.4},0).wait(1).to({rotation:22.2,x:781.9},0).wait(1).to({rotation:40.8,x:795.1},0).wait(1).to({rotation:-10.1,x:805.9},0).wait(1).to({rotation:-129.9,x:814.2},0).wait(1).to({rotation:42.5,x:820.2},0).wait(1).to({rotation:145.2,x:823.8},0).wait(1).to({rotation:180,x:825},0).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(617,329.1,150,143.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
