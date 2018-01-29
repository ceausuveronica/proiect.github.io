function ecuatie2()
{
	 this.citeste = function(){
		 this.a = document.getElementById("a").value;
		 this.b = document.getElementById("b").value;
		 this.c = document.getElementById("c").value;
	 };
	 //----------------------------
	 
	 this.calculeaza = function()
	 {
		 var delta = this.b * this.b - 4 * this.a * this.c;
	var sol_x1, sol_x2;
	if (delta >= 0){
		this.x1 = {re:(-this.b + Math.sqrt(delta)) / (2 * this.a), im:0}
		this.x2 = {re:(-this.b - Math.sqrt(delta)) / (2 * this.a), im:0};
	}
	else{
		this.x1 = {re:-this.b / (2 * this.a), im: Math.sqrt(-delta) / (2 * this.a)};
		this.x2 = {re:-this.b / (2 * this.a), im:-Math.sqrt(-delta) / (2 * this.a)};
	}
	
		 
	 };
	 //----------------------------------
	 
	 this.afiseaza = function(){
		 document.getElementById("x1").innerHTML = this.x1.re + "x" + this.x1.im + "i";
		 document.getElementById("x2").innerHTML = this.x2.re + "x" + this.x2.im + "i";
	 };
	 
};
   //------------------------------------  
	 
	 function citeste()
{
	var val_a = document.getElementById("a").value;
	var val_b = document.getElementById("b").value;
	var val_c = document.getElementById("c").value;
	
	var coef = {a:val_a, b:val_b, c:val_c};
	
	return coef;
}
//-------------------------------------
//function rezolva_ec2(coef)
//{
//	var delta = coef.b * coef.b - 4 * coef.a * coef.c;
//	var sol_x1, sol_x2;
//	if (delta >= 0){
//		sol_x1 = {re:(-coef.b + Math.sqrt(delta)) / (2 * coef.a), im:0}
//		sol_x2 = {re:(-coef.b - Math.sqrt(delta)) / (2 * coef.a), im:0};
//	}
//	else{
//		sol_x1 = {re:-coef.b / (2 * coef.a), im: Math.sqrt(-delta) / (2 * coef.a)};
//		sol_x2 = {re:-coef.b / (2 * coef.a), im:-Math.sqrt(-delta) / (2 * coef.a)};
	//}
//	var solutii = {x1:sol_x1, x2:sol_x2};
//	return solutii;
//}
//-------------------------------------
//function afiseaza_solutie(x, id)
//{
//	document.getElementById(id).innerHTML = x.re + "+" + x.im + "i";
//}
//-------------------------------------
function rezolva()
{    
 var e = new ecuatie2();
e.citeste();
e.calculeaza();
e.afiseaza();
	
	
}
//-------------------------------------