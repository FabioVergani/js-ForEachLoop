function isFunction(x){return typeof(x)==='function'};//noTypeConversionHere!

function forEach(m,f){
	var r=m.length;
	if(r && isFunction(f)){r+=0;for(var i=0;i<r;i++){f(m[i])};r=1}else{r=0};
	return r
};


//Test:
var goodaction=function(x){console.log(x)},aliasaction=goodaction,badaction=1000;
[10,[],[1,2,3,true],{},{a:'b'}].forEach(function(o,i){
	console.log('#'+i+',',o);
	console.log('\tgood action sucess? ',forEach(o,goodaction)?'yes':'no');
	console.log('\talias action sucess? ',forEach(o,aliasaction)?'yes':'no');
	console.log('\tbada ction sucess? ',forEach(o,badaction)?'yes':'no');
});
