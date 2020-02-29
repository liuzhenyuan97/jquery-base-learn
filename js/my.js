/*function test(){
	alert("我是test:外部引入声明");
}
*/



//声明对象
/*var bjsxt={}
bjsxt.test=function(){
	alert("我是test:外部引入声明");
}
*/
//使用工厂模式
(function(obj){
	var bjsxt={};
	bjsxt.test=function(){
		alert("工厂");
	}
	alert("匿名自调用");
	return bjsxt;
})(window)
