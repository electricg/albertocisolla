/********************************************************************************
Copyright (C) 1999 Thomas Brattli
This script is made by and copyrighted to Thomas Brattli at www.bratta.com
Visit for more great scripts.
This may be used freely as long as this msg is intact!
********************************************************************************/

/************************************************************************************
This script is a "foldout" menu script, all the "foldouts" will
stay outfolded in older browsers. Works in ie4+ and ns4+.
ADDED: Images

To change where the menu appears change the left and top values of the divCont
in the stylesheets, it's currently placed relative so you can
place this menu in tables or similar if you want. Change the 
text colors and size in the A.clMain and A.clSubb classes.
************************************************************************************/

/************************************************************************************
Change this to false if you want all the submenus to get unfold when you
foldout a new one.
************************************************************************************/
var stayFolded=false

//This is the image that it changes to when it expands.
var exImg=new Image(); exImg.src='img/arrow1.gif'
//This is the image is changes to with it's "unfolded" or something :}
//Remeber to change the actual images in the page aswell, but remember to
//keep the name of the image.
var unImg=new Image(); unImg.src='img/arrow.gif'

/************************************************************************************
Browsercheck
************************************************************************************/
var n = (document.layers) ? 1:0;
var ie = (document.all) ? 1:0;
var browser=((n || ie) && parseInt(navigator.appVersion)>=4)  

/************************************************************************************
Making cross-browser objects
************************************************************************************/
function makeMenu(obj,nest){
	nest=(!nest) ? '':'document.'+nest+'.'										
	this.css=(n) ? eval(nest+'document.'+obj):eval('document.all.'+obj+'.style')					
   	this.ref=(n) ? eval(nest+'document.'+obj+'.document'):eval('document');		
	this.height=n?this.ref.height:eval(obj+'.offsetHeight')
	this.x=(n)? this.css.left:this.css.pixelLeft;this.y=(n)? this.css.top:this.css.pixelTop;							
	this.hideIt=b_hideIt;	this.showIt=b_showIt; this.vis=b_vis; this.moveIt=b_moveIt											
	return this
}
function b_showIt(){this.css.visibility="visible"}
function b_hideIt(){this.css.visibility="hidden"}
function b_vis(){if(this.css.visibility=="hidden" || this.css.visibility=="hide") return true;}
function b_moveIt(x,y){this.x=x; this.y=y; this.css.left=this.x; this.css.top=this.y}
/************************************************************************************
Initiating the page. Just add to the arrays here to get more menuitems
and add divs in the page
************************************************************************************/
function init(){
	oTop=new Array()
	oTop[0]=new makeMenu('divTop1','divCont')
	oTop[1]=new makeMenu('divTop2','divCont')
	oTop[2]=new makeMenu('divTop3','divCont')
	oTop[3]=new makeMenu('divTop4','divCont')
	oTop[4]=new makeMenu('divTop5','divCont')
    oTop[5]=new makeMenu('divTop6','divCont')
	oSub=new Array()
	oSub[0]=new makeMenu('divSub1','divCont.document.divTop1')
	oSub[1]=new makeMenu('divSub2','divCont.document.divTop2')
	oSub[2]=new makeMenu('divSub3','divCont.document.divTop3')
	oSub[3]=new makeMenu('divSub4','divCont.document.divTop4')
	oSub[4]=new makeMenu('divSub5','divCont.document.divTop5')
	oSub[5]=new makeMenu('divSub6','divCont.document.divTop6')
	for(i=0;i<oSub.length;i++){ oSub[i].hideIt() }
	for(i=1;i<oTop.length;i++){ oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height) }
}
/************************************************************************************
This is the function that changes the sub menus to folded or unfolded state.
************************************************************************************/
function menu(num){
	if(browser){
		if(!stayFolded){
			for(i=0;i<oSub.length;i++){
				if(i!=num){
					oSub[i].hideIt()
					oTop[i].ref["imgA"+i].src=unImg.src
				}
			}
			for(i=1;i<oTop.length;i++){
				oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height)
			}
		}
		if(oSub[num].vis()){
			oSub[num].showIt()
			oTop[num].ref["imgA"+num].src=exImg.src
		}else{
			oSub[num].hideIt()
			oTop[num].ref["imgA"+num].src=unImg.src
		}
		for(i=1;i<oTop.length;i++){ 
			if(!oSub[i-1].vis()) oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height+oSub[i-1].height) 
			else oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height)
		}
	}
}
//Initiating the menus onload, if it's a 4.x+ browser.
if(browser) onload=init;