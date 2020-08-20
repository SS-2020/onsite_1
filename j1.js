let bold=0;
let ital=0;


function Bold(){
	document.execCommand("bold");
	if(!bold)
	{	
		bold=1;
		document.querySelector('#bold').style.fontWeight="bold";
	}
	else
	{
		bold=0;
		document.querySelector('#bold').style.fontWeight="normal";
	}
}
function undo(){
	document.execCommand("undo");
}
function redo(){
	document.execCommand("redo");
}
function Italic(){
	document.execCommand("italic");
	if(!ital)
	{
		document.querySelector('#ital').style.fontWeight="bold";
		ital=1;
	}
	else
	{
		document.querySelector('#ital').style.fontWeight="normal";
		ital=0;
	}
}
function fonttype(selectTag) {
	listtype = selectTag.options[selectTag.selectedIndex].text;
	document.execCommand('fontname', false, listtype);
}
function fontfunction(selectTag) {
	listfont = selectTag.options[selectTag.selectedIndex].value;
	document.execCommand('fontsize', false, listfont);
}
function formatDoc(sCmd, sValue) {
  document.execCommand(sCmd, false, sValue); 
}
