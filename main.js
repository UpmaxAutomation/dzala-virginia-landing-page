const header=document.getElementById('site-header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>8),{passive:true});

// Mobile menu (only present on the full landing page)
const menuBtn=document.getElementById('menu-btn');
const mobileNav=document.getElementById('mobile-nav');
if(menuBtn&&mobileNav){
  menuBtn.addEventListener('click',()=>{
    const open=mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open);
    menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobileNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');
  }));
}

// Scroll reveal (matches .reveal and [data-reveal])
const io=new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:.1,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.reveal,[data-reveal]').forEach(el=>io.observe(el));

const form=document.getElementById('lead-form');
form.addEventListener('submit',(ev)=>{
  ev.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return;}
  // TODO: POST to real CRM/endpoint here before launch.
  document.getElementById('form-fields').style.display='none';
  document.getElementById('form-ok').classList.add('show');
  document.getElementById('form-ok').scrollIntoView({behavior:'smooth',block:'center'});
});
