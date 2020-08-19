export default function animate () {
    const animateOnScroll = () => {
        let screenPosition = window.innerHeight;
    
        const aboutHeading = document.querySelector('.about-heading');
        const aboutHeadingPosition = aboutHeading.getBoundingClientRect().top;
    
        if (aboutHeadingPosition < screenPosition) {
            aboutHeading.classList.add('animated-horizontal')
        }

        const aboutTxt = document.querySelector('.about-txt');
        const aboutTxtPosition = aboutTxt.getBoundingClientRect().top;
    
        if (aboutTxtPosition < screenPosition) {
            aboutTxt.classList.add('animated')
        }

        // About Skills
        const aboutSkills = document.querySelectorAll('.about-skill')

        aboutSkills.forEach(aboutSkill => {
            let aboutSkillPosition = aboutSkill.getBoundingClientRect().bottom;
            if (aboutSkillPosition < screenPosition) {
                aboutSkill.classList.add('animated-horizontal')
            }
        })

        const workHeading = document.querySelector('.work-heading');
        const workHeadingPosition = workHeading.getBoundingClientRect().top;
    
        if (workHeadingPosition < screenPosition) {
            workHeading.classList.add('animated')
        }
        const workSubheading = document.querySelector('.work-subheading');
        const workSubheadingPosition = workSubheading.getBoundingClientRect().top;
    
        if (workSubheadingPosition < screenPosition) {
            workSubheading.classList.add('work-subheading-animated')
        }

        // Work Cards
        const workCards = document.querySelectorAll('.work-card')

        workCards.forEach(workCard => {
            let workCardPosition = workCard.getBoundingClientRect().bottom;
            if (workCardPosition < screenPosition) {
                workCard.classList.add('animated-horizontal')
            }
        })

        // Process1
        const processHeading = document.querySelector('.process-heading');
        const processHeadingPosition = processHeading.getBoundingClientRect().top;
    
        if (processHeadingPosition < screenPosition) {
            processHeading.classList.add('animated')
        }

        const processIntro = document.querySelector('.process-intro');
        const processIntroPosition = processIntro.getBoundingClientRect().top;
    
        if (processIntroPosition < screenPosition) {
            processIntro.classList.add('animated')
        }

        const processHeading2 = document.querySelector('.process-heading2');
        const processHeading2Position = processHeading2.getBoundingClientRect().top;
    
        if (processHeading2Position < screenPosition) {
            processHeading2.classList.add('animated')
        }

        const processBtn = document.querySelector('.process-btn');
        const processBtnPosition = processBtn.getBoundingClientRect().top;
    
        if (processBtnPosition < screenPosition) {
            processBtn.classList.add('animated')
        }

        // Process second
        const process1Heading = document.querySelector('.process1-heading');
        const process1HeadingPosition = process1Heading.getBoundingClientRect().top;
    
        if (process1HeadingPosition < screenPosition) {
            process1Heading.classList.add('animated-horizontal')
        }

        const process1Txt = document.querySelector('.process1-txt');
        const process1TxtPosition = process1Txt.getBoundingClientRect().top;
    
        if (process1TxtPosition < screenPosition) {
            process1Txt.classList.add('animated')
        }

        const process1Heading2 = document.querySelector('.process1-heading2');
        const process1Heading2Position = process1Heading2.getBoundingClientRect().top;
    
        if (process1Heading2Position < screenPosition) {
            process1Heading2.classList.add('animated')
        }

        const process1Txt2 = document.querySelector('.process1-txt2');
        const process1Txt2Position = process1Txt.getBoundingClientRect().top;
    
        if (process1Txt2Position < screenPosition) {
            process1Txt2.classList.add('animated')
        }

        // Process third
        const process2Heading = document.querySelector('.process2-heading');
        const process2HeadingPosition = process2Heading.getBoundingClientRect().top;
    
        if (process2HeadingPosition < screenPosition) {
            process2Heading.classList.add('animated')
        }

        const process2Txt = document.querySelector('.process2-txt');
        const process2TxtPosition = process2Txt.getBoundingClientRect().top;
    
        if (process2TxtPosition < screenPosition) {
            process2Txt.classList.add('animated')
        }

        // Process fourth
        const process3Heading = document.querySelector('.process3-heading');
        const process3HeadingPosition = process3Heading.getBoundingClientRect().top;
    
        if (process3HeadingPosition < screenPosition) {
            process3Heading.classList.add('animated')
        }

        const process3Txt = document.querySelector('.process3-txt');
        const process3TxtPosition = process3Txt.getBoundingClientRect().top;
    
        if (process3TxtPosition < screenPosition) {
            process3Txt.classList.add('animated')
        }
    
        // Process fifth
        const process4Heading = document.querySelector('.process4-heading');
        const process4HeadingPosition = process4Heading.getBoundingClientRect().top;
    
        if (process4HeadingPosition < screenPosition) {
            process4Heading.classList.add('animated')
        }

        const process4Txt = document.querySelector('.process4-txt');
        const process4TxtPosition = process4Txt.getBoundingClientRect().top;
    
        if (process4TxtPosition < screenPosition) {
            process4Txt.classList.add('animated')
        }

        // Process sixth
        const process5Heading = document.querySelector('.process5-heading');
        const process5HeadingPosition = process5Heading.getBoundingClientRect().top;
    
        if (process5HeadingPosition < screenPosition) {
            process5Heading.classList.add('animated')
        }

        const process5Subheading = document.querySelector('.process5-subheading');
        const process5SubheadingPosition = process5Subheading.getBoundingClientRect().top;
    
        if (process5SubheadingPosition < screenPosition) {
            process5Subheading.classList.add('animated')
        }

        const process5Txt = document.querySelector('.process5-txt');
        const process5TxtPosition = process5Txt.getBoundingClientRect().top;
    
        if (process5TxtPosition < screenPosition) {
            process5Txt.classList.add('animated')
        }

        // Contact Info
        const contactInfoHeading = document.querySelector('.contact-info-heading');
        const contactInfoHeadingPosition = contactInfoHeading.getBoundingClientRect().top;
    
        if (contactInfoHeadingPosition < screenPosition) {
            contactInfoHeading.classList.add('animated')
        }

        const contactInfoRowHeadings = document.querySelectorAll('.contact-info-row-heading');
    
        contactInfoRowHeadings.forEach(contactInfoRowHeading => {
            const contactInfoRowHeadingPosition = contactInfoRowHeading.getBoundingClientRect().top;

            if (contactInfoRowHeadingPosition < screenPosition) {
                contactInfoRowHeading.classList.add('animated')
            }
        });

        const contactInfoRowLinks = document.querySelectorAll('.contact-info-row-link');

        contactInfoRowLinks.forEach(contactInfoRowLink => {
            let contactInfoRowLinksPosition = contactInfoRowLink.getBoundingClientRect().top;

            if (contactInfoRowLinksPosition < screenPosition) {
                contactInfoRowLink.classList.add('animated-horizontal')
            }
        })
    }
    
    window.addEventListener('scroll', animateOnScroll);
}
