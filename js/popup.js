const popup = () => {
    const modalWrapp = document.querySelector('.modal-wrapp');
    const modal = document.querySelector('.modal');
    const page = document.querySelector('#page-wrapp')

    const modal1 = document.querySelector('.modal1');
    const modal2 = document.querySelector('.modal2');
    const modal3 = document.querySelector('.modal3');
    const modal4 = document.querySelector('.modal4');
    const modal5 = document.querySelector('.modal5');
    const modal6 = document.querySelector('.modal6');

    const btn1 = document.querySelector('#work-btn1');
    const btn2 = document.querySelector('#work-btn2');
    const btn3 = document.querySelector('#work-btn3');
    const btn4 = document.querySelector('#work-btn4');
    const btn5 = document.querySelector('#work-btn5');
    const btn6 = document.querySelector('#work-btn6');

    btn1.addEventListener('click', () => {
        modalWrapp.classList.add('modal-wrapp-visible');
        modal1.classList.add('modal-visible');

        window.onclick = function(event) {
            if (event.target == modalWrapp) {
              modalWrapp.classList.remove('modal-wrapp-visible');
              modal1.classList.remove('modal-visible');
            }
          }
    });

    btn2.addEventListener('click', () => {
        modalWrapp.classList.add('modal-wrapp-visible');
        modal2.classList.add('modal-visible');

        window.onclick = function(event) {
            if (event.target == modalWrapp) {
              modalWrapp.classList.remove('modal-wrapp-visible');
              modal2.classList.remove('modal-visible');
            }
          }
    });

    btn3.addEventListener('click', () => {
        modalWrapp.classList.add('modal-wrapp-visible');
        modal3.classList.add('modal-visible');

        window.onclick = function(event) {
            if (event.target == modalWrapp) {
              modalWrapp.classList.remove('modal-wrapp-visible');
              modal3.classList.remove('modal-visible');
            }
          }
    });

    btn4.addEventListener('click', () => {
        modalWrapp.classList.add('modal-wrapp-visible');
        modal4.classList.add('modal-visible');

        window.onclick = function(event) {
            if (event.target == modalWrapp) {
              modalWrapp.classList.remove('modal-wrapp-visible');
              modal4.classList.remove('modal-visible');
            }
          }
    });

    btn5.addEventListener('click', () => {
        modalWrapp.classList.add('modal-wrapp-visible');
        modal5.classList.add('modal-visible');

        window.onclick = function(event) {
            if (event.target == modalWrapp) {
              modalWrapp.classList.remove('modal-wrapp-visible');
              modal5.classList.remove('modal-visible');
            }
          }
    });

    btn6.addEventListener('click', () => {
        modalWrapp.classList.add('modal-wrapp-visible');
        modal6.classList.add('modal-visible');

        window.onclick = function(event) {
            if (event.target == modalWrapp) {
              modalWrapp.classList.remove('modal-wrapp-visible');
              modal6.classList.remove('modal-visible');
            }
          }
    });

}   

export default popup;
