let bold=0;
let ital=0;
let input = document.querySelector('#ibox');
let typed= document.querySelector(".textspace");
let log = typed.lastChild;

function Bold(){
	var i = document.createElement("LABEL");
	i.id="log";
	if(!bold)
	{	
		bold=1;
		document.querySelector('#bold').style.fontWeight="bold";
		i.style.fontWeight="bold";
	}
	else
	{
		bold=0;
		document.querySelector('#bold').style.fontWeight="normal";
		i.style.fontWeight="normal";
	}
	if(ital)
		i.style.fontStyle="italic";
	typed.appendChild(i);
	log=typed.lastChild;
}
function Italic(){
	var i = document.createElement("LABEL");
	i.id="log";
	if(!ital)
	{
		document.querySelector('#ital').style.fontWeight="bold";
		ital=1;
		i.style.fontStyle="italic";
	}
	else
	{
		document.querySelector('#ital').style.fontWeight="normal";
		ital=0;
		i.style.fontStyle="normal";
	}
	if(bold)
		i.style.fontWeight="bold";
	typed.appendChild(i);
	log=typed.lastChild;
}
input.oninput = handleInput;

function handleInput(e) {	
		log.textContent += e.target.value;
		e.target.value='';
}