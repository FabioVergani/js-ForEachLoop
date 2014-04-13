//#3c
//#<
(function(w,s){
	var o=w[s]=Object.create(null),k=function(p,f){var e=w[p]=o[p]=f.bind(o);return e};

	k('isFunction',function(x){return typeof(x)==='function'});//noTypeConversionHere!
 	k('forEach',function(m,f){var e=this;return e.isFunction(f)?e.forEach.run(m,f):0}).run=function(m,f){var r=m.length;if(r){for(var i=0,l=r+0;l--;f(m[i++]));r=1}else{r=0};return r};

	Object.freeze(o);
	k=o=null;
})(window,'namespaceId');
//>







//
//Test:
var goodaction=function(x){console.log(x)},aliasaction=goodaction,badaction=1000;
[10,[],[1,2,3,'','sparse',true],{},{a:'b'}].forEach(function(o,i){
	console.log('#'+i+',',o);
	console.log('\tgood action sucess? ',forEach.run(o,goodaction)?'yes':'no');//faster,sesonosicurochegoodactionsiafunzione
	console.log('\talias action sucess? ',forEach(o,aliasaction)?'yes':'no');
	console.log('\tbad action sucess (safe)? ',forEach(o,badaction)?'yes':'no');
});



/*
#0, 10
	good action sucess?  no
	alias action sucess?  no
	bad action sucess (safe)?  no
#1, []
	good action sucess?  no
	alias action sucess?  no
	bad action sucess (safe)?  no
#2, [1, 2, 3, "", "sparse", true]
1
2
3

sparse
true
	good action sucess?  yes
1
2
3

sparse
true
	alias action sucess?  yes
	bad action sucess (safe)?  no
#3, Object {}
	good action sucess?  no
	alias action sucess?  no
	bad action sucess (safe)?  no
#4, Object {a: "b"}
	good action sucess?  no
	alias action sucess?  no
	bad action sucess (safe)?  no 
*/
