
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu");
  const mobile=document.querySelector(".mobile-nav");
  if(menu && mobile) menu.addEventListener("click",()=>mobile.classList.toggle("open"));

  document.querySelectorAll("[data-chooser]").forEach(chooser=>{
    let step=0, answers=[];
    const questions=[...chooser.querySelectorAll(".question")];
    const bar=chooser.querySelector(".progress span");
    const result=chooser.querySelector(".result");
    const output=chooser.querySelector(".result-text");
    function render(){
      questions.forEach((q,i)=>q.classList.toggle("active",i===step));
      if(bar) bar.style.width=((step+1)/questions.length*100)+"%";
    }
    chooser.querySelectorAll(".choice").forEach(btn=>{
      btn.addEventListener("click",()=>{
        answers[step]=btn.dataset.value;
        if(step<questions.length-1){step++;render();return}
        const type=answers.join(" ").toLowerCase();
        let title="Advanced Multi-Page Website";
        let text="A professional multi-page website with clear navigation, strong calls-to-action and a design built around your business.";
        let link="websites.html#advanced";
        if(type.includes("store")||type.includes("ecommerce")){
          title="E-Commerce Website"; text="A complete online store designed for selling products 24/7, with product pages, cart functionality and customer-focused shopping flow."; link="websites.html#ecommerce";
        }else if(type.includes("simple")){
          title="Simple Website"; text="A clean, professional website for businesses that need a strong online presence without unnecessary complexity."; link="websites.html#simple";
        }
        output.innerHTML=`<strong>${title}</strong><p>${text}</p><a class="btn primary" href="${link}">View Recommended Website</a>`;
        result.classList.add("show");
      })
    });
    render();
  });

  document.querySelectorAll("[data-social-chooser]").forEach(chooser=>{
    const buttons=chooser.querySelectorAll(".choice"), result=chooser.querySelector(".result"), output=chooser.querySelector(".result-text");
    buttons.forEach(b=>b.addEventListener("click",()=>{
      const v=b.dataset.value;
      let title="Small Business Development — R500/month";
      let text="2 custom HD posts per week, 1 sponsored targeted ad campaign per month, Story and targeted community-group posting, plus social platform management.";
      if(v==="medium"){ title="Medium Business — R1,000/month"; text="3 custom HD posts per week, 2 sponsored targeted ad campaigns per month, Story and targeted community-group posting, plus social platform management."; }
      if(v==="large"){ title="Large Business — R1,500/month"; text="5 custom HD posts per week, 2 sponsored targeted ad campaigns per month, Story and targeted community-group posting, plus social platform management."; }
      if(v==="ads"){ title="Additional Sponsored Campaigns — From R50"; text="If you need extra advertising beyond your plan, additional sponsored targeted campaigns are available from R50, depending on your campaign requirements."; }
      output.innerHTML=`<strong>${title}</strong><p>${text}</p><a class="btn primary" href="contact.html">Get Started</a>`;
      result.classList.add("show");
    }));
  });
});
