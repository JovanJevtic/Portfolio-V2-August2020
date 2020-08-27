export default function animateLanding () {
    const animateLandingTitle = () => {
        const title = document.querySelector('.title');
        title.classList.add('animated')
    }
    
    setTimeout(animateLandingTitle, 100)
    
    const animateLandingHeading = () => {
        const heading = document.querySelector('.heading');
        heading.classList.add('animated')
    }
    
    setTimeout(animateLandingHeading, 500)
        
    const animateLandingSubheading = () => {
        const subheading = document.querySelector('.subheading');
        subheading.classList.add('animated')
    }
    
    setTimeout(animateLandingSubheading, 800)
    
    const animateLandingBtn = () => {
        const btn = document.querySelector('.landing-btn-wrapp');
        btn.classList.add('animated-horizontal')
    }
    
    setTimeout(animateLandingBtn, 1000)
}
