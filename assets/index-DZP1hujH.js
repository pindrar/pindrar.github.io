(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Pratama Indra Raswoko`,title:`Technical Lead · Senior Software Engineer`,tagline:`I'm a Technical Lead and Senior Software Engineer based in Indonesia with 7+ years specialising in React Native, React.js, and Next.js. I love building high-traffic products, mentoring engineers, and relentlessly improving performance across the full stack.`},t=[`React Native`,`React.js`,`Next.js`,`TypeScript`,`Node.js`,`GraphQL`,`PostgreSQL`,`CI/CD`],n=[{role:`Technical Lead (React Native)`,company:`Photon`,period:`2025 – Present`,highlight:`Led developers of a high-traffic e-commerce mobile app with 5M+ downloads. Delivered complex features: in-app product scanning, POS confirmation, and secure payment flows. Reduced UI rendering & API latency by 25%, boosted navigation speed 20%, cut technical debt 35%, and accelerated team delivery 25% via mentoring and workflow optimisation.`},{role:`Senior Software Engineer 2 (React Native)`,company:`Photon`,period:`Feb 2024 – Dec 2024`,highlight:`Delivered core e-commerce mobile features: pickup order management, order history, and membership lifecycle. Diagnosed and resolved payment processing issues at scale. Reduced critical issue resolution time by 30% with LogRocket & Scalyr. Oversaw secure authentication and account integrations.`},{role:`Senior Software Engineer 1 & 2 (React.js / Next.js)`,company:`Photon`,period:`Jul 2022 – Jan 2024`,highlight:`Developed the international projects across React.js and Next.js for a German pharmaceutical platform migration from Gatsby.js to Next.js with zero critical pre-production bugs. Delivered luxury e-commerce redesigns, healthcare platforms, and multi-country rollouts. Built an Atomic Design component library, accelerating UI delivery by 30%.`},{role:`Software Engineer & Senior SE 1 (React Native and Websites)`,company:`Photon`,period:`Nov 2018 – Jun 2022`,highlight:`Developed CMS-driven websites using Drupal and React.js for global FMCG brands. Built dynamic web components aligned with global brand standards and ensured site stability across multiple regions.`}],r=[{title:`Large-Scale E-commerce Mobile Platform (5M+ Downloads)`,stack:`React Native · Redux · LogRocket`,note:`Led and delivered high-impact mobile commerce features including in-app product scanning, POS confirmation, secure payment flows, pickup order management, order history, and membership lifecycle management. Improved performance, scalability, and production stability through optimization and observability tooling.`},{title:`German Pharmaceutical Web Platform Migration`,stack:`Next.js · Gatsby.js · Migration`,note:`Developed the architectural migration from Gatsby.js to Next.js, significantly improving build performance, dynamic content delivery, and scalability while maintaining zero critical bugs in pre-production.`},{title:`Luxury Fashion E-commerce Platform (Switzerland)`,stack:`Next.js · Contentful CMS · TypeScript`,note:`Delivered a redesigned, high-end e-commerce experience using Next.js and Contentful CMS, resolving legacy issues and enhancing performance, usability, and maintainability.`},{title:`Medical Appointment Booking System`,stack:`Next.js`,note:`Engineered high-concurrency appointment scheduling features with responsive UI and reliable booking logic, supporting critical healthcare workflows and end-user reliability.`},{title:`Military Exchange Services Mobile Application`,stack:`React Native · Firebase Crashlytics · IBM Acoustic`,note:`Developed and enhanced core mobile shopping features, maintained app health using Firebase Crashlytics, reduced post-release hotfixes by 40%, and integrated IBM Acoustic Content Manager and third-party APIs.`}],i=[{title:`Certificate of Recognition — Best Delivery`,period:`Oct 2024 – Dec 2024`},{title:`Unsung Hero`,period:`Photon`}],a={email:`pratamaindraraswoko@gmail.com`,linkedin:`https://www.linkedin.com/in/pratama-indra-raswoko`},o=[{id:`intro`,label:`Start`},{id:`about`,label:`Stats`},{id:`projects`,label:`Quests`},{id:`experience`,label:`Timeline`},{id:`skills`,label:`Power ups`},{id:`contact`,label:`Flag`}],s=[{value:`5M+`,label:`app downloads supported`},{value:`25%`,label:`latency reduced`},{value:`30%`,label:`faster issue resolution`}],c=e=>`<span class="icon" aria-hidden="true">${e}</span>`;function l(){return`<div class="cloud cloud-one" aria-hidden="true"></div><div class="cloud cloud-two" aria-hidden="true"></div><div class="cloud cloud-three" aria-hidden="true"></div>`}function u(e=2){return Array.from({length:e},(e,t)=>{let n=t+1;return`<span class="pipe pipe-up pipe-up-${n}" aria-hidden="true"><span class="pipe-lip"></span></span><span class="pipe pipe-down pipe-down-${n}" aria-hidden="true"><span class="pipe-lip"></span></span>`}).join(``)}function d(){return`
    <div class="bird-layer" aria-hidden="true">
      <div class="bird">
        <span class="bird-body"></span>
        <span class="bird-wing"></span>
        <span class="bird-eye"></span>
        <span class="bird-beak"></span>
      </div>
    </div>
  `}function f(e,t){return`
    <article class="quest-card reveal">
      <div class="quest-topline">
        <span>${e.stack}</span>
      </div>
      <h3>${e.title}</h3>
      <p>${e.note}</p>
    </article>
  `}function p(e,t){return`
    <article class="timeline-card reveal">
      <div class="timeline-stamp">
        <span>${String(t+1).padStart(2,`0`)}</span>
        <time>${e.period}</time>
      </div>
      <div>
        <h3>${e.role}</h3>
        <p class="company">${e.company}</p>
        <p>${e.highlight}</p>
      </div>
    </article>
  `}function m(){return o.map(e=>`<a href="#${e.id}" data-target="${e.id}">${e.label}</a>`).join(``)}function h(){let o=document.querySelector(`#app`);o.innerHTML=`
    <header class="game-hud">
      <a class="brand" href="#intro" data-target="intro" aria-label="Back to start">P.INDRA.R</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu ${c(`+`)}</button>
      <nav id="site-nav" class="site-nav" aria-label="Level navigation">
        ${m()}
      </nav>
      <div class="progress-wrap" aria-hidden="true"><span class="progress-bar"></span></div>
    </header>

    <main id="main-content" class="stage-shell" tabindex="-1">
      <div class="world" aria-label="Horizontal resume world">
        <section id="intro" class="level level-intro" aria-labelledby="intro-title" data-level>
          ${l()}
          ${u(1)}
          <div class="level-copy hero-copy reveal">
            <p class="eyebrow">Level 1 / Interactive resume</p>
            <h1 id="intro-title">${e.name}</h1>
            <p class="hero-title">${e.title}</p>
            <p class="hero-tagline">${e.tagline}</p>
            <div class="action-row">
              <a class="button button-primary" href="#projects" data-target="projects">Start quest ${c(`->`)}</a>
              <a class="button button-secondary" href="mailto:${a.email}">Email me ${c(`^`)}</a>
            </div>
            <p class="scroll-hint">Scroll down to fly right ${c(`->`)}</p>
          </div>
          <div class="ground" aria-hidden="true"></div>
        </section>

        <section id="about" class="level level-about" aria-labelledby="about-title" data-level>
          ${l()}
          ${u(2)}
          <div class="section-panel reveal">
            <p class="eyebrow">Level 2 / Scoreboard</p>
            <h2 id="about-title">Engineering with momentum and care.</h2>
            <p class="large-copy">I work where product ambition meets technical reality: making complex systems feel calm, fast, and dependable.</p>
          </div>
          <div class="stat-grid reveal">
            ${s.map(e=>`<article><strong>${e.value}</strong><span>${e.label}</span></article>`).join(``)}
          </div>
          <div class="ground" aria-hidden="true"></div>
        </section>

        <section id="projects" class="level level-projects" aria-labelledby="projects-title" data-level>
          ${u(2)}
          <div class="section-heading reveal">
            <p class="eyebrow">Level 3 / Selected quests</p>
            <h2 id="projects-title">Products built for real scale.</h2>
          </div>
          <div class="quest-grid">
            ${r.map((e,t)=>f(e,t)).join(``)}
          </div>
          <div class="ground" aria-hidden="true"></div>
        </section>

        <section id="experience" class="level level-experience" aria-labelledby="experience-title" data-level>
          ${u(2)}
          <div class="section-heading reveal">
            <p class="eyebrow">Level 4 / Timeline</p>
            <h2 id="experience-title">A decade in the details.</h2>
          </div>
          <div class="timeline-list">
            ${n.map((e,t)=>p(e,t)).join(``)}
          </div>
          <div class="ground" aria-hidden="true"></div>
        </section>

        <section id="skills" class="level level-skills" aria-labelledby="skills-title" data-level>
          ${u(2)}
          <div class="section-panel reveal">
            <p class="eyebrow">Level 5 / Power ups</p>
            <h2 id="skills-title">The stack behind the work.</h2>
          </div>
          <div class="skill-cloud reveal">
            ${t.map((e,t)=>`<span class="skill-tag tag-${t%4}">${e}</span>`).join(``)}
          </div>
          <div class="award-list reveal">
            <p class="eyebrow">Recognition</p>
            ${i.map(e=>`<article><span>${c(`*`)}</span><div><h3>${e.title}</h3><p>${e.period}</p></div></article>`).join(``)}
          </div>
          <div class="ground" aria-hidden="true"></div>
        </section>

        <section id="contact" class="level level-contact" aria-labelledby="contact-title" data-level>
          ${l()}
          ${u(1)}
          <div class="finish-gate" aria-hidden="true"><span></span></div>
          <div class="contact-panel reveal">
            <p class="eyebrow">Final level / Contact</p>
            <h2 id="contact-title">Let's build something worth shipping.</h2>
            <p>Have a product to improve, a team to support, or a difficult technical problem to untangle?</p>
            <div class="contact-links">
              <a href="mailto:${a.email}"><span>Email</span><strong>${a.email}</strong>${c(`->`)}</a>
              <a href="${a.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/pratama-indra-raswoko</strong>${c(`->`)}</a>
            </div>
          </div>
          <div class="ground" aria-hidden="true"></div>
        </section>
      </div>
    </main>

    ${d()}
  `}function g(){let e=document.querySelector(`.world`),t=document.querySelector(`.menu-toggle`),n=document.querySelector(`.site-nav`),r=[...document.querySelectorAll(`[data-target]`)],i=[...document.querySelectorAll(`[data-level]`)],a=document.querySelector(`.progress-bar`),o=window.matchMedia(`(prefers-reduced-motion: reduce)`),s=()=>window.matchMedia(`(min-width: 721px)`).matches,c=()=>o.matches?`auto`:`smooth`;function l(e){r.forEach(t=>{t.classList.toggle(`active`,t.dataset.target===e)})}function u(t){let n=document.getElementById(t);n&&(s()?e.scrollTo({left:n.offsetLeft,behavior:c()}):n.scrollIntoView({behavior:c(),block:`start`}),window.history.replaceState(null,``,`#${t}`),l(t))}r.forEach(e=>{e.addEventListener(`click`,r=>{let i=e.dataset.target;i&&(r.preventDefault(),t.setAttribute(`aria-expanded`,`false`),n.classList.remove(`is-open`),u(i))})}),t.addEventListener(`click`,()=>{let e=t.getAttribute(`aria-expanded`)===`true`;t.setAttribute(`aria-expanded`,String(!e)),n.classList.toggle(`is-open`,!e)});function d(){if(!s()){let e=document.documentElement.scrollHeight-window.innerHeight,t=e>0?window.scrollY/e:0;a.style.transform=`scaleX(${Math.min(Math.max(t,0),1)})`;return}let t=e.scrollWidth-e.clientWidth,n=t>0?e.scrollLeft/t:0;a.style.transform=`scaleX(${Math.min(Math.max(n,0),1)})`}function f(){let t=s()?e.scrollLeft+e.clientWidth/2:window.scrollY+window.innerHeight/2,n=i.reduce((e,n)=>{let r=s()?n.offsetLeft+n.offsetWidth/2:n.offsetTop+n.offsetHeight/2,i=Math.abs(t-r);return i<e.distance?{id:n.id,distance:i}:e},{id:i[0]?.id,distance:1/0});n.id&&l(n.id)}function p(){d(),f()}e.addEventListener(`scroll`,p,{passive:!0}),window.addEventListener(`scroll`,p,{passive:!0}),window.addEventListener(`resize`,p),e.addEventListener(`wheel`,t=>{if(!s()||Math.abs(t.deltaY)<=Math.abs(t.deltaX))return;t.preventDefault();let n=t.deltaMode===1?16:t.deltaMode===2?e.clientWidth:1;e.scrollLeft+=t.deltaY*n},{passive:!1}),window.addEventListener(`keydown`,t=>{if(!s()||t.key!==`ArrowRight`&&t.key!==`ArrowLeft`)return;t.preventDefault();let n=t.key===`ArrowRight`?1:-1;e.scrollBy({left:n*window.innerWidth*.86,behavior:c()})});let m=document.querySelector(`.bird`),h=()=>s()?e.scrollLeft:window.scrollY,g=0,_=0,v=h();function y(){let e=h(),t=e-v;v=e,t>0?_-=Math.min(t*.2,7):t<0&&(_+=Math.min(-t*.2,7)),_+=.5,_*=.9,g+=_;let n=Math.max(90,window.innerHeight*.2),r=s()?Math.min(n,window.innerHeight*.1):0;g>r?(g=r,_=0):g<-n&&(g=-n,_=0);let i=Math.max(Math.min(_*3.4,32),-28);m.style.transform=`translateY(${g.toFixed(2)}px) rotate(${i.toFixed(2)}deg)`,m.classList.toggle(`is-flapping`,t!==0),requestAnimationFrame(y)}o.matches||requestAnimationFrame(y);let b=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{root:s()?e:null,threshold:.16});document.querySelectorAll(`.reveal`).forEach(e=>{b.observe(e)}),window.location.hash?requestAnimationFrame(()=>u(window.location.hash.slice(1))):(l(`intro`),d())}h(),g();