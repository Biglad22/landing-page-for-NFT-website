console.log('na you dey hot')
console.warn('you\'re getting too hot')
console.error('you\'re on fire');
var x = ['emma','jane','james','cate'];
var y = {'emma':24,'jane':15, 'james':21, 'cate':18};
//let z = alert(prompt('please enter a name')); 
let person =['emma','gina','husk'];
let name ='emmanuel';
let code ='3412'
console.log(name.replace('nuel',code));

function passGen(name,yob){
    let a=name.slice(0,5);
    let b=a[1].toUpperCase();
    let c=name.slice(3, name.length);
    let d=String(yob);
    let f=d.slice(5,6);
    let g=d.slice(0,2);
    let h=a.replace(a[1],b);
    return(h+g+c+f);
}
let k= passGen('emmanuel',26.1996);
console.log(k);



/*
console.log(age);
if (15 > age){
    console.error('how the hell did you find us?, we\'re telling dad');
}
else if (18 > age && age >= 15){
    console.warn(`you're ${age} and you're cool, but not cool enough for this site, OPPS`);
}
else if (15< age && age >= 18){
    if(gender =='male'){
        console.log(`you're ${age}, fresh and young, men want to be you, women want to sleep with you.`);
    }
    else if(gender =='female'){
        console.log(`you're ${age}, beautiful and loved, men want you, women envy you.`);
    }
    else{
        console.error('Bro we don\'t do that here.');
    }
}
let b = document.getElementById('nav');
b.innerHTML='<h1>LOVERS EVERYWHERE</h1>';
*/








