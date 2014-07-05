
/**
 * AnimationSheet component 
 * @author 
 * 
 * AnimationSheet component is used for creating image sequencing 
 * 
 * @param {Object} options
 */

AnimationSheet = function(options){

//data is wraped in to the options object
"use strict";
  var _this=this;
	_this.options={
		imagePath:"",
		frameSequence:[],
		timeSlice:1000,
		height:8,
		width:8,
		imgContentHeight:0,
		imgContentWidth:0
		};
// reference for the cached image of given path 
	        
	_this.image="";
	_this.loaded=false;
	_this.imageHeight=8;
	_this.imageWidth=8;
//init is used for intialising AnimationSheet	

	_this.init=function() {
//merging used send options with defualt values
        if(!(options.frameSequence instanceof  Array)){
        	if(typeof options.frameSequence == "number"){
        		var number=options.frameSequence;
        		options.frameSequence=[];
        		for(var i=0;i<number;i++)options.frameSequence[i]=i;
        	}
        }
		$.extend(_this.options,_this.options,options);
//caching image		
    
		_this.image = new Image();
		_this.image.onload=function(e){
			_this.loaded=true;
		
		if(_this.options.imgContentHeight === 0){
		_this.imageHeight= _this.image.height;	
		}else{
			_this.imageHeight= _this.options.imgContentHeight;	
		}
		if(_this.options.imgContentWidth === 0){
		_this.imageWidth=_this.image.width;	
		}else{
			
			_this.imageWidth=_this.options.imgContentWidth;	
			
		}
			
	        
		}
		_this.image.src=_this.options.imagePath; 
	 }
//calling init method
   _this.init();
  
   return _this;
};