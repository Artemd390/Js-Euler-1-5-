var button1 = document.getElementById('b1')
var button2 = document.getElementById('b2')
var button3 = document.getElementById('b3')
var button4 = document.getElementById('b4')
var button5 = document.getElementById('b5')

//ES1 Exercize with 5 can change to 3 or add 3 

function exercize1(){	
	var total = 0;
	var a= 0;
	for(a ; a < 1000; a++){
  		if(a % 5 == 0 ){
    	total = total+a;}
	}
	alert(total);
}button1.onclick = exercize1;

//ES2

function exercize2(){	
	var sum = 0;
	var num = 1;
	var nNum = 0;

	for (num; num < 4000000;) {
		num = nNum + num;
		nNum = num - nNum;
		
		if (num % 2 === 0) {
			sum = sum + num;
		}
	}
	alert(sum)
}button2.onclick = exercize2;

	//ES3

function exercize3(){
	var num_primal = 600851475143;
    var divid = 2;
    while(num_primal  != divid)
    {
        if(num_primal  % divid === 0)
        {
            num_primal  = num_primal  / divid;
        }
        else
        {
            divid++;
        }
    }
    alert(divid);

}button3.onclick = exercize3;

//ES4

function exercize4(){	
	var max = 9999;
	for(var i=100; i<1000;i++){
		for(var j=100; j<1000;j++ ){
			var prod= 0;
			prod= i*j;
			if(prod>max){
				if(prod.toString().split('').reverse().join('')==prod.toString()){
					max= prod;
				}
			}
		}
	}
	alert(max)
}button4.onclick = exercize4;

//ES5

function exercize5(){	
	var num = 20;
	var token= false;
	var list = [1,2,3,4,5,6,7,8,9,10,11, 13, 14, 16, 17, 18, 19, 20];
	var value;
	while (true) {
    	var control = true;
    	for (value of list) {
			if (num % value != 0) {
				control= false;
				break;
			}
		}
		if (control) {
			token = true;
			break;
		} else {
			num+=20;
		}
	}
alert(num)
}button5.onclick = exercize5;