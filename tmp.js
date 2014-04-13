//#1
function forEach(m,f){
	var r=m.length;
	if(r && isFunction(f)){r+=0;for(var i=0;i<r;i++){f(m[i])};r=1}else{r=0};
	return r
};


//#2
function forEach(m,f){
	var r=m.length;
	if(r){r+=0;for(var i=0;i<r;i++){f(m[i])};r=1};
	return r
}
