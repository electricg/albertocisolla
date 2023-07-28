
var slideShowSpeed = 2000
var crossFadeDuration = 3
var Pic = new Array()
Pic[0] = 'foto/intro_01.jpg'
Pic[1] = 'foto/intro_03.jpg'
Pic[2] = 'foto/intro_04.jpg'
Pic[3] = 'foto/intro_10.jpg'
Pic[4] = 'foto/intro_12.jpg'
Pic[5] = 'foto/intro_13.jpg'

var t
var j = 0
var p = Pic.length

var preLoad = new Array()
for (i = 0; i < p; i++){
   preLoad[i] = new Image()
   preLoad[i].src = Pic[i]
}

function runSlideShow(){
   if (document.all){
      document.images.SlideShow.style.filter="blendTrans(duration=2)"
      document.images.SlideShow.style.filter="blendTrans(duration=crossFadeDuration)"
      document.images.SlideShow.filters.blendTrans.Apply()      
   }
   document.images.SlideShow.src = preLoad[j].src
   if (document.all){
      document.images.SlideShow.filters.blendTrans.Play()
   }
   j = j + 1
   if (j > (p-1)) j=0
   t = setTimeout('runSlideShow()', slideShowSpeed)
}