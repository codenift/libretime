'use strict';

//knobs and sliders from g200kg
window.addEventListener("load",()=>{
  let op=window.inputKnobsOptions||{};
  op.knobWidth=op.knobWidth||op.knobDiameter||64;
  op.knobHeight=op.knobHeight||op.knobDiameter||64;
  op.sliderWidth=op.sliderWidth||op.sliderDiameter||128;
  op.sliderHeight=op.sliderHeight||op.sliderDiameter||20;
  op.switchWidth=op.switchWidth||op.switchDiameter||24;
  op.switchHeight=op.switchHeight||op.switchDiameter||24;
  op.fgcolor=op.fgcolor||"#f00";
  op.bgcolor=op.bgcolor||"#000";
  op.knobMode=op.knobMode||"linear";
  op.sliderMode=op.sliderMode||"relative";
  let styles=document.createElement("style");
  styles.innerHTML=
`input[type=range].input-knob,input[type=range].input-slider{
  -webkit-appearance:none;
  -moz-appearance:none;
  border:none;
  box-sizing:border-box;
  overflow:hidden;
  background-repeat:no-repeat;
  background-size:100% 100%;
  background-position:0px 0%;
  background-color:transparent;
  touch-action:none;
}
input[type=range].input-knob{
  width:${op.knobWidth}px; height:${op.knobHeight}px;
}
input[type=range].input-slider{
  width:${op.sliderWidth}px; height:${op.sliderHeight}px;
}
input[type=range].input-knob::-webkit-slider-thumb,input[type=range].input-slider::-webkit-slider-thumb{
  -webkit-appearance:none;
  opacity:0;
}
input[type=range].input-knob::-moz-range-thumb,input[type=range].input-slider::-moz-range-thumb{
  -moz-appearance:none;
  height:0;
  border:none;
}
input[type=range].input-knob::-moz-range-track,input[type=range].input-slider::-moz-range-track{
  -moz-appearance:none;
  height:0;
  border:none;
}
input[type=checkbox].input-switch,input[type=radio].input-switch {
  width:${op.switchWidth}px;
  height:${op.switchHeight}px;
  -webkit-appearance:none;
  -moz-appearance:none;
  background-size:100% 200%;
  background-position:0% 0%;
  background-repeat:no-repeat;
  border:none;
  border-radius:0;
  background-color:transparent;
}
input[type=checkbox].input-switch:checked,input[type=radio].input-switch:checked {
  background-position:0% 100%;
}`;
  document.head.appendChild(styles);
  let makeKnobFrames=(fr,fg,bg)=>{
    let r=
`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="${fr*64}" viewBox="0 0 64 ${fr*64}" preserveAspectRatio="none">
<defs><g id="K"><circle cx="32" cy="32" r="30" fill="${bg}"/>
<line x1="32" y1="28" x2="32" y2="7" stroke-linecap="round" stroke-width="6" stroke="${fg}"/></g></defs>
<use xlink:href="#K" transform="rotate(-135,32,32)"/>`;
    for(let i=1;i<fr;++i)
      r+=`<use xlink:href="#K" transform="translate(0,${64*i}) rotate(${-135+270*i/fr},32,32)"/>`;
    return r+"</svg>";
  }
  let makeHSliderFrames=(fr,fg,bg,w,h)=>{
    let r=
`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${fr*h}" viewBox="0 0 ${w} ${fr*h}" preserveAspectRatio="none">
<defs><g id="B"><rect x="0" y="0" width="${w}" height="${h}" rx="${h/2}" ry="${h/2}" fill="${bg}"/></g>
<g id="K"><circle x="${w/2}" y="0" r="${h/2*0.9}" fill="${fg}"/></g></defs>`;
    for(let i=0;i<fr;++i){
      r+=`<use xlink:href="#B" transform="translate(0,${h*i})"/>`;
      r+=`<use xlink:href="#K" transform="translate(${h/2+(w-h)*i/100},${h/2+h*i})"/>`;
    }
    return r+"</svg>";
  }
  let makeVSliderFrames=(fr,fg,bg,w,h)=>{
    let r=
`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${fr*h}" viewBox="0 0 ${w} ${fr*h}" preserveAspectRatio="none">
<defs><rect id="B" x="0" y="0" width="${w}" height="${h}" rx="${w/2}" ry="${w/2}" fill="${bg}"/>
<circle id="K" x="0" y="0" r="${w/2*0.9}" fill="${fg}"/></defs>`;
    for(let i=0;i<fr;++i){
      r+=`<use xlink:href="#B" transform="translate(0,${h*i})"/>`;
      r+=`<use xlink:href="#K" transform="translate(${w/2} ${h*(i+1)-w/2-i*(h-w)/100})"/>`;
    }
    return r+"</svg>";
  }
  let initSwitches=(el)=>{
    let w,h,d,fg,bg;
    if(el.inputKnobs)
      return;
    el.inputKnobs={};
    el.refresh=()=>{
      let src=el.getAttribute("data-src");
      d=+el.getAttribute("data-diameter");
      let st=document.defaultView.getComputedStyle(el,null);
      w=parseFloat(el.getAttribute("data-width")||d||st.width);
      h=parseFloat(el.getAttribute("data-height")||d||st.height);
      bg=el.getAttribute("data-bgcolor")||op.bgcolor;
      fg=el.getAttribute("data-fgcolor")||op.fgcolor;
      el.style.width=w+"px";
      el.style.height=h+"px";
      if(src)
        el.style.backgroundImage="url("+src+")";
      else {
        let minwh=Math.min(w,h);
        let svg=
`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h*2}" viewBox="0 0 ${w} ${h*2}" preserveAspectRatio="none">
<g><rect fill="${bg}" x="1" y="1" width="${w-2}" height="${h-2}" rx="${minwh*0.25}" ry="${minwh*0.25}"/>
<rect fill="${bg}" x="1" y="${h+1}" width="${w-2}" height="${h-2}" rx="${minwh*0.25}" ry="${minwh*0.25}"/>
<circle fill="${fg}" cx="${w*0.5}" cy="${h*1.5}" r="${minwh*0.25}"/></g></svg>`;
        el.style.backgroundImage="url(data:image/svg+xml;base64,"+btoa(svg)+")";
      }
    };
    el.refresh();
  };
  let initKnobs=(el)=>{
    let w,h,d,fg,bg;
    if(el.inputKnobs){
      el.redraw();
      return;
    }
    let ik=el.inputKnobs={};
    el.refresh=()=>{
      d=+el.getAttribute("data-diameter");
      let st=document.defaultView.getComputedStyle(el,null);
      w=parseFloat(el.getAttribute("data-width")||d||st.width);
      h=parseFloat(el.getAttribute("data-height")||d||st.height);
      bg=el.getAttribute("data-bgcolor")||op.bgcolor;
      fg=el.getAttribute("data-fgcolor")||op.fgcolor;
      ik.sensex=ik.sensey=200;
      if(el.className.indexOf("input-knob")>=0)
        ik.itype="k";
      else{
        if(w>=h){
          ik.itype="h";
          ik.sensex=w-h;
          ik.sensey=Infinity;
          el.style.backgroundSize="auto 100%";
        }
        else{
          ik.itype="v";
          ik.sensex=Infinity;
          ik.sensey=h-w;
          el.style.backgroundSize="100% auto";
        }
      }
      el.style.width=w+"px";
      el.style.height=h+"px";
      ik.frameheight=h;
      let src=el.getAttribute("data-src");
      if(src){
        el.style.backgroundImage=`url(${src})`;
        let sp=+el.getAttribute("data-sprites");
        if(sp)
          ik.sprites=sp;
        else
          ik.sprites=0;
        if(ik.sprites>=1)
          el.style.backgroundSize=`100% ${(ik.sprites+1)*100}%`;
        else if(ik.itype!="k"){
          el.style.backgroundColor=bg;
          el.style.borderRadius=Math.min(w,h)*0.25+"px";
        }
      }
      else{
        let svg;
        switch(ik.itype){
        case "k": svg=makeKnobFrames(101,fg,bg); break;
        case "h": svg=makeHSliderFrames(101,fg,bg,w,h); break;
        case "v": svg=makeVSliderFrames(101,fg,bg,w,h); break;
        }
        ik.sprites=100;
        el.style.backgroundImage="url(data:image/svg+xml;base64,"+btoa(svg)+")";
        el.style.backgroundSize=`100% ${(ik.sprites+1)*100}%`;
      }
      ik.valrange={min:+el.min, max:(el.max=="")?100:+el.max, step:(el.step=="")?1:+el.step};
      el.redraw(true);
    };
    el.setValue=(v)=>{
      v=(Math.round((v-ik.valrange.min)/ik.valrange.step))*ik.valrange.step+ik.valrange.min;
      if(v<ik.valrange.min) v=ik.valrange.min;
      if(v>ik.valrange.max) v=ik.valrange.max;
      el.value=v;
      if(el.value!=ik.oldvalue){
        el.setAttribute("value",el.value);
        el.redraw();
        let event=document.createEvent("HTMLEvents");
        event.initEvent("input",false,true);
        el.dispatchEvent(event);
        ik.oldvalue=el.value;
      }
    };
    ik.pointerdown=(ev)=>{
      el.focus();
      if(ev.touches)
        ev = ev.touches[0];
      let rc=el.getBoundingClientRect();
      let cx=(rc.left+rc.right)*0.5,cy=(rc.top+rc.bottom)*0.5;
      let dx=ev.clientX,dy=ev.clientY;
      let da=Math.atan2(ev.clientX-cx,cy-ev.clientY);
      if(ik.itype=="k"&&op.knobMode=="circularabs"){
        dv=ik.valrange.min+(da/Math.PI*0.75+0.5)*(ik.valrange.max-ik.valrange.min);
        el.setValue(dv);
      }
      if(ik.itype!="k"&&op.sliderMode=="abs"){
        dv=(ik.valrange.min+ik.valrange.max)*0.5+((dx-cx)/ik.sensex-(dy-cy)/ik.sensey)*(ik.valrange.max-ik.valrange.min);
        el.setValue(dv);
      }
      ik.dragfrom={x:ev.clientX,y:ev.clientY,a:Math.atan2(ev.clientX-cx,cy-ev.clientY),v:+el.value};
      document.addEventListener("mousemove",ik.pointermove);
      document.addEventListener("mouseup",ik.pointerup);
      document.addEventListener("touchmove",ik.pointermove);
      document.addEventListener("touchend",ik.pointerup);
      document.addEventListener("touchcancel",ik.pointerup);
      document.addEventListener("touchstart",ik.preventScroll);
      ev.preventDefault();
      ev.stopPropagation();
    };
    ik.pointermove=(ev)=>{
      let dv;
      let rc=el.getBoundingClientRect();
      let cx=(rc.left+rc.right)*0.5,cy=(rc.top+rc.bottom)*0.5;
      if(ev.touches)
        ev = ev.touches[0];
      let dx=ev.clientX-ik.dragfrom.x,dy=ev.clientY-ik.dragfrom.y;
      let da=Math.atan2(ev.clientX-cx,cy-ev.clientY);
      switch(ik.itype){
      case "k":
        switch(op.knobMode){
        case "linear":
          dv=(dx/ik.sensex-dy/ik.sensey)*(ik.valrange.max-ik.valrange.min);
          if(ev.shiftKey)
            dv*=0.2;
          el.setValue(ik.dragfrom.v+dv);
          break;
        case "circularabs":
          if(!ev.shiftKey){
            dv=ik.valrange.min+(da/Math.PI*0.75+0.5)*(ik.valrange.max-ik.valrange.min);
            el.setValue(dv);
            break;
          }
        case "circularrel":
          if(da>ik.dragfrom.a+Math.PI) da-=Math.PI*2;
          if(da<ik.dragfrom.a-Math.PI) da+=Math.PI*2;
          da-=ik.dragfrom.a;
          dv=da/Math.PI/1.5*(ik.valrange.max-ik.valrange.min);
          if(ev.shiftKey)
            dv*=0.2;
          el.setValue(ik.dragfrom.v+dv);
        }
        break;
      case "h":
      case "v":
        dv=(dx/ik.sensex-dy/ik.sensey)*(ik.valrange.max-ik.valrange.min);
        if(ev.shiftKey)
          dv*=0.2;
        el.setValue(ik.dragfrom.v+dv);
        break;
      }
    };
    ik.pointerup=()=>{
      document.removeEventListener("mousemove",ik.pointermove);
      document.removeEventListener("touchmove",ik.pointermove);
      document.removeEventListener("mouseup",ik.pointerup);
      document.removeEventListener("touchend",ik.pointerup);
      document.removeEventListener("touchcancel",ik.pointerup);
      document.removeEventListener("touchstart",ik.preventScroll);
      let event=document.createEvent("HTMLEvents");
      event.initEvent("change",false,true);
      el.dispatchEvent(event);
    };
    ik.preventScroll=(ev)=>{
      ev.preventDefault();
    };
    ik.keydown=()=>{
      el.redraw();
    };
    ik.wheel=(ev)=>{
      let delta=ev.deltaY>0?-ik.valrange.step:ik.valrange.step;
      if(!ev.shiftKey)
        delta*=5;
      el.setValue(+el.value+delta);
      ev.preventDefault();
      ev.stopPropagation();
    };
    el.redraw=(f)=>{
      if(f||ik.valueold!=el.value){
        let v=(el.value-ik.valrange.min)/(ik.valrange.max-ik.valrange.min);
        if(ik.sprites>=1)
          el.style.backgroundPosition="0px "+(-((v*ik.sprites)|0)*ik.frameheight)+"px";
        else{
          switch(ik.itype){
          case "k":
            el.style.transform="rotate("+(270*v-135)+"deg)";
            break;
          case "h":
            el.style.backgroundPosition=((w-h)*v)+"px 0px";
            break;
          case "v":
            el.style.backgroundPosition="0px "+(h-w)*(1-v)+"px";
            break;
          }
        }
        ik.valueold=el.value;
      }
    };
    el.refresh();
    el.redraw(true);
    el.addEventListener("keydown",ik.keydown);
    el.addEventListener("mousedown",ik.pointerdown);
    el.addEventListener("touchstart",ik.pointerdown);
    el.addEventListener("wheel",ik.wheel);
  }
  let refreshque=()=>{
    let elem=document.querySelectorAll("input.input-knob,input.input-slider");
    for(let i=0;i<elem.length;++i)
      procque.push([initKnobs,elem[i]]);
    elem=document.querySelectorAll("input[type=checkbox].input-switch,input[type=radio].input-switch");
    for(let i=0;i<elem.length;++i){
      procque.push([initSwitches,elem[i]]);
    }
  }
  let procque=[];
  refreshque();
  setInterval(()=>{
    for(let i=0;procque.length>0&&i<8;++i){
      let q=procque.shift();
      q[0](q[1]);
    }
    if(procque.length<=0)
      refreshque();
  },50);
});


// Create an instance
//var wavesurfer;
var wavesurfer = [];
  
  function invertHEX(hex, bw) {
      if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
          throw new Error('Invalid HEX color.');
      }
      var r = parseInt(hex.slice(0, 2), 16),
          g = parseInt(hex.slice(2, 4), 16),
          b = parseInt(hex.slice(4, 6), 16);
      if (bw) {
          // http://stackoverflow.com/a/3943023/112731
          return (r * 0.299 + g * 0.587 + b * 0.114) > 186
              ? '#000000'
              : '#FFFFFF';
      }
      // invert color components
      r = (255 - r).toString(16);
      g = (255 - g).toString(16);
      b = (255 - b).toString(16);
      // pad each with zeros and return
      //return "#" + padZero(r) + padZero(g) + padZero(b);
      return "#" + r + g + b;
  }
  
  function renderWaveform(track_id, selector_id, peaks, url, cuein, cueout) {
    
    //$( "#track_edit_"+track_id).find("#track_title").val( "00:00:50" ); 
     
     var trackid = "t"+track_id;
     
    // Init & load audio file
    //  document.addEventListener('DOMContentLoaded', function() {

      var a = cuein.split(':'); // split it at the colons 
      var b = cueout.split(':'); // split it at the colons 
      
      // minutes are worth 60 seconds. Hours are worth 60 minutes.
      var startseconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
      var endseconds = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]); 
      
      wavesurfer[trackid] = WaveSurfer.create({
          container: document.querySelector(selector_id),
          waveColor: 'hsla(0, 0%, 50%, 0.8)', //needs to be fixed, color changes when doubled, needs half opacity?
          backgroundColor: '#333',
          progressColor: 'hsla(0, 0%, 0%, 0)',
          backend: 'MediaElement',
          height: 90,
          cursorColor: '#ccc',
          cursorWidth: 1,
          responsive: true,
          scrollParent: true,
          autoCenter: true, //this needs to be fix, if not scrolling then autocenter, else false when scrolling
          //forceDecode: true //if it can handle it
          plugins: [
               
              WaveSurfer.regions.create({
                  regions: [
                      {
                          id: track_id,
                          start: startseconds,
                          end: endseconds ,
                          drag: false,
                          color: 'hsla(232, 64%, 50%, 0.2)',
                          //color: 'hsla(30, 75%, 50%, 0.2)',
                          //color: 'hsla(0, 75%, 27%, 0.52)',
                          handleStyle: {
                                  left: {
                                      backgroundColor: '#00e640',
                                      width: '2px', 
                                       //cursor: url("custom.gif"), url("custom.cur"), default; 
                                  },
                                  right: {
                                      backgroundColor: '#f22613',
                                      width: '2px', 
                                       //cursor: url("custom.gif"), url("custom.cur"), default; 
                                       //cursor: url('path-to-image.png'), auto;	
                                  },
                              },
                      }
                  ]
              }),
             WaveSurfer.gains.create({
                  gains: [
                      {
                          id: track_id,
                          start: '10',
                          end: '10.5' ,
                          drag: false,
                          color: 'hsla(232, 64%, 50%, 0)',  //top on this needs to move up and down, top 10 makes it go down
                          //color: 'hsla(30, 75%, 50%, 0.2)',
                          //color: 'hsla(0, 75%, 27%, 0.52)',
                          handleStyle: {  
                                  top: {
                                      //backgroundColor: 'hsla(24, 100%, 50%, 1)',
                                      backgroundColor: '#cccccc',
                                     height: '2px', 
                                     top: '40px',
                                      //top:'0px',
                                    //  top: "100",
                                      cursor: "ns-resize",
                                       //cursor: url("custom.gif"), url("custom.cur"), default; 
                                  },
                                  bottom: {
                                       backgroundColor: 'hsla(307, 100%, 50%, 0)',
                                      height: '2px', 
                                      top: '85px',
                                      //top: '10'
                                      
                                       //cursor: url("custom.gif"), url("custom.cur"), default; 
                                       //cursor: url('path-to-image.png'), auto;	
                                  },
                              },
                      }
                  ]
              }), 
              WaveSurfer.timeline.create({
                  container: "#timeline-"+ track_id,
                  formatTimeCallback: formatTimeCallback,
                  timeInterval: timeInterval,
                  primaryLabelInterval: primaryLabelInterval,
                  secondaryLabelInterval: secondaryLabelInterval,
                  primaryColor: '#ff611f',
                  secondaryColor: '#cccccc',
                  primaryFontColor: '#ff611f',
                  secondaryFontColor: '#cccccc',
              })
          ]
      });


      //wavesurfer[trackid].drawBuffer();

      // Load audio from URL
      var wavepeaks = peaks;
      
      //wavesurfer.load(url, '', wavepeaks);
      //wavesurfer[trackid].load(url, wavepeaks);
      wavesurfer[trackid].load(url);

      wavesurfer[trackid].on('error', function(e) {
          console.warn(e);
      });
       

      // Zoom slider
      var slider = document.querySelector('[data-action="zoom"]');
      slider.value = wavesurfer[trackid].params.minPxPerSec;
      slider.min = wavesurfer[trackid].params.minPxPerSec;
      slider.addEventListener('input', function() {
          wavesurfer[trackid].zoom(Number(this.value));
      }); 
       

      // Play button
      //var button = document.querySelector('[data-action="play"]');
      //button.addEventListener('click', wavesurfer[trackid].playPause.bind(wavesurfer[trackid]));
      //  });
  }
 
/**
 * Use formatTimeCallback to style the notch labels as you wish, such
 * as with more detail as the number of pixels per second increases.
 *
 * Here we format as M:SS.frac, with M suppressed for times < 1 minute,
 * and frac having 0, 1, or 2 digits as the zoom increases.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override timeInterval, primaryLabelInterval and/or
 * secondaryLabelInterval so they all work together.
 *
 * @param: seconds
 * @param: pxPerSec
 */
function formatTimeCallback(seconds, pxPerSec) {
  
  /*
    var hms = time;   // your input string
    var a = hms.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

    //console.log(seconds);
    return seconds;*/
  
  
    seconds = Number(seconds);
    
    //alert(seconds);
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    // fill up seconds with zeroes
    var secondsStr = Math.round(seconds).toString();
    if (pxPerSec >= 25 * 10) {
        secondsStr = seconds.toFixed(2);
    } else if (pxPerSec >= 25 * 1) {
        secondsStr = seconds.toFixed(1);
    }

    if (minutes > 0) {
        if (seconds < 10) {
            secondsStr = '0' + secondsStr;
        }
        return `${minutes}:${secondsStr}`;
    }
    
    return secondsStr;
}

/**
 * Use timeInterval to set the period between notches, in seconds,
 * adding notches as the number of pixels per second increases.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override formatTimeCallback, primaryLabelInterval
 * and/or secondaryLabelInterval so they all work together.
 *
 * @param: pxPerSec
 */
function timeInterval(pxPerSec) {
    var retval = 1;
    if (pxPerSec >= 25 * 100) {
        retval = 0.01;
    } else if (pxPerSec >= 25 * 40) {
        retval = 0.025;
    } else if (pxPerSec >= 25 * 10) {
        retval = 0.1;
    } else if (pxPerSec >= 25 * 4) {
        retval = 0.25;
    } else if (pxPerSec >= 25) {
        retval = 1;
    } else if (pxPerSec * 5 >= 25) {
        retval = 5;
    } else if (pxPerSec * 15 >= 25) {
        retval = 15;
    } else {
        retval = Math.ceil(0.5 / pxPerSec) * 60;
    }
    return retval;
}

/**
 * Return the cadence of notches that get labels in the primary color.
 * EG, return 2 if every 2nd notch should be labeled,
 * return 10 if every 10th notch should be labeled, etc.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override formatTimeCallback, primaryLabelInterval
 * and/or secondaryLabelInterval so they all work together.
 *
 * @param pxPerSec
 */
function primaryLabelInterval(pxPerSec) {
    var retval = 1;
    if (pxPerSec >= 25 * 100) {
        retval = 10;
    } else if (pxPerSec >= 25 * 40) {
        retval = 4;
    } else if (pxPerSec >= 25 * 10) {
        retval = 10;
    } else if (pxPerSec >= 25 * 4) {
        retval = 4;
    } else if (pxPerSec >= 25) {
        retval = 1;
    } else if (pxPerSec * 5 >= 25) {
        retval = 5;
    } else if (pxPerSec * 15 >= 25) {
        retval = 15;
    } else {
        retval = Math.ceil(0.5 / pxPerSec) * 60;
    }
    return retval;
}

/**
 * Return the cadence of notches to get labels in the secondary color.
 * EG, return 2 if every 2nd notch should be labeled,
 * return 10 if every 10th notch should be labeled, etc.
 *
 * Secondary labels are drawn after primary labels, so if
 * you want to have labels every 10 seconds and another color labels
 * every 60 seconds, the 60 second labels should be the secondaries.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override formatTimeCallback, primaryLabelInterval
 * and/or secondaryLabelInterval so they all work together.
 *
 * @param pxPerSec
 */
function secondaryLabelInterval(pxPerSec) {
    // draw one every 10s as an example
    return Math.floor(10 / timeInterval(pxPerSec));
}