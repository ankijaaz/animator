
/**
 * custom Exception
 */
AnimatorCustomExceptions={

noSequenceFound : function(){
	this.showMessage=function(element){
	element.html("no sequence is specified for this animation");
	};
},
domNotFound : function(){
	this.showMessage=function(){
	    if(console)
	console.log("passed element is not found");
	};
},
commonException : function(){
	this.showMessage=function(e){
	    if(console)
	 console.log(e);
	};
}

}

