/* ============================================================
   TEAM MATRIX — Alumni Mainframe
   Data + decrypt-style renderer for alumni.html
   To add a new batch: append entries here with the new batch
   string, then add a matching button in alumni.html.
   ============================================================ */

const alumniData = [
  // Batch 2024-26
  { name: "Anubhav Mathur", batch: "2024-26", linkedin: "https://www.linkedin.com/in/anubhav-mathur-a3814b18a", role: "President" },
  { name: "Krutika Shetty", batch: "2024-26", linkedin: "https://www.linkedin.com/in/krutikashetty", role: "Vice President" },
  { name: "Isha Chavan", batch: "2024-26", linkedin: "https://www.linkedin.com/in/isha-chavan-81a444208", role: "Treasurer" },
  { name: "Sagar Sharma", batch: "2024-26", linkedin: "https://www.linkedin.com/in/sagarsharma1999", role: "Secretary" },
  { name: "Arnima Duhan", batch: "2024-26", linkedin: "https://www.linkedin.com/in/arnima-duhan-76baa51ab", role: "Student Council Member" },
  { name: "Piyush Patil", batch: "2024-26", linkedin: "https://www.linkedin.com/in/piyushpatil98", role: "NULL Community Leader" },
  { name: "Parth Dawle", batch: "2024-26", linkedin: "https://www.linkedin.com/in/parth-dawle-68306a1b7", role: "NULL Community Leader" },
  { name: "Moksh Mehta", batch: "2024-26", linkedin: "http://linkedin.com/in/mokshmehta410", role: "SPOC Technical" },
  { name: "Josiah Nunes", batch: "2024-26", linkedin: "https://www.linkedin.com/in/josiah-nunes", role: "SPOC Web & Media" },
  { name: "Nikhil Jain", batch: "2024-26", linkedin: "https://www.linkedin.com/in/nikhil-jain-622807211", role: "SPOC Sponsorship" },
  { name: "Deepti Sharma", batch: "2024-26", linkedin: "https://www.linkedin.com/in/deepti-sharma-53b0912ba", role: "SPOC Events" },
  { name: "Avik Dawn", batch: "2024-26", linkedin: "https://www.linkedin.com/in/avik-dawn-986531170", role: "SPOC Panel Discussion" },
  { name: "Harsh Nautiyal", batch: "2024-26", linkedin: "https://www.linkedin.com/in/harshnautiyal20", role: "SPOC PR" },
  { name: "Ankita Maurya", batch: "2024-26", linkedin: "https://www.linkedin.com/in/ankita-maurya-a74a77216", role: "SPOC Creatives" },
  { name: "Aaditya Nisal", batch: "2024-26", linkedin: "https://www.linkedin.com/in/aaditya-nisal", role: "Core Team Member" },
  { name: "Angshuja Sengupta", batch: "2024-26", linkedin: "https://www.linkedin.com/in/angshuja-sengupta-406bb9215", role: "Core Team Member" },
  { name: "Akshat Singhai", batch: "2024-26", linkedin: "https://www.linkedin.com/in/akshat-singhai-8285b286", role: "Core Team Member" },
  { name: "Janhavi Parab", batch: "2024-26", linkedin: "https://www.linkedin.com/in/janhaviparab", role: "Core Team Member" },
  { name: "Nilabha Sadhu", batch: "2024-26", linkedin: "https://www.linkedin.com/in/nilabha-sadhu-988b07241", role: "Core Team Member" },
  { name: "Vasundhra Murugan", batch: "2024-26", linkedin: "https://www.linkedin.com/in/vasundhra-murugan-715a861b0", role: "Core Team Member" },

  // Batch 2023-25
  { name: "Sayali Dabhade", batch: "2023-25", linkedin: "https://www.linkedin.com/in/sayali-dabhade-9975b9168", role: "President" },
  { name: "Apoorav Sharma", batch: "2023-25", linkedin: "https://www.linkedin.com/in/apoorav-sharma-521b70a9", role: "Vice President" },
  { name: "Riya Jain", batch: "2023-25", linkedin: "https://www.linkedin.com/in/riya-jain-bb68a31b5", role: "Secretary" },
  { name: "Pranavi Sodagiri", batch: "2023-25", linkedin: "https://www.linkedin.com/in/pranavi-sodagiri-5158b1255/", role: "Treasurer" },
  { name: "Nilotpal Roy", batch: "2023-25", linkedin: "https://www.linkedin.com/in/nilotpal-roy-05", role: "Student Council & NULL Community Leader" },
  { name: "Shailendra Singh Sachan", batch: "2023-25", linkedin: "https://www.linkedin.com/in/shailendra-singh-sachan-b8205b184", role: "NULL Community Leader" },
  { name: "Arabinda Mishra", batch: "2023-25", linkedin: "https://www.linkedin.com/in/arvinda98", role: "SPOC Web & Media" },
  { name: "Swapnil Joshi", batch: "2023-25", linkedin: "https://www.linkedin.com/in/swapniljoshi827", role: "SPOC Events" },
  { name: "Kunal Tewari", batch: "2023-25", linkedin: "https://www.linkedin.com/in/kunaltewari", role: "SPOC Sponsorship & PR" },
  { name: "Harsh Oswal", batch: "2023-25", linkedin: "https://www.linkedin.com/in/harsh-oswal-4155aa189", role: "SPOC Technical" },
  { name: "Zeba Shaikh", batch: "2023-25", linkedin: "https://www.linkedin.com/in/zeba-shaikh-4374q", role: "SPOC Panel Discussion" },
  { name: "Ashutosh Raghav", batch: "2023-25", linkedin: "https://www.linkedin.com/in/ashutosh-raghav-110a89211", role: "SPOC Finance" },
  { name: "Shreejika Raja", batch: "2023-25", linkedin: "https://www.linkedin.com/in/shreejika-raja-62a566210", role: "SPOC Creatives" },
  { name: "Kashmira Takey", batch: "2023-25", linkedin: "https://www.linkedin.com/in/kashmira-takey-b0129b16b", role: "SPOC Content Writer" },
  { name: "Anuska Banerjee", batch: "2023-25", linkedin: "https://www.linkedin.com/in/anuska-banerjee-49b361179", role: "Core Team Member" },
  { name: "Snigdha Gampala", batch: "2023-25", linkedin: "https://www.linkedin.com/in/snigdha-gampala-6a8053232", role: "Core Team Member" },
  { name: "Sakshi Pendharkar", batch: "2023-25", linkedin: "https://www.linkedin.com/in/sakshi-pendharkar", role: "Core Team Member" },
  { name: "Siddharth Mahapatra", batch: "2023-25", linkedin: "https://www.linkedin.com/in/siddharth-m-a601a113a", role: "Core Team Member" },
  { name: "Adwait Kandarkar", batch: "2023-25", linkedin: "https://www.linkedin.com/in/adwait-kandarkar-9b151b20b", role: "Core Team Member" },
  { name: "Devanshee Pathak", batch: "2023-25", linkedin: "https://www.linkedin.com/in/devanshee-pathak-9242a2156", role: "Core Team Member" },

  // Batch 2022-24
  { name: "Atif Nawaz", batch: "2022-24", linkedin: "https://www.linkedin.com/in/atif-nawaz-26b35519b", role: "President" },
  { name: "Ketaki Patil", batch: "2022-24", linkedin: "https://www.linkedin.com/in/ketaki-patil-ab8a9115a", role: "Vice President" },
  { name: "Nikita Salve", batch: "2022-24", linkedin: "https://www.linkedin.com/in/nikita-salve", role: "Secretary" },
  { name: "Pranay Agarwal", batch: "2022-24", linkedin: "https://www.linkedin.com/in/pranay-agarwal-a9330417a", role: "Treasurer" },
  { name: "Sushant Anil Parab", batch: "2022-24", linkedin: "https://www.linkedin.com/in/sushant-parab-7601841b2", role: "Student Council Member" },
  { name: "Vansh Makhija", batch: "2022-24", linkedin: "https://www.linkedin.com/in/vansh-makhija-1594a222a", role: "SPOC Web & Media" },
  { name: "Shradha Chandra", batch: "2022-24", linkedin: "https://www.linkedin.com/in/shradha-chandra-6ab398245", role: "SPOC Events" },
  { name: "Megh Sawke", batch: "2022-24", linkedin: "https://www.linkedin.com/in/megh-sawke", role: "SPOC Sponsorship & PR" },
  { name: "Nupoor Deshpande", batch: "2022-24", linkedin: "https://www.linkedin.com/in/nupoor-deshpande-6596b2114", role: "SPOC Technical" },
  { name: "Amey Deshmukh", batch: "2022-24", linkedin: "https://www.linkedin.com/in/amey-deshmukh-59b0381b3", role: "SPOC Panel Discussion" },
  { name: "Mansi Yagyseni", batch: "2022-24", linkedin: "https://www.linkedin.com/in/mansi-y-75b223130", role: "SPOC Finance" },
  { name: "Aditi Vohra", batch: "2022-24", linkedin: "https://www.linkedin.com/in/aditi-vohra-52a83220b", role: "SPOC Creatives" },
  { name: "Puneet Mishra", batch: "2022-24", linkedin: "https://www.linkedin.com/in/puneet-mishra-20900512b", role: "Core Team Member" },
  { name: "Sachin Sivadasan", batch: "2022-24", linkedin: "https://www.linkedin.com/in/sachin-sivadasan-ba012a165", role: "Core Team Member" },
  { name: "Abhipraya Deo Singh", batch: "2022-24", linkedin: "https://www.linkedin.com/in/abhipraya-deo-singh", role: "Core Team Member" },
  { name: "Nitish Jha", batch: "2022-24", linkedin: "https://www.linkedin.com/in/nitish-jha-44b130170", role: "Core Team Member" },
  { name: "Ratish Sawardekar", batch: "2022-24", linkedin: "https://www.linkedin.com/in/ratish-sawardekar-8515a8138", role: "Core Team Member" },
  { name: "Piyush Dhamija", batch: "2022-24", linkedin: "https://www.linkedin.com/in/piyush-dhamija", role: "Core Team Member" },
  { name: "Prem Chhatri", batch: "2022-24", linkedin: "https://www.linkedin.com/in/prem-chhatri-16221b160", role: "Core Team Member" },
  { name: "Bhavik Upmanyu", batch: "2022-24", linkedin: "https://www.linkedin.com/in/bhavik-upamanyu", role: "Core Team Member" },
  { name: "Dibya Jyoti Rout", batch: "2022-24", linkedin: "https://www.linkedin.com/in/dibyajyotirout", role: "Core Team Member" },
  { name: "Saikat Das", batch: "2022-24", linkedin: "https://www.linkedin.com/in/saikat-das-2b9a68187", role: "Core Team Member" },
  { name: "Ambika Jain", batch: "2022-24", linkedin: "https://www.linkedin.com/in/ambika-jain-226103171", role: "Core Team Member" },
  { name: "Tushar Maithani", batch: "2022-24", linkedin: "https://www.linkedin.com/in/tushar-maithani-19b3a3165", role: "Core Team Member" },
  { name: "Saujannya Kale", batch: "2022-24", linkedin: "https://www.linkedin.com/in/saujannya-k-900954113", role: "Core Team Member" }
];

/* ===== mainframe renderer ===== */
(function(){
  var grid=document.getElementById('alumGrid');
  if(!grid)return;
  var status=document.getElementById('alumStatus');
  var search=document.getElementById('alumSearch');
  var searchWrap=document.getElementById('alumSearchWrap');
  var tabs=document.querySelectorAll('.batch-tabs button');
  var GLYPHS='アカサタナハマヤラワ01<>/$#@%&*';
  var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var currentBatch=null;

  function initials(n){
    return n.split(/\s+/).map(function(w){return w[0]}).slice(0,2).join('').toUpperCase();
  }

  function card(a,i){
    var el=document.createElement('a');
    el.className='alum';
    el.href=a.linkedin;el.target='_blank';el.rel='noopener';
    el.style.opacity='0';el.style.transform='translateY(18px)';
    var html='<div class="av">'+initials(a.name)+'</div>';
    html+='<div><h4 data-final="'+a.name.split('"').join('')+'">'+a.name+'</h4>';
    html+='<span>'+a.role+'</span>';
    html+='<span class="lnk">in/ open dossier &rarr;</span></div>';
    el.innerHTML=html;
    setTimeout(function(){
      el.style.transition='opacity .4s ease, transform .4s ease';
      el.style.opacity='1';el.style.transform='none';
      if(!reduced&&i<10)scramble(el.querySelector('h4'));
    },Math.min(26*i,600));
    return el;
  }

  /* text scramble: glyphs resolve into the real name */
  function scramble(node){
    var fin=node.dataset.final,frame=0;
    var total=Math.max(8,Math.min(fin.length,16));
    (function tick(){
      var out='';
      for(var i=0;i<fin.length;i++){
        if(i<(frame/total)*fin.length){out+=fin[i]}
        else if(fin[i]===' '){out+=' '}
        else{out+=GLYPHS[Math.floor(Math.random()*GLYPHS.length)]}
      }
      node.textContent=out;
      if(frame++<total)requestAnimationFrame(tick);
      else node.textContent=fin;
    })();
  }

  function typeStatus(msg,then){
    if(reduced){status.textContent=msg;if(then)then();return}
    var i=0;status.textContent='';
    (function t(){
      if(i<msg.length){status.textContent+=msg[i++];setTimeout(t,16)}
      else if(then)then();
    })();
  }

  function render(batch,query){
    grid.innerHTML='';
    var list=alumniData.filter(function(a){return a.batch===batch});
    if(query){
      var q=query.toLowerCase();
      list=list.filter(function(a){
        return a.name.toLowerCase().indexOf(q)>-1||a.role.toLowerCase().indexOf(q)>-1;
      });
    }
    if(!list.length){
      grid.innerHTML='<div class="prompt" style="grid-column:1/-1;text-align:center">&gt; no records match query_</div>';
      return;
    }
    list.forEach(function(a,i){grid.appendChild(card(a,i))});
  }

  tabs.forEach(function(btn){
    btn.addEventListener('click',function(){
      tabs.forEach(function(b){b.classList.remove('on')});
      btn.classList.add('on');
      currentBatch=btn.dataset.batch;
      search.value='';
      searchWrap.style.display='flex';
      grid.innerHTML='';
      var n=alumniData.filter(function(a){return a.batch===currentBatch}).length;
      typeStatus('> decrypting personnel records ['+currentBatch+'] ... '+n+' files recovered',function(){render(currentBatch)});
    });
  });

  search.addEventListener('input',function(){if(currentBatch)render(currentBatch,search.value)});
})();
