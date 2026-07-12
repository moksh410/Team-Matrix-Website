/* ============================================================
   TEAM MATRIX — v2026 shared scripts
   All features auto-detect their markup; safe on every page.
   ============================================================ */

/* ===== boot sequence (only if #boot present) ===== */
(function(){
  const boot=document.getElementById('boot');if(!boot)return;
  const el=boot.querySelector('pre');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced||sessionStorage.getItem('booted')){boot.classList.add('done');return}
  const lines=['> initializing TEAM_MATRIX kernel v2026 ...','> loading modules: [awareness] [innovation] [defense]','> handshake with ISACA ... OK','> handshake with NULL ... OK','> requesting site access authorization ...','> contacting PRESIDENT: AKANKSHA PANDEY ...','> awaiting biometric confirmation _'];
  let i=0;
  (function next(){
    if(i<lines.length){el.textContent+=lines[i++]+'\n';setTimeout(next,340)}
    else setTimeout(showFingerprint,650)
  })();

  function showFingerprint(){
    const fp=document.createElement('div');
    fp.className='fp';
    fp.innerHTML='<div class="fp-wrap"><svg viewBox="0 0 24 24"><path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M6.5 9c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"/><path d="M3 10c0-5 4-9 9-9s9 4 9 9v2.5"/><path d="M6 21.5c-1.3-2.3-2-4.8-2-7.5V10"/><path d="M18 21.5c1.3-2.3 2-4.8 2-7.5V10"/><path d="M9 21.5c-.8-1.9-1.2-3.9-1.2-6V11a4.2 4.2 0 0 1 8.4 0v4.5c0 2.1-.4 4.1-1.2 6"/><path d="M12 18.5c-.4-1-.6-2-.6-3V11"/></svg><div class="scan"></div></div><div class="fp-status">SCANNING BIOMETRIC SIGNATURE...</div>';
    boot.appendChild(fp);
    setTimeout(()=>{
      const st=fp.querySelector('.fp-status');
      st.textContent='FINGERPRINT VERIFIED ✓';
      st.classList.add('ok');
      fp.classList.add('ok');
      el.textContent+='> biometric confirmation received\n> AKANKSHA PANDEY (President) — ACCESS APPROVED ✓\n';
      setTimeout(()=>fadeOut(fp),1100);
    },1900);
  }

  function fadeOut(fp){
    boot.classList.add('fade1');
    setTimeout(()=>{
      el.textContent='';
      fp.remove();
      boot.classList.remove('fade1');
      showUnlock();
    },480);
  }

  function showUnlock(){
    boot.classList.add('unlock-stage');
    let raf;
    if(!reduced){
      const rc=document.createElement('canvas');rc.className='boot-rain';
      boot.insertBefore(rc,boot.firstChild);
      const rx=rc.getContext('2d');
      const rw=rc.width=innerWidth,rh=rc.height=innerHeight;
      rx.fillStyle='#020402';rx.fillRect(0,0,rw,rh);
      const fs=15,cols=Math.floor(rw/fs);
      const rdrops=Array(cols).fill(0).map(()=>Math.random()*-40);
      const chars='アカサタナハマヤラワ0123456789ABCDEF{}[]<>/$#@%&*+=?';
      (function rdraw(){
        raf=requestAnimationFrame(rdraw);
        rx.fillStyle='rgba(2,6,3,0.07)';rx.fillRect(0,0,rw,rh);
        rx.font=fs+'px monospace';
        for(let i=0;i<cols;i++){
          rx.fillStyle=Math.random()>.97?'#d8ffe0':'#00ff41';
          rx.globalAlpha=Math.random()*.5+.4;
          rx.fillText(chars[Math.random()*chars.length|0],i*fs,rdrops[i]*fs);
          rx.globalAlpha=1;
          if(rdrops[i]*fs>rh&&Math.random()>.96)rdrops[i]=0;
          rdrops[i]+=2;
        }
      })();
    }
    const fp=document.createElement('div');
    fp.className='fp big';
    fp.innerHTML='<div class="fp-wrap lock"><svg viewBox="0 0 24 24"><rect class="body" x="4.5" y="10.5" width="15" height="10" rx="2"/><path class="shackle" d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5"/><circle class="keyhole" cx="12" cy="15" r="1.3"/></svg></div><div class="fp-status">UNLOCKING SECURE ACCESS...</div>';
    boot.appendChild(fp);
    const flash=document.createElement('div');flash.className='unlock-flash';boot.appendChild(flash);
    const title=document.createElement('div');title.className='unlock-title';title.textContent='ACCESS UNLOCKED';boot.appendChild(title);
    requestAnimationFrame(()=>{
      setTimeout(()=>{
        fp.querySelector('.lock').classList.add('open');
        const st=fp.querySelector('.fp-status');
        setTimeout(()=>{
          st.textContent='ACCESS UNLOCKED ✓';
          st.classList.add('ok');
          fp.classList.add('ok');
          flash.classList.add('go');
          title.classList.add('show');
          setTimeout(()=>{
            boot.classList.add('done');sessionStorage.setItem('booted','1');
            if(raf)cancelAnimationFrame(raf);
          },1500)
        },550);
      },400);
    });
  }
})();

/* ===== digital rain (only if #rain present) ===== */
(function(){
  const c=document.getElementById('rain');if(!c)return;
  const x=c.getContext('2d');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w,h,cols,drops;const fs=15;
  const chars='アカサタナハマヤラワ0123456789ABCDEF{}[]<>/$#@%&*+=?';
  function size(){w=c.width=innerWidth;h=c.height=innerHeight;cols=Math.floor(w/fs);drops=Array(cols).fill(1).map(()=>Math.random()*-80)}
  size();addEventListener('resize',size);
  if(reduced){x.fillStyle='#040804';x.fillRect(0,0,w,h);return}
  let last=0;
  function draw(t){
    requestAnimationFrame(draw);
    const boost=window.__rainBoost;
    if(t-last<(boost?34:66))return;last=t;
    x.fillStyle=boost?'rgba(4,8,4,0.05)':'rgba(4,8,4,0.08)';x.fillRect(0,0,w,h);
    x.font=fs+'px monospace';
    for(let i=0;i<cols;i++){
      const ch=chars[Math.random()*chars.length|0];
      x.fillStyle=Math.random()>.975?'#d8ffe0':'#00ff41';
      x.globalAlpha=boost?Math.random()*.4+.55:Math.random()*.5+.35;
      x.fillText(ch,i*fs,drops[i]*fs);
      x.globalAlpha=1;
      if(drops[i]*fs>h&&Math.random()>.974)drops[i]=0;
      drops[i]+=boost?2.2:1;
    }
  }
  requestAnimationFrame(draw);
})();

/* ===== typed line (only if #typed present) ===== */
(function(){
  const el=document.getElementById('typed');if(!el)return;
  let msgs;
  try{msgs=JSON.parse(el.dataset.msgs)}catch(e){msgs=null}
  msgs=msgs||['$ sudo secure --the-digital-future','$ ./hack_the_mindset --ethical','$ join us. learn. break. defend.','$ echo "awareness > everything"'];
  let m=0,i=0,del=false;
  (function tick(){
    const s=msgs[m];
    el.textContent=s.slice(0,i);
    if(!del&&i<s.length){i++;setTimeout(tick,55)}
    else if(!del){del=true;setTimeout(tick,2100)}
    else if(i>0){i--;setTimeout(tick,22)}
    else{del=false;m=(m+1)%msgs.length;setTimeout(tick,350)}
  })();
})();

/* ===== ticker: duplicate track for seamless loop ===== */
document.querySelectorAll('.ticker .track').forEach(t=>{t.innerHTML+=t.innerHTML});

/* ===== mobile menu ===== */
(function(){
  const b=document.getElementById('burger'),m=document.getElementById('menu');
  if(!b||!m)return;
  b.addEventListener('click',()=>m.classList.toggle('open'));
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>m.classList.remove('open')));
})();

/* ===== generic tab groups: any [data-tabs] container with button[data-t] + .tab-pane ids ===== */
document.querySelectorAll('[data-tabs]').forEach(group=>{
  const btns=group.querySelectorAll('button[data-t]');
  btns.forEach(btn=>btn.addEventListener('click',()=>{
    btns.forEach(b=>b.classList.remove('on'));
    group.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('on'));
    btn.classList.add('on');
    const pane=group.querySelector('#'+btn.dataset.t);
    if(pane)pane.classList.add('on');
  }));
});

/* ===== reveal on scroll + animated counters ===== */
(function(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-n]').forEach(n=>{
      if(n.dataset.done)return;n.dataset.done=1;
      const end=+n.dataset.n,t0=performance.now(),dur=1600;
      (function step(t){
        const p=Math.min((t-t0)/dur,1),v=Math.floor(end*(1-Math.pow(1-p,3)));
        n.textContent=v+(p===1&&n.hasAttribute('data-plus')?'+':'');
        if(p<1)requestAnimationFrame(step);
      })(t0);
    });
    io.unobserve(e.target);
  }),{threshold:.15});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
})();

/* ===== console banner (for the curious) ===== */
(function(){
  try{
    console.log('%c TEAM MATRIX ','background:#00ff41;color:#000;font-size:22px;font-weight:bold;font-family:monospace');
    console.log('%c> curious enough to open the console? we like that.\n> go back to the page, press ` (backtick) and type: help','color:#0fae3c;font-family:monospace;font-size:13px');
  }catch(e){}
})();

/* ===== hidden terminal easter egg (press ` to open) ===== */
(function(){
  var FLAG='MATRIX{y0u_t00k_th3_r3d_p1ll}';
  var built=false,box,log,inp;
  var pages={home:'index.html',about:'aboutus.html',events:'events.html',team:'wholeteam.html',alumni:'alumni.html',contact:'contactus.html',cyberon:'cyberon25.html',privathon:'privathon.html'};

  var cmds={
    help:function(){return [
      'available commands:',
      '  whoami          who are you?',
      '  ls              list site pages',
      '  open <page>     jump to a page',
      '  join            how to join team matrix',
      '  matrix          ...',
      '  flag            ???',
      '  decrypt <blob>  decode an encrypted blob',
      '  sudo <x>        try your luck',
      '  clear           clear terminal',
      '  exit            close terminal']},
    whoami:function(){return ['guest@teammatrix — just another curious mind. for now.','(see "join" to change that)']},
    ls:function(){return [Object.keys(pages).join('  ')]},
    open:function(a){
      if(pages[a]){location.href=pages[a];return ['opening '+a+' ...']}
      return ['unknown page: '+(a||'<none>')+'  — try "ls"']},
    join:function(){return [
      'we recruit every intake season.',
      'mail teammatrix@scit.edu — subject: JOIN <your name>',
      'tell us what you broke. or built. ideally both.']},
    sudo:function(){return ['permission denied — this is OUR mainframe. nice try though.']},
    matrix:function(){return ['wake up, neo...','the matrix has you.','follow the white rabbit.']},
    flag:function(){return ['scanning ... encrypted blob found:','  '+btoa(FLAG),'maybe try: decrypt <blob>']},
    decrypt:function(a){
      if(!a)return ['usage: decrypt <blob>'];
      try{var out=atob(a);return [out, out===FLAG?'>> flag captured! DM @teammatrixscit a screenshot to claim bragging rights.':'']}
      catch(e){return ['decryption failed: invalid base64.']}},
    clear:function(){log.innerHTML='';return []},
    exit:function(){box.classList.remove('open');return []}
  };

  function print(lines,cls){
    lines.forEach(function(l){
      if(l==='')return;
      var d=document.createElement('div');
      if(cls)d.className=cls;
      d.textContent=l;
      log.appendChild(d);
    });
    log.scrollTop=log.scrollHeight;
  }

  function run(raw){
    var parts=raw.trim().split(/\s+/),c=parts[0]?parts[0].toLowerCase():'';
    if(!c)return;
    print(['matrix@guest:~$ '+raw],'in');
    if(cmds[c])print(cmds[c](parts.slice(1).join(' ')));
    else print(['command not found: '+c+'  — try "help"']);
  }

  function build(){
    box=document.createElement('div');box.id='mxterm';
    box.innerHTML='<div class="t-log"></div><div class="t-row"><span>matrix@guest:~$</span><input type="text" autocomplete="off" spellcheck="false" aria-label="terminal input"></div>';
    document.body.appendChild(box);
    log=box.querySelector('.t-log');inp=box.querySelector('input');
    inp.addEventListener('keydown',function(e){
      if(e.key==='Enter'){run(inp.value);inp.value=''}
      if(e.key==='Escape')box.classList.remove('open');
    });
    print(['TEAM MATRIX secure shell — unauthorized access is... encouraged.','type "help" to begin_']);
    built=true;
  }

  addEventListener('keydown',function(e){
    if(e.key!=='`')return;
    var t=e.target.tagName;
    if(t==='INPUT'||t==='TEXTAREA')return;
    e.preventDefault();
    if(!built)build();
    box.classList.toggle('open');
    if(box.classList.contains('open'))inp.focus();
  });
})();

/* ===== lightbox for .gallery links ===== */
(function(){
  const links=[...document.querySelectorAll('.gallery a, a.lightbox-trigger')];
  if(!links.length)return;
  const lb=document.createElement('div');lb.id='lightbox';
  lb.innerHTML='<button class="lb-x" aria-label="Close">×</button><button class="lb-p" aria-label="Previous">‹</button><img alt=""><button class="lb-n" aria-label="Next">›</button><div class="lb-bar"></div>';
  document.body.appendChild(lb);
  const img=lb.querySelector('img'),bar=lb.querySelector('.lb-bar');
  let cur=0;
  function show(i){
    cur=(i+links.length)%links.length;
    img.src=links[cur].getAttribute('href');
    bar.textContent='[ '+(cur+1)+' / '+links.length+' ]';
    lb.classList.add('open');
  }
  links.forEach((a,i)=>a.addEventListener('click',e=>{e.preventDefault();show(i)}));
  lb.querySelector('.lb-x').addEventListener('click',()=>lb.classList.remove('open'));
  lb.querySelector('.lb-p').addEventListener('click',()=>show(cur-1));
  lb.querySelector('.lb-n').addEventListener('click',()=>show(cur+1));
  lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
  addEventListener('keydown',e=>{
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')lb.classList.remove('open');
    if(e.key==='ArrowLeft')show(cur-1);
    if(e.key==='ArrowRight')show(cur+1);
  });
})();
/* ===== live system status widget ===== */
(function(){
  if(document.getElementById('sysstat'))return;
  const box=document.createElement('div');box.id='sysstat';
  box.innerHTML='<div class="ss-row"><span>THREATS BLOCKED</span><b id="ss-threats">0</b></div><div class="ss-row"><span>SESSION UPTIME</span><b id="ss-up">00:00:00</b></div><div class="ss-row"><span>NODE STATUS</span><b class="ss-ok">SECURE</b></div>';
  document.body.appendChild(box);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let threats=1337+Math.floor(Math.random()*40);
  const tEl=box.querySelector('#ss-threats'),uEl=box.querySelector('#ss-up');
  tEl.textContent=threats.toLocaleString();
  const start=Date.now();
  function pad(n){return String(n).padStart(2,'0')}
  function tick(){
    const s=Math.floor((Date.now()-start)/1000);
    uEl.textContent=pad(Math.floor(s/3600))+':'+pad(Math.floor(s/60)%60)+':'+pad(s%60);
  }
  tick();setInterval(tick,1000);
  if(!reduced){
    setInterval(function(){
      if(Math.random()>.6){
        threats++;tEl.textContent=threats.toLocaleString();
        tEl.classList.add('bump');setTimeout(function(){tEl.classList.remove('bump')},300);
      }
    },4000);
  }
})();

/* ===== decrypt-to-reveal text ===== */
(function(){
  const GLYPHS='アカサタナハマヤラワ01<>/$#@%&*';
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced)return;
  function scrambleText(node){
    if(!node)return;
    const fin=node.textContent;if(!fin||!fin.trim())return;
    let frame=0;const total=Math.max(10,Math.min(fin.length,28));
    (function tick(){
      let out='';
      for(let i=0;i<fin.length;i++){
        if(i<(frame/total)*fin.length)out+=fin[i];
        else if(fin[i]===' ')out+=' ';
        else out+=GLYPHS[Math.floor(Math.random()*GLYPHS.length)];
      }
      node.textContent=out;
      if(frame++<total)requestAnimationFrame(tick);
      else node.textContent=fin;
    })();
  }
  document.querySelectorAll('.hero .sub, .page-hero .sub').forEach(function(el){
    setTimeout(function(){scrambleText(el)},700);
  });
  const terms=document.querySelectorAll('.term');
  if(terms.length){
    const io2=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        scrambleText(e.target.querySelector('.term-bar span'));
        io2.unobserve(e.target);
      });
    },{threshold:.3});
    terms.forEach(function(t){io2.observe(t)});
  }
})();


