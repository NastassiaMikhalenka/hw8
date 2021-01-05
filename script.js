
let title = document.createElement('title');
title.innerHTML = 'Choose Your Option';
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
let viewport = document.createElement('meta');
viewport.setAttribute('viewport', 'width=device-width, initial-scale=1.0');

let author = document.createElement('meta');
author.setAttribute('author', 'Nastassia Mikhalenka');

console.log(title);
console.log(metaUtf8);
console.log(viewport);
console.log(author);

// document.documentElement.lang
document.head.appendChild(title);
document.head.appendChild(metaUtf8);
document.head.appendChild(viewport);
document.head.appendChild(author);



let header = document.createElement('header');
header.classList.add('block');
header.style.display = 'block';
header.style.textAlign ='center';
header.style.paddingBottom = '50px';
document.body.appendChild(header);

let p1 = document.createElement('p');
p1.innerHTML ='Choose Your Option';
p1.classList.add('text1');
p1.style.color = 'black';
p1.style.fontFamily = 'Arvo';
p1.style.fontSize ='36px';

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2.classList.add('text2');
p2.style.color = '#9FA3A7';
p2.style.fontFamily = 'Open Sans';
p2.style.fontSize ='14px';

header.appendChild(p1);
header.appendChild(p2);

let main = document.createElement('main');
main.classList.add('main');
let style11 = document.createElement('style');
style11.innerHTML = `
.main{
	display: flex;
    justify-content: center;
}
`;

document.head.appendChild(style11);
document.body.appendChild(main);


let div1 = document.createElement('div');
div1.classList.add('block1');
let style1 = document.createElement('style');
style1.innerHTML = `
.block1{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid grey;
	border-right-style: none;
	border-radius: 3px 0 0 3px;
	width: 401px;
	height: 478px;
}
`;
document.head.appendChild(style1);
main.appendChild(div1);

let p_text1_block1 = document.createElement('p');
p_text1_block1.innerHTML = 'FREELANCER';
p_text1_block1.classList.add('text3');
let style2 = document.createElement('style');
style2.innerHTML = `
.text3{
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2.4px;
	color: #9FA3A7;
}
`;
document.head.appendChild(style2);

div1.appendChild(p_text1_block1);

let p_text2_block1 = document.createElement('p');
p_text2_block1.innerHTML = 'Initially<br>designed to';
p_text2_block1.classList.add('text4');
let style3 = document.createElement('style');
style3.innerHTML = `
.text4{
	font-family: Arvo;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 46px;
	color: #212121;
	text-align: center;
	padding-top: 30px;
}
`;
document.head.appendChild(style3);

div1.appendChild(p_text2_block1);

let p_text3_block1 = document.createElement('p');
p_text3_block1.innerHTML = 'But I must explain to you how all this<br>mistaken idea of denouncing';
p_text3_block1.classList.add('text5');
let style4 = document.createElement('style');
style4.innerHTML = `
.text5{
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 22px;
	text-align: center;
	color: #9FA3A7;
	padding-top: 30px;
	padding-bottom: 65px;
}
`;
document.head.appendChild(style4);

div1.appendChild(p_text3_block1);

let button_1 = document.createElement('button');
button_1.innerHTML = 'START HERE';
button_1.classList.add('button_1');
let style5 = document.createElement('style');
style5.innerHTML = `
button{
	width: 147px;
	height: 46px;
	border-radius: 50px;
	border-color: orange;
	text-decoration: none;
}
button:hover{
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	outline: none;
	text-decoration: none;
}

button: focus{
	outline: none;
	text-decoration: none;
}

button: active{
	outline: none;
}

.button_1{
	background-color: white;
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	vertical-align: middle;
	letter-spacing: 2.4px;
}
`;
document.head.appendChild(style5);

div1.appendChild(button_1);

let div2 = document.createElement('div');
div2.classList.add('block2');
let style6 = document.createElement('style');
style6.innerHTML = `
.block2{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #8F75BE;
	border-radius: 0 3px 3px 0;
	width: 400px;
	height: 480px;
}
`;
document.head.appendChild(style6);
main.appendChild(div2);

let p_text1_block2 = document.createElement('p');
p_text1_block2.innerHTML = 'STUDIO';
p_text1_block2.classList.add('text6');
let style7 = document.createElement('style');
style7.innerHTML = `
.text6{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	text-align: center;
	letter-spacing: 2.4px;
	color: #FFC80A;
}
`;
document.head.appendChild(style7);

div2.appendChild(p_text1_block2);

let p_text2_block2 = document.createElement('p');
p_text2_block2.innerHTML = 'Initially<br>designed to';
p_text2_block2.classList.add('text7');
let style8 = document.createElement('style');
style8.innerHTML = `
.text7{
	font-family: Arvo;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 46px;
	text-align: center;
	padding-top: 30px;
	color: #FFFFFF;
}
`;
document.head.appendChild(style8);

div2.appendChild(p_text2_block2);

let p_text3_block2 = document.createElement('p');
p_text3_block2.innerHTML = 'But I must explain to you how all this<br>mistaken idea of denouncing';
p_text3_block2.classList.add('text8');
let style9 = document.createElement('style');
style9.innerHTML = `
.text8{
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 22px;

	text-align: center;
	padding-top: 30px;
	padding-bottom: 65px;
	color: #FFFFFF;
}
`;
document.head.appendChild(style9);

div2.appendChild(p_text3_block2);


let button_2 = document.createElement('button');
button_2.innerHTML = 'START HERE';
button_2.classList.add('button_1');
button_2.style.backgroundColor = '#8F75BE';
button_2.style.color = 'white';
let style10 = document.createElement('style');
style10.innerHTML = `
button{
	width: 147px;
	height: 46px;
	border-radius: 50px;
	border-color: orange;
}
button:hover{
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	outline: none;
	text-decoration: none;
}

button: focus{
	outline: none;
	text-decoration: none;
}

button: active{
	outline: none;
}

.button_2{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	vertical-align: middle;
	letter-spacing: 2.4px;
	color: white; 
}
`;
document.head.appendChild(style10);
div2.appendChild(button_2);