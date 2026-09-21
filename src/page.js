/* Page widgets for qualitative-research-methods, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Tabs: five approaches ----
document.querySelectorAll('#apptabs .tab').forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll('#apptabs .tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#approaches .panel').forEach(p=>p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.p).classList.add('active');
  };
});

// ---- Design selector ----
const NAMES={narrative:'Narrative Inquiry',pheno:'Phenomenology',gt:'Grounded Theory',ethno:'Ethnography',case:'Case Study'};
const WHY={
  narrative:'Your intent centers on an individual and the story of their experience over time — restory it into a coherent account.',
  pheno:'You want the shared essence of a single phenomenon across several people — in-depth interviews and bracketing are your tools.',
  gt:'You aim to build a theory of a process, grounded in data through constant comparison and theoretical sampling.',
  ethno:'You are studying the culture of a group in its setting — prolonged immersion and thick description lead the way.',
  case:'You are illuminating one bounded system in depth using multiple sources of evidence.'
};
const picks={};
document.querySelectorAll('#selector .q').forEach(q=>{
  const qi=q.dataset.q;
  q.querySelectorAll('.opt').forEach(o=>{
    o.onclick=()=>{
      q.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel'));
      o.classList.add('sel'); picks[qi]=o.dataset.v; evalSel();
    };
  });
});
function evalSel(){
  if(Object.keys(picks).length<3) return;
  const tally={};
  Object.values(picks).forEach(v=>tally[v]=(tally[v]||0)+1);
  let best=null,n=-1; for(const k in tally){ if(tally[k]>n){n=tally[k];best=k;} }
  document.getElementById('selName').textContent='Suggested approach: '+NAMES[best];
  let why=WHY[best];
  if(n<3) why+=' (Your answers spanned more than one tradition — a sign your question may need sharpening, or a hybrid/case design.)';
  document.getElementById('selWhy').textContent=why;
  document.getElementById('selResult').classList.add('show');
}

// ---- Coding walkthrough ----
const CW={
  quote:'"By the third week I just stopped raising my hand. It felt like the teacher already had her favorites, and I wasn\'t one of them."',
  steps:[
    'Participant\'s verbatim words, kept intact.',
    'IN VIVO / PROCESS: "stopping participation," "perceived favoritism"',
    'CATEGORY: Disengagement in response to perceived inequity',
    'THEME: Classroom belonging is negotiated through fairness'
  ],
  hints:[
    'We begin with the raw datum — the participant\'s exact words. Nothing is interpreted yet.',
    'First-cycle coding fractures the datum into concise concepts, staying close to the language.',
    'Related codes are grouped into a category that names the pattern across quotes.',
    'The category rises to a theme — an analytic claim that answers the research question.'
  ]
};
let cw=0;
function renderCW(){
  document.getElementById('cwQuote').textContent=CW.quote;
  for(let i=0;i<4;i++){
    document.getElementById('r'+i).textContent = i<=cw ? CW.steps[i] : '';
    document.querySelectorAll('.rung')[i].classList.toggle('on', i<=cw);
  }
  document.getElementById('cwHint').textContent=CW.hints[cw];
  document.getElementById('cwPrev').disabled = cw===0;
  document.getElementById('cwNext').textContent = cw===3 ? 'Restart' : 'Next step →';
}
document.getElementById('cwNext').onclick=()=>{ cw = cw===3 ? 0 : cw+1; renderCW(); };
document.getElementById('cwPrev').onclick=()=>{ if(cw>0){cw--;renderCW();} };
renderCW();

// ---- Trustworthiness scorer ----
const cks=document.querySelectorAll('#checklist .ck');
function scoreRigor(){
  let s=0; cks.forEach(c=>{ if(c.classList.contains('on')) s+=parseInt(c.dataset.w,10); });
  s=Math.min(100,s);
  document.getElementById('rigorFill').style.width=s+'%';
  const v=document.getElementById('rigorVerdict');
  if(s===0){v.textContent='Select strategies to score your design';v.style.color='var(--lr-muted)';}
  else if(s<35){v.textContent=s+'% — Emerging: add triangulation & an audit trail';v.style.color='var(--lr-bad)';}
  else if(s<70){v.textContent=s+'% — Solid: strengthen with member checking & reflexivity';v.style.color='var(--lr-warn)';}
  else{v.textContent=s+'% — Strong, defensible rigor across all four criteria';v.style.color='var(--lr-good)';}
}
cks.forEach(c=>c.onclick=()=>{c.classList.toggle('on');scoreRigor();});
scoreRigor();

// ---- Self-quiz: match the question to the approach ----
const QUIZ=[
  {q:'"What is the essence of the experience of grief for parents who have lost a child?"',a:'pheno'},
  {q:'"What theory explains how nurses decide to escalate a patient concern up the chain of command?"',a:'gt'},
  {q:'"How does one rural elementary school build and sustain its culture of collaboration across a school year?"',a:'ethno'},
  {q:'"What can we learn from an in-depth study of one district\'s response to a sudden school closure?"',a:'case'},
  {q:'"What is the life story of a refugee teacher, and how does she narrate her path into the profession?"',a:'narrative'}
];
const quizState={};
(function buildQuiz(){
  const wrap=document.getElementById('quizWrap');
  if(!wrap) return;
  QUIZ.forEach((item,i)=>{
    const q=document.createElement('div'); q.className='q';
    const p=document.createElement('p'); p.textContent=(i+1)+' · '+item.q; q.appendChild(p);
    const opts=document.createElement('div'); opts.className='opts';
    ['narrative','pheno','gt','ethno','case'].forEach(key=>{
      const b=document.createElement('button'); b.className='opt'; b.textContent=NAMES[key];
      b.onclick=()=>{
        if(quizState[i]!=null) return;
        quizState[i]=key;
        opts.querySelectorAll('.opt').forEach(x=>{x.style.pointerEvents='none';});
        if(key===item.a){ b.classList.add('sel'); b.style.borderColor='var(--lr-good)'; b.style.background='rgba(74,222,128,.16)'; }
        else{
          b.style.borderColor='var(--lr-bad)'; b.style.background='rgba(248,113,113,.16)';
          opts.querySelectorAll('.opt').forEach(x=>{ if(x.textContent===NAMES[item.a]){ x.style.borderColor='var(--lr-good)'; x.style.background='rgba(74,222,128,.16)'; } });
        }
        scoreQuiz();
      };
      opts.appendChild(b);
    });
    q.appendChild(opts); wrap.appendChild(q);
  });
})();
function scoreQuiz(){
  const answered=Object.keys(quizState).length;
  let correct=0; for(const i in quizState){ if(quizState[i]===QUIZ[i].a) correct++; }
  document.getElementById('quizResult').classList.add('show');
  document.getElementById('quizScore').textContent=correct+' / '+QUIZ.length+' correct';
  let msg;
  if(answered<QUIZ.length) msg='Keep going — '+(QUIZ.length-answered)+' to go.';
  else if(correct===QUIZ.length) msg='Perfect — you can read a central question and name its tradition. That alignment is the heart of a coherent design.';
  else msg='Review the master comparison table above: the verb and unit of analysis in each question point to its home tradition.';
  document.getElementById('quizMsg').textContent=msg;
}

// ---- FAQ accordion ----
document.querySelectorAll('#faqList .faq-item').forEach(item=>{
  const btn=item.querySelector('.faq-q');
  const ans=item.querySelector('.faq-a');
  const ico=item.querySelector('.faq-ico');
  if(!btn||!ans) return;
  btn.onclick=()=>{
    const open=ans.style.display==='block';
    ans.style.display=open?'none':'block';
    if(ico) ico.textContent=open?'+':'–';
  };
});

