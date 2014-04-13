function isFunction(x){return typeof(x)==='function'};//noTypeConversionHere!

//#3c
function forEach(m,f){return forEach.exec(m,f)};

forEach.exec=function(m,f){var r=m.length;if(r){for(var i=0,l=r+0;l--;f(m[i++]));r=1}else{r=0};return r};
forEach.safe=function(m,f){return isFunction(f)?forEach.exec(m,f):0};



//Test:
var goodaction=function(x){console.log(x)},aliasaction=goodaction,badaction=1000;
[10,[],[1,2,3,true],{},{a:'b'}].forEach(function(o,i){
	console.log('#'+i+',',o);
	console.log('\tgood action sucess? ',forEach(o,goodaction)?'yes':'no');
	console.log('\talias action sucess? ',forEach(o,aliasaction)?'yes':'no');
	console.log('\tbad action sucess (safe)? ',forEach.safe(o,badaction)?'yes':'no');
});
