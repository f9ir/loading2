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
	this.shape.graphics.f("#454545").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape.setTransform(22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);


// stage content:
(lib.loadax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(200,200,1,1,0,0,0,22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.751},0).wait(1).to({alpha:0.672},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.445},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.302},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.166},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.06},0).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.5,377.5,45,45);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
