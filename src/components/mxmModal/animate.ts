import gsap,{Power1,Back,Circ} from "gsap";

 const animate ={
    "dialog":(e:any)=>gsap.from(e,{duration:0.3, y:window.innerHeight/2-150,opacity:0, scale:0.3, delay:0.1,fontSize:0,ease:Power1.easeIn}),
    "dialog-reverse":(e:any)=>gsap.to(e,{duration:0.3, y:window.innerHeight/2-150,opacity:0, scale:0.1, delay:0.1,fontSize:0}),
    "toast":(e:any)=>gsap.from(e,{duration:0.3, scale:0,opacity:0,fontSize:0,ease:Back.easeOut}),
    "toast-reverse":(e:any)=>gsap.to(e,{duration:0.3, scale:0,opacity:0,fontSize:0,ease:Power1.easeIn}),
    "frame-l":(e:any)=>gsap.from(e,{duration:0.3,  left:-200, ease:Circ.easeOut}),
    "frame-reverse-l":(e:any)=>gsap.to(e,{duration:0.3,  left:-400, ease:Circ.easeIn}),
    "frame-r":(e:any)=>gsap.from(e,{duration:0.3,  right:-200, ease:Circ.easeOut}),
    "frame-reverse-r":(e:any)=>gsap.to(e,{duration:0.3,  right:-400, ease:Circ.easeIn}),
    "frame-t":(e:any)=>gsap.from(e,{duration:0.3,  top:-400, ease:Circ.easeOut}),
    "frame-reverse-t":(e:any)=>gsap.to(e,{duration:0.3,  top:-400, ease:Circ.easeIn}),
    "frame-b":(e:any)=>gsap.from(e,{duration:0.6,  bottom:-400, ease:Circ.easeOut}),
    "frame-reverse-b":(e:any)=>gsap.to(e,{duration:0.6,  bottom:-400, ease:Circ.easeIn}),
    "image":(e:any)=>{},
    "image-reverse":(e:any)=>{}
} 

type ANIMATE = typeof animate & {[index:string]:any}


export default animate as ANIMATE