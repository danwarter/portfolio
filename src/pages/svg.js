

// TweenMax.set("#Cloud", {
//     transformOrigin: 'bottom 0%',
//     scale: 0,
//     opacity: 0
//   });
  
//   TweenMax.set("#Data", {
//     transformOrigin: 'bottom 0%',
//     scale: 0,
//     opacity: 0
//   });
  
//   TweenMax.set("#Interviews", {
//     transformOrigin: 'bottom 0%',
//     scale: 0,
//     opacity: 0
//   });
  
//   TweenMax.set("#Methodology", {
//     transformOrigin: 'bottom 0%',
//     scale: 0,
//     opacity: 0
//   });
  
//   TweenMax.set("#Iteration", {
//     transformOrigin: 'bottom 0%',
//     scale: 0,
//     opacity: 0
//   });
  
//   TweenMax.set("#UserTesting", {
//     transformOrigin: 'bottom 0%',
//     scale: 0,
//     opacity: 0
//   });
  
//   const visible = (item) => {
//     let tl = new TimelineMax() 
//     tl.to(item, 1, {
//           scale: 1,
//           autoAlpha: 1,
//           ease: Elastic.easeOut.config( 1, 0.75)
//       })
//       return tl;
//   }
  
//   const disappear = (item) => {
//     let tl = new TimelineMax() 
//     tl.to(item, .5, {
//           scale: 0, 
//           autoAlpha: 0,
//           ease: Elastic.easeOut.config( 1, .75)
//       })
//       return tl;
//   }
  
//   const float = item => {
//     let tl = new TimelineMax()
//      tl.to(item, 2, {
//       transformStyle:"preserve-3d",
//       force3D: true,
//       y: -30,
//       z: -10,
//       yoyo: true,
//       repeat: -1,
//       ease: Power0.easeNone
//     });
//     return tl;
//   };
  
//   const wave = item => {
//     let tl = new TimelineMax()
//      tl.to(item, 2, {
//       transformStyle:"preserve-3d",
//       force3D: true,
//       y: -10,
//       z: -10,
//       opacity: .2,
//       yoyo: true,
//       repeat: -1,
//       ease: Power0.easeNone
//     });
//     return tl;
//   };
  
//   wave('#Vector_25')
//   visible('#Cloud')
//   float('#Cloud')
  
//   const master = new TimelineMax({delay: .5});
//   master.add('s')
  
//   master
//     .add(visible('#Data'), 's+=1.0')
//     .add(disappear('#Data'), 's+=6.0')
//     .add(visible('#Interviews'), 's+=8.0')
//     .add(disappear('#Interviews'), 's+=14.0')
//     .add(visible('#Methodology'), 's+=16.0')
//     .add(disappear('#Methodology'), 's+=22.0')
//     .add(visible('#Iteration'), 's+=24.0')
//     .add(disappear('#Iteration'), 's+=30.0')
//     .add(visible('#UserTesting'), 's+=32.0')
//     .add(disappear('#UserTesting'), 's+=38.0')
//     .repeat(-1)