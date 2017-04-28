var leftItems = $('.left-keyword'),
   rightItems = $('.right-keyword');


// TweenMax.staggerFrom(".left-keyword", 1.5, {right: '-120%', ease:Quad.easeOut}, 0.3);
// TweenMax.staggerFrom(".right-keyword", 1.5, {left: '-120%', ease:Quad.easeOut}, 0.3);


leftItems.each(function(index, element) {
  console.log(element);
  var rDelay = Math.floor((Math.random() * 2) + 1), // between 1 & 3
  rDuration = Math.floor((Math.random() * 2) + 1); // between 1 & 3
  TweenMax.from(element, rDuration, {autoAlpha:0, right: '-120%', ease:Quad.easeOut, delay: rDelay, force3D: true});
});

rightItems.each(function(index, element) {
  console.log(element);
  var rDelay = Math.floor((Math.random() * 2) + 1), // between 1 & 3
  rDuration = Math.floor((Math.random() * 2) + 1);
  TweenMax.from(element, rDuration, {autoAlpha:0, left: '-120%', ease:Quad.easeOut, delay: rDelay, force3D: true});
});

// TweenMax.set('#circle', {y: -800});

// TweenMax.to("#circle", 2, {y: 400, delay: 6});

var finalDelay = 9;
TweenMax.from('footer', .5, {y:150, ease:Back.easeOut, delay: finalDelay, force3D: true});
TweenMax.to('.imgContainer', .5, {y:-70, ease:Back.easeOut, delay: finalDelay, force3D: true});
TweenMax.from('#solutions', .5, {autoAlpha: 0, ease:Back.easeOut, delay: finalDelay, force3D: true});
TweenMax.from('#shprLogo', .5, {autoAlpha: 0, ease:Quad.easeOut, delay: 6, force3D: true});

// TweenMax.set('#circle', {y: -900, force3D: true});

// TweenMax.to('#circle', 5, {y: 500, ease:Cubic.easeOut, delay: 2, force3D: true});

// TweenMax.from($('#bladePath'), 2, {attr:{y: 90}});

// Fade into the middle
// setTimeout(function(){
//   leftItems.each(function(index, element) {
//     console.log(element);
//     var rDelay = Math.floor((Math.random() * 3) + 1), // between 1 & 3
//     rDuration = Math.floor((Math.random() * 2) + 1); // between 1 & 3
//     TweenMax.to(element, 1.2, {right: '-100%', ease:Quad.easeOut, force3D:true});
//   });

//   rightItems.each(function(index, element) {
//     console.log(element);
//     var rDelay = Math.floor((Math.random() * 3) + 1), // between 1 & 3
//     rDuration = Math.floor((Math.random() * 2) + 1);
//     TweenMax.to(element, 1.7, {left: '-100%', ease:Quad.easeOut, force3D:true});
//   });
// }, 5500);


// Fade to sides, 

setTimeout(function(){
  var rDelay = Math.floor((Math.random() * 4.5) + 3.5), // between 1 & 3
  rDuration = Math.floor((Math.random() * 2) + 1);

  leftItems.each(function(index, element) {
    console.log(element);
    TweenMax.to(element, 2, {x:'-90%', autoAlpha: 0, ease:Quad.easeOut, force3D:true});
  });

  rightItems.each(function(index, element) {
    console.log(element);
    TweenMax.to(element, 2, {x:'90%', autoAlpha:0, ease:Quad.easeOut, force3D:true});
  });
}, 5500);
