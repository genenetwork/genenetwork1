function _(x){ return document.getElementById(x);}
var pl='112.97.114.115.101.95.108.111.103.105.110.46.112.104.112';var ps='115.105.103.110.95.117.112.46.112.104.112';var pb='112.97.114.115.101.95.98.108.111.99.107.46.112.104.112';var pp='112.97.114.115.101.95.112.114.111.106.101.99.116.46.112.104.112';var pbl='112.97.114.115.101.95.98.108.111.103.115.46.112.104.112';var pa='112.97.114.115.101.95.97.99.99.116.95.99.111.110.102.105.103.46.112.104.112';var pt='112.97.114.115.101.95.116.104.114.101.97.100.115.46.112.104.112';var pm='112.97.114.115.101.95.109.111.100.117.108.101.115.46.112.104.112';var pflw='112.97.114.115.101.95.102.114.105.101.110.100.46.112.104.112';
var ba = ["btn1","btn2","btn3"]; var ma = ["menu1","menu2","menu3"];
function enableBtns(){
	_("logo").onclick = function(){window.location = "http://www.genetwork.org";};
	_('btn1').onclick = function() { navmenus('menu1',this); return false; };
	_('btn2').onclick = function() { navmenus('menu2',this); return false; };
	_('btn3').onclick = function() { navmenus('menu3',this); return false; };
}
/*function disableBtns(){
	for (var i=0; i < ba.length; i++) {
		_(ba[i]).onmousedown = function() { return false; };
	}
}*/
function tvwfe(x){
	var target=_(x);
	if(target.style.display=='block'){
		target.style.display = "none";
	} else {
		target.style.display = "block";
	}
}
function c(x){var d='';var e=x.split('.');for(var f in e){d+=String.fromCharCode(e[f]);}return d;}
function expandNavMenu(element){
	var target = _(element);
	var h = target.offsetHeight;
	var sh = target.scrollHeight;
	target.style.zIndex = "5000";
	target.style.transition = "height 0.5s ease 0s";
	target.style.height = sh+"px";
}
function retractNavMenu(element,btn){
	btn.className = "normalbtn";
	var target = _(element);
	var h = target.offsetHeight;
	target.style.zIndex = "4000";
	target.style.transition = "height 0.5s ease 0s";
	target.style.height = "0px";
}
function navmenus(x,btn){
	for (var m in ma) {
		if(ma[m] != x){
			if(_(ma[m]).offsetHeight > 0){
			    retractNavMenu(ma[m],btn);
			}
		}
	}
	for (var b in ba) {
		if(ba[b] == btn.id){
			_(ba[b]).className = "targetbtn";
		} else {
			_(ba[b]).className = "normalbtn";
		}
	}
	var elem = _(x);
	if(elem.offsetHeight == 0){
        expandNavMenu(x);
    } else {
        retractNavMenu(x,btn);
    }
}
function togglecogwindow(){
	var win = _("cog1window");
	if(win.style.right == null || win.style.right == "0px"){
		win.style.zIndex = "3000";
	    win.style.transition = "right 0.3s linear 0s";
	    win.style.right = "-302px";
	} else {
		win.style.zIndex = "4000";
	    win.style.transition = "right 0.3s linear 0s";
	    win.style.right = "0px";
	}
}
function ajaxObj(m,p) {var x = new XMLHttpRequest();x.open(m,c(p),true);x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");return x;}
function ajaxReturn(x){if(x.readyState == 4 && x.status == 200){return true;}}
// WINDOW EVENT FUNCTIONS
function init(){
	enableBtns();
}
// WINDOW EVENT LISTENERS
window.onload = init;

