(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#008080",
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



// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ah8UUIAAxMIK7AAIAARMg");
	var mask_graphics_1 = new cjs.Graphics().p("AjBUUIAAxMINyAAIAARMg");
	var mask_graphics_2 = new cjs.Graphics().p("AkHUUIAAxMIQqAAIAARMg");
	var mask_graphics_3 = new cjs.Graphics().p("AlNUUIAAxMITjAAIAARMg");
	var mask_graphics_4 = new cjs.Graphics().p("AmSUUIAAxMIWaAAIAARMg");
	var mask_graphics_5 = new cjs.Graphics().p("AnYUUIAAxMIZTAAIAARMg");
	var mask_graphics_6 = new cjs.Graphics().p("AoeUUIAAxMIcLAAIAARMg");
	var mask_graphics_7 = new cjs.Graphics().p("ApkUUIAAxMIfEAAIAARMg");
	var mask_graphics_8 = new cjs.Graphics().p("AqpUUIAAxMMAh7AAAIAARMg");
	var mask_graphics_9 = new cjs.Graphics().p("ArvUUIAAxMMAk0AAAIAARMg");
	var mask_graphics_10 = new cjs.Graphics().p("As1UUIAAxMMAnsAAAIAARMg");
	var mask_graphics_11 = new cjs.Graphics().p("At7UUIAAxMMAqlAAAIAARMg");
	var mask_graphics_12 = new cjs.Graphics().p("AvAUUIAAxMMAtcAAAIAARMg");
	var mask_graphics_13 = new cjs.Graphics().p("AwGUUIAAxMMAwVAAAIAARMg");
	var mask_graphics_14 = new cjs.Graphics().p("AxMUUIAAxMMAzNAAAIAARMg");
	var mask_graphics_15 = new cjs.Graphics().p("AySUUIAAxMMA2GAAAIAARMg");
	var mask_graphics_16 = new cjs.Graphics().p("AzXUUIAAxMMA49AAAIAARMg");
	var mask_graphics_17 = new cjs.Graphics().p("A0dUUIAAxMMA72AAAIAARMg");
	var mask_graphics_18 = new cjs.Graphics().p("A1jUUIAAxMMA+uAAAIAARMg");
	var mask_graphics_19 = new cjs.Graphics().p("A2pUUIAAxMMBBmAAAIAARMg");
	var mask_graphics_20 = new cjs.Graphics().p("A1mUUIAAxMMA+3AAAIAARMg");
	var mask_graphics_21 = new cjs.Graphics().p("A0kUUIAAxMMA8IAAAIAARMg");
	var mask_graphics_22 = new cjs.Graphics().p("AziUUIAAxMMA5ZAAAIAARMg");
	var mask_graphics_23 = new cjs.Graphics().p("AyfUUIAAxMMA2pAAAIAARMg");
	var mask_graphics_24 = new cjs.Graphics().p("AxdUUIAAxMMAz7AAAIAARMg");
	var mask_graphics_25 = new cjs.Graphics().p("AwbUUIAAxMMAxMAAAIAARMg");
	var mask_graphics_26 = new cjs.Graphics().p("AvZUUIAAxMMAudAAAIAARMg");
	var mask_graphics_27 = new cjs.Graphics().p("AuWUUIAAxMMAruAAAIAARMg");
	var mask_graphics_28 = new cjs.Graphics().p("AtUUUIAAxMMAo/AAAIAARMg");
	var mask_graphics_29 = new cjs.Graphics().p("AsSUUIAAxMMAmQAAAIAARMg");
	var mask_graphics_30 = new cjs.Graphics().p("ArQUUIAAxMMAjhAAAIAARMg");
	var mask_graphics_31 = new cjs.Graphics().p("AqNUUIAAxMMAgxAAAIAARMg");
	var mask_graphics_32 = new cjs.Graphics().p("ApLUUIAAxMIeDAAIAARMg");
	var mask_graphics_33 = new cjs.Graphics().p("AoJUUIAAxMIbUAAIAARMg");
	var mask_graphics_34 = new cjs.Graphics().p("AnHUUIAAxMIYlAAIAARMg");
	var mask_graphics_35 = new cjs.Graphics().p("AmEUUIAAxMIV1AAIAARMg");
	var mask_graphics_36 = new cjs.Graphics().p("AlCUUIAAxMITHAAIAARMg");
	var mask_graphics_37 = new cjs.Graphics().p("AkAUUIAAxMIQYAAIAARMg");
	var mask_graphics_38 = new cjs.Graphics().p("Ai+UUIAAxMINpAAIAARMg");
	var mask_graphics_39 = new cjs.Graphics().p("Ah8UUIAAxMIK7AAIAARMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:57.5,y:130}).wait(1).to({graphics:mask_graphics_1,x:68.9,y:130}).wait(1).to({graphics:mask_graphics_2,x:80.4,y:130}).wait(1).to({graphics:mask_graphics_3,x:91.8,y:130}).wait(1).to({graphics:mask_graphics_4,x:103.3,y:130}).wait(1).to({graphics:mask_graphics_5,x:114.7,y:130}).wait(1).to({graphics:mask_graphics_6,x:126.2,y:130}).wait(1).to({graphics:mask_graphics_7,x:137.6,y:130}).wait(1).to({graphics:mask_graphics_8,x:149.1,y:130}).wait(1).to({graphics:mask_graphics_9,x:160.5,y:130}).wait(1).to({graphics:mask_graphics_10,x:172,y:130}).wait(1).to({graphics:mask_graphics_11,x:183.4,y:130}).wait(1).to({graphics:mask_graphics_12,x:194.9,y:130}).wait(1).to({graphics:mask_graphics_13,x:206.3,y:130}).wait(1).to({graphics:mask_graphics_14,x:217.8,y:130}).wait(1).to({graphics:mask_graphics_15,x:229.2,y:130}).wait(1).to({graphics:mask_graphics_16,x:240.7,y:130}).wait(1).to({graphics:mask_graphics_17,x:252.1,y:130}).wait(1).to({graphics:mask_graphics_18,x:263.5,y:130}).wait(1).to({graphics:mask_graphics_19,x:275,y:130}).wait(1).to({graphics:mask_graphics_20,x:264.1,y:130}).wait(1).to({graphics:mask_graphics_21,x:253.3,y:130}).wait(1).to({graphics:mask_graphics_22,x:242.4,y:130}).wait(1).to({graphics:mask_graphics_23,x:231.5,y:130}).wait(1).to({graphics:mask_graphics_24,x:220.6,y:130}).wait(1).to({graphics:mask_graphics_25,x:209.8,y:130}).wait(1).to({graphics:mask_graphics_26,x:198.9,y:130}).wait(1).to({graphics:mask_graphics_27,x:188,y:130}).wait(1).to({graphics:mask_graphics_28,x:177.1,y:130}).wait(1).to({graphics:mask_graphics_29,x:166.3,y:130}).wait(1).to({graphics:mask_graphics_30,x:155.4,y:130}).wait(1).to({graphics:mask_graphics_31,x:144.5,y:130}).wait(1).to({graphics:mask_graphics_32,x:133.6,y:130}).wait(1).to({graphics:mask_graphics_33,x:122.8,y:130}).wait(1).to({graphics:mask_graphics_34,x:111.9,y:130}).wait(1).to({graphics:mask_graphics_35,x:101,y:130}).wait(1).to({graphics:mask_graphics_36,x:90.1,y:130}).wait(1).to({graphics:mask_graphics_37,x:79.3,y:130}).wait(1).to({graphics:mask_graphics_38,x:68.4,y:130}).wait(1).to({graphics:mask_graphics_39,x:57.5,y:130}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FFFD4").s().p("AnzD5QhnAAhJhJQhKhJAAhnQAAhmBKhJQBJhKBnABIPmAAQBogBBJBKQBKBJgBBmQABBnhKBJQhJBJhoAAg");
	this.shape.setTransform(205,200);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
