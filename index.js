window.onload = ()=>{
    'use strict';
    const footerBtns = document.getElementsByClassName('footerlinks-btn');
    const footerLinks = document.getElementsByClassName('footerlinks-list');
    const navBar = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-links');
    const navMenuSmall = document.querySelector('.nav-links-small');
    let screenWidth = window.innerWidth;
    
    
    navBar.addEventListener('click',()=>{
        navBar.classList.toggle('menu-active');
        if (navBar.classList.contains('menu-active')){
            navMenu.classList.toggle('nav-links-small');
        }else{
            navMenu.classList.toggle('nav-links-small');
        };
    });



    let i;

    for (i = 0; i< footerBtns.length ; i++){
        footerBtns[i].addEventListener( 'click',function(e){
            console.log('button pressed');
            let selected = e.target.innerText;
            for (i = 0; i < footerBtns.length; i++){
                let state = false;

                if (selected === footerBtns[i].innerText){
                    let targ = footerBtns[i]; 
                    let list = footerBtns[i].nextElementSibling;

                    if (list.classList.contains('ul-active')===false){
                        list.classList.toggle('ul-active');

                        for (i = 0; i < footerBtns.length; i++){
                            let otherLists = footerBtns[i].nextElementSibling;
                            if (footerBtns[i] !== targ && otherLists.classList.contains('ul-active') ){
                                otherLists.classList.toggle('ul-active');
                            }
                        };
                    }else{
                        list.classList.toggle('ul-active');
                    };
                    break;  
                }
            }    
        });
    };

    const cardsContainer = document.querySelector('.NFT-cards');

    const nftCards = cardsContainer.children;


    //intersection function for NFT cards
    const options = {
        threshold : 0.1
    };
    const observe = new IntersectionObserver ((entries,observe)=>{
        let x = entries;
        entries.forEach((entry)=>{
            const elem = entry.target
            for (i=0; i < x.length; i++){
                if(entry.isIntersecting === true && elem.classList.contains('visible-card') === false){
                    elem.classList.toggle('visible-card');
                }
            }
        })
    }, options);

    for (i = 0; i < nftCards.length; i++){
        console.log(nftCards[i])
        observe.observe(nftCards[i]);
    }


    //intersection function for roadmap

    //funtion for the roadmap highlights
    const roadObserver = new IntersectionObserver ((entries,roadObserver)=>{
        entries.forEach((entry)=>{
            let elem = entry.target;
            if(entry.isIntersecting === true && elem.classList.contains('rm-highlights-active') === false){
                elem.classList.toggle('rm-highlights-active');
            }    
        })
    },options);

    const roadHighlights = document.querySelector('.roadmap-highlights');
    roadObserver.observe(roadHighlights);

    //function for the roadmap img
    const roadImgOb = new IntersectionObserver((entries,roadImgOb)=>{
        entries.forEach((entry)=>{
            let elem = entry.target; 
            if (entry.isIntersecting === true && elem.classList.contains('rm-img-active') === false){
                elem.classList.toggle('rm-img-active')
            }  
        })
    },options);

    const roadImg = document.querySelector('.roadmap-inner-img');
    roadObserver.observe(roadImg);
}   
