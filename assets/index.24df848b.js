import{p as a,a as s,r as l,o as e,c as t,b as i,F as o,d,e as n,t as u,w as c,f as r,g as m,h,_ as p,i as f,j as v,k as g}from"./vendor.f45f064e.js";const w={data:()=>({audioElm:"",stopFlag:!1,switchItems:[{name:"关",class:"switch_0",value:0},{name:"1",class:"switch_1",value:1},{name:"2",class:"switch_2",value:2},{name:"3",class:"switch_3",value:3}],leafs:"leafs",radio:0,count:0}),beforeMount(){this.initAudioElm()},methods:{initAudioElm(){let a=new Audio;a.preload="metadata",a.src="/audio/fan.wav",a.load(),this.audioElm=a},radioChange(a){switch(this.leafs="leafs-"+a,this.count+=1,a){case 0:this.playSwitchAudio();break;default:this.stopFlag=!1,0===this.audioElm.currentTime||this.audioElm.currentTime===this.audioElm.duration?this.playFanAudio(0):this.playFanAudio()}},playSwitchAudio(){this.audioElm.ended||this.stopAudio()},playFanAudio(a=3.5){if(!this.stopFlag){this.audioElm.currentTime=a,this.audioElm.play();let s=this,l=this.audioElm.duration-this.audioElm.currentTime-1;setTimeout((function(){s.playFanAudio()}),1e3*l)}},stopAudio(){this.audioElm.currentTime=6,this.stopFlag=!0}}},E=c();a("data-v-5df064f6");const _={id:"fan"},b={class:"header"},y=i("div",{class:"circle"},null,-1),A=i("div",{class:"leaf-1"},null,-1),F=i("div",{class:"leaf-2"},null,-1),k=i("div",{class:"leaf-3"},null,-1),T=i("div",{class:"neck"},null,-1),V=i("div",{class:"footer"},null,-1),I={class:"switch-btn-group"};s();const x=E(((a,s,c,r,m,h)=>{const p=l("el-radio-button"),f=l("el-radio-group");return e(),t("div",_,[i("div",b,[(e(),t("div",{key:m.count,class:m.leafs},[y,A,F,k],2))]),T,V,i("div",I,[i(f,{modelValue:m.radio,"onUpdate:modelValue":s[1]||(s[1]=a=>m.radio=a),onChange:h.radioChange},{default:E((()=>[(e(!0),t(o,null,d(m.switchItems,((a,s)=>(e(),t(p,{key:s,class:a.class,modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,label:a.value},{default:E((()=>[n(u(a.name),1)])),_:2},1032,["class","modelValue","onUpdate:modelValue","label"])))),128))])),_:1},8,["modelValue","onChange"])])])}));w.render=x,w.__scopeId="data-v-5df064f6";var C=r({name:"app",data:()=>({title:"夏日清凉小风扇",description:"除了没有风，什么都好！",adText:"🍉",adImageLink:"https://fan.faxiaosi.com/img/aamic-m8v4o1.jpg"}),components:{Fan:w}});const j={id:"app"},U=i("br",null,null,-1),L={class:"footer"},S={style:{margin:"1rem"}},M={class:"animate-logo"},q={style:{margin:"1rem"}},z=i("a",{href:"https://ac.faxiaosi.com",target:"_blank"},[i("span",{class:"animate-logo"},"便携小空调")],-1);C.render=function(a,s,o,d,c,r){const h=l("fan"),p=l("el-button");return e(),t("div",j,[i("h3",{title:a.description},[n(u(a.title)+" ",1),U,i("small",null,u(a.description),1)],8,["title"]),i(h),i("div",L,[i("div",S,[i(p,null,{default:m((()=>[i("a",{href:a.adImageLink,target:"_blank"},[i("span",M,u(a.adText),1)],8,["href"])])),_:1})]),i("div",q,[i(p,null,{default:m((()=>[z])),_:1})])])])};const B=h(C);B.use(p),B.use(f),B.use(v),B.use(g),B.mount("#app");
