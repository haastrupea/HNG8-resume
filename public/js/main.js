// When ready... hide address bR ON MOBILE
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});


//sidebar toggle
const toggler=document.querySelector('.left-collapse');
    toggler.addEventListener("click",()=>{
    toggler.classList.toggle("opened");
    document.querySelector("#left-part-wrp").classList.toggle("opened");
    document.querySelector("#right-part-wrp").classList.toggle("opened");
    },false)
//mobile nav toggle
const mNavtoggler=document.querySelector('#mobi-nav-toggler');
    mNavtoggler.addEventListener("click",()=>{
    mNavtoggler.classList.toggle("show");
    document.querySelector(".menu-item.navbar-collapse").classList.toggle("show");
    },false)

const navLinks=document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(navLink=>{
        navLink.addEventListener('click',e=>{
            //get active nav-item and remove the active;
            document.querySelector('.nav-item.active').classList.remove('active')
            //make the current parentElemnt active
            e.currentTarget.parentElement.classList.add('active');
            document.querySelector(".menu-item.navbar-collapse").classList.remove("show");
        },false)
    })


    //type and clear typed content
  document.addEventListener('DOMContentLoaded',()=>{
    new Typed('#typed1', {
        stringsElement: '#typed-strings1',
        loop:true,typeSpeed:50,
        backSpeed:50
      });
      
    new Typed('#typed2', {
        stringsElement: '#typed-strings2',
        loop:true,typeSpeed:50,
        backSpeed:50
      });
      
  },false)


    //implement smooth scrolling with js
    function scrollHandler(e){
        e.preventDefault();

        let linkId=e.currentTarget.getAttribute('href');
        let section=document.querySelector(linkId);
        let scrpos=window.pageYOffset || document.documentElement.scrollTop || document.scrollingElement.scrollTop;
        let sectionTop=section.getBoundingClientRect().top;
            scrollBy({top:sectionTop,left:0,behavior:'smooth'})
    }
    
    //add click event to links
    let nav=document.querySelectorAll('a[href^="#"]:not([data-not])');
        nav.forEach(elm => {
            elm.addEventListener('click',scrollHandler,false)
        });
    

/*Smooth scrolling impimentation when any of the link in nav is clicked*/

//first diasble css smooth scrolling
document.body.setAttribute("id","js-mode");

let home=document.getElementById("home");
let about=document.getElementById("about");
let services=document.getElementById("services");
let portfolio=document.getElementById("portfolio");
let contact=document.getElementById("contact-me");
/**
 * 
 * @param {Element to apply paralax to} elm 
 * @param {Current scroll position of the window} scrpos 
 * @param {Object to be used incase you want to apply the same effect to a group or particular of element} option 
 */
function paralax(elm,scrpos,option={speedx:0,speedy:0,boostX:0,boostY:0,dy:"",dx:"",paralax:""}) {
    let spedy=Number(elm.getAttribute('data-speed-y')) || option.speedy || 0;
    let spedx=Number(elm.getAttribute('data-speed-x')) || option.speedx || 0;
    let bostY=Number(elm.getAttribute('data-boost-y')) || option.boostY || 0;
    let bostX=Number(elm.getAttribute('data-boost-x')) || option.boostX  || 0;
    let diry=elm.getAttribute('data-dy') || option.dy  || '';
    let dirx=elm.getAttribute('data-dx') || option.dx  || '';
    let parax=elm.getAttribute('data-paralax') || option.paralax;
    
        switch (parax.toLowerCase()) {
            case 'background':
                //add fixed bg class
                elm.classList.add('fixed-bg');
                elm.setAttribute('style',`background-position:${dirx}${(spedx*scrpos)+bostX}px ${diry}${(spedy*scrpos)+bostY}px`)
                break;
        
            default:
                //translate as default
                elm.setAttribute('style',`transform:translate(${dirx}${(spedx*scrpos)+bostX}px,${diry}${(spedy*scrpos)+bostY}px)`)
                break;
        }
}

//smooth scrolling callback for scroll event
function handler() {
    let scrpos=window.pageYOffset || document.scrollingElement.scrollTop;
    let vh=window.innerHeight
    let homePos=scrpos+home.getBoundingClientRect().top;
    let aboutPos=scrpos+about.getBoundingClientRect().top;
    let servicesPos=scrpos+services.getBoundingClientRect().top;
    let portfolioPos=scrpos+portfolio.getBoundingClientRect().top;
    let contactPos=scrpos+contact.getBoundingClientRect().top;

    if(scrpos>=homePos && scrpos<=(homePos+home.clientHeight)){
        //make it active
        document.querySelector(".menu-item.home a").classList.add('active')
        document.querySelector(".nav-item.home").classList.add('active')

        //home paralax effect
        let parax=home.querySelectorAll('[data-paralax]');
            parax.forEach(elm=>{
               paralax(elm,scrpos)
            })
    }else{
        document.querySelector(".menu-item.home a").classList.remove('active')
        document.querySelector(".nav-item.home").classList.remove('active')  
    }
    if(scrpos>=aboutPos && scrpos<=(aboutPos+about.clientHeight)){
        //just incase about me pGW DOES NOT occupiy the whole of viewport
        document.querySelector(".menu-item.home a").classList.remove('active')
        document.querySelector(".nav-item.home").classList.remove('active')  
        
        //make it active
        document.querySelector(".menu-item.about a").classList.add('active')
        document.querySelector(".nav-item.about").classList.add('active')
    }else{
        document.querySelector(".menu-item.about a").classList.remove('active')
        document.querySelector(".nav-item.about").classList.remove('active')
    }
    if(scrpos>=servicesPos && scrpos<=(servicesPos+services.clientHeight)){
        //make it active
        document.querySelector(".menu-item.services a").classList.add('active')
        document.querySelector(".nav-item.services").classList.add('active')
    }else{
        document.querySelector(".menu-item.services a").classList.remove('active')
        document.querySelector(".nav-item.services").classList.remove('active')
    }
    if(scrpos>=portfolioPos && scrpos<=(portfolioPos+portfolio.clientHeight)){
        //make it active
        document.querySelector(".menu-item.portfolio a").classList.add('active')
        document.querySelector(".nav-item.portfolio").classList.add('active')
    }else{
        document.querySelector(".menu-item.portfolio a").classList.remove('active')
        document.querySelector(".nav-item.portfolio").classList.remove('active')
    }

    if(scrpos>=contactPos || scrpos>=(document.scrollingElement.scrollHeight-vh)){
        //make it active
        //disblae portfolio active class since contact me is not a full page section
        document.querySelector(".menu-item.portfolio a").classList.remove('active')
        document.querySelector(".nav-item.portfolio").classList.remove('active')

        document.querySelector(".menu-item.contact-me a").classList.add('active')
        document.querySelector(".nav-item.contact-me").classList.add('active')
    }else{
        document.querySelector(".menu-item.contact-me a").classList.remove('active')
        document.querySelector(".nav-item.contact-me").classList.remove('active')
    }
}
handler()
window.onscroll=handler


//portfolio content switch

//all the link
let links=document.getElementById('portfolio-nav');
let portdoc=document.querySelector('.portfolio-info')

    links.addEventListener('click',e=>{
        if(e.target.tagName==='A' && !e.target.classList.contains('active')){
            links.querySelector('a.active').classList.remove('active')
            e.target.classList.add('active')
            let cat=e.target.hash.substr(1);
            portdoc.setAttribute('data-cat',cat)
        }
    })

let backdrop=document.querySelector('.modal-backdrop')
function closeModal(e) {
    if(e.target.classList.contains('close') || e.target.classList.contains('modal-backdrop') || e.target.classList.contains("modal") ){
            this.removeAttribute('style');
            this.classList.remove('show');
            backdrop.classList.remove('show')
            setTimeout(()=>{
            document.querySelector('.project-modal').style.display='none';
            },300)
        removeEventListener('click',closeModal,false)
    }
}
function showModal(e) {
    let modal=document.querySelector('.project-modal');
        modal.style.display='block';
    let active_modal=modal.querySelector(`.${e.currentTarget.getAttribute('data-project')}`);
        active_modal.style.display="flex";
        active_modal.style.zIndex="1500";
        active_modal.classList.add('show');
        backdrop.classList.add('show')
        modal.addEventListener('click',closeModal.bind(active_modal),false);
}
let proj=document.querySelectorAll('.portfolio-card ');

    proj.forEach(elm=>{
        elm.addEventListener('click',showModal,false)
    })