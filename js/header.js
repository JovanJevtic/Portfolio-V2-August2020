const header = () => {
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('.mobile-nav-expanded')
    const links = document.querySelectorAll('.expanded-link a')

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
    })

    links[0].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
        console.log('clicked')
    })

    links[1].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
        console.log('clicked')
    })

    links[2].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
        console.log('clicked')
    })

    links[3].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
        console.log('clicked')
    })

    links[4].addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
        console.log('clicked')
    })
}

export default header