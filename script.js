for (let i=2; i<=0; i++){
	if (i%2 === 0 && i%3 === 0 && i%5 === 0 && i%7===0){
		console.log(i);
	}
}

debugger
for (let i=2; i<=100; i++){
	for (let a=2; a<=(i-2); a++){
        if (i%a===0){
        break;
        }
	} console.log(i);
}

debugger;
for (let i=2; i<=100; i++){
let a=0;
	for (a=2; a<=(i-2); a++){
        if (i%a===0){
        break;}
	} 
    if (a=== (i-1)){
        console.log(i);
    }
}

i=5;
for (a=i-1; a<=2; a--){
	if (i%a===0){
		break;
	}
	console.log(i);
}

debugger; //работает вариант №1
for (let i=2; i<=1000; i++){
let a=0;
	for (a=2; a<=(i-1); a++){
        if (i%a===0){
        break;}
	} 
    if (a===i  || i/(i-2)===Infinity){
        console.log(i);
    }
}

//вариант №2
debugger;
let a=0;
for (let i=2; i<=100; i++){
    if (i%2===0){//избавляемся от четных
    	if (i/2===1){//но если цифра равна 2, то записываем
    		console.log(i);
    	}
		continue;
    } 
	else {
    	for (a=2; a<=(i-1); a++){
        	if (i%a===0){
        		break;}
		} 
    	if (a===i){
        	console.log(i);
    	}
    }
}

//вариант №3 не работет
debugger;
let a;
for (let i=2; i<=1000; i++){
    if (i%2===0){ //избавляемся от четных
    	if (i/2===1){ //но если цифра равна 2, то записываем
    		console.log(i);
    	}
		continue; //переходим к сл числу
    } 
	else if (i>8){
		if (i%3 !== 0 && i%5 !== 0 && i%7 !==0){//действует только от 10
			console.log(i);
		}    	
    }
    else {
    	a=0;
    	for (a=2; a<=(i-1); a++){
        	if (i%a===0){
        		break;}
		}
        console.log(i);
    } 
}