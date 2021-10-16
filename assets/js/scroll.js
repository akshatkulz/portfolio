const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1100,
    reset: false
})

/*HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*PORTFOLIO PROJECTS*/
sr.reveal('.portfolio__img', {interval: 200})

/*PROJECT MEMBER & EXPERIENCE (DUE TO CLASS "CARD")*/
sr.reveal('.project__members', {})
sr.reveal('.card', {interval: 200})




