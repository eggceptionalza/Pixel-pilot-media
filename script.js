
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
      let title="Social Media Management — R500/month";
      let text="A consistent social media presence with professional content planning, posting and page management.";
      if(v==="growth") text="Ideal for businesses that want stronger visibility, consistent content and active audience growth.";
      if(v==="ads") text="Targeted advertising support to put your offers in front of the right audience and turn attention into enquiries.";
      output.innerHTML=`<strong>${title}</strong><p>${text}</p><a class="btn primary" href="contact.html">Get Started</a>`;
      result.classList.add("show");
    }));
  });
});
