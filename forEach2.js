function isFunction(x){return typeof(x)==='function'};//noTypeConversionHere!

/*
//#1
function forEach(m,f){
	var r=m.length;
	if(r && isFunction(f)){r+=0;for(var i=0;i<r;i++){f(m[i])};r=1}else{r=0};
	return r
};

//#2
function forEach(m,f){
	var r=m.length;
	if(r && isFunction(f)){
		for(var i=0,l=r+0;i<l;f(m[i++]));
		r=1;
	};
	return r
}
*/


//#3
function forEach(m,f){
	var r=m.length;
	if(r && isFunction(f)){
		for(var i=0,l=r+0;l--;f(m[i++]));
		r=1;
	}else{
		r=0;
	};
	return r
};



//Test:
var goodaction=function(x){console.log(x)},aliasaction=goodaction,badaction=1000;
[10,[],[1,2,3,true],{},{a:'b'}].forEach(function(o,i){
	console.log('#'+i+',',o);
	console.log('\tgood action sucess? ',forEach(o,goodaction)?'yes':'no');
	console.log('\talias action sucess? ',forEach(o,aliasaction)?'yes':'no');
	console.log('\tbad action sucess? ',forEach(o,badaction)?'yes':'no');
});

/*
#0, 10
	good action sucess?  no
	alias action sucess?  no
	bad action sucess?  no
#1, []
	good action sucess?  no
	alias action sucess?  no
	bad action sucess?  no
#2, [1, 2, 3, true]
1
2
3
true
	good action sucess?  yes
1
2
3
true
	alias action sucess?  yes
	bad action sucess? no
#3, Object {}
	good action sucess?  no
	alias action sucess?  no
	bad action sucess?  no
#4, Object {a: "b"}
	good action sucess?  no
	alias action sucess?  no
	bad action sucess?  no
*/
