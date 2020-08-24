const header = () => {
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('.mobile-nav-expanded')

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('expanded')
        hamburger.classList.toggle('hamburger-active')
    })
}

export default header