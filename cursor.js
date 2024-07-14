import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'




const width = window.innerWidth
const height = window.innerHeight


const pc = particlesCursor({
    el: document.querySelector('.cursor_parent'),
    gpgpuSize: 256,
    colors: [0x00fffc, 0x0000ff], // Changed pink color to #00fffc and blue color
    color: 0xff0000,
    coordScale: 0.5,
    noiseIntensity: 0.003 ,
    noiseTimeCoef: 0.0001,
    pointSize: 2, // Lighter particle thickness
    pointDecay: .005,
    sleepRadiusX: width/3,
    sleepRadiusY: height/6,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefY: 0.002
  });



 setInterval(   ()=>{
    pc.uniforms.uColor.value.set(Math.random() * 0xffffff)

 } , 5000  ) 