import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const elements = {
    form: document.querySelector('.form'),
    delay: document.querySelector('[name="delay"]'), 
    button: document.querySelector('.button')
}

elements.form.addEventListener('submit', handlerClick)

function handlerClick(evt) {
    evt.preventDefault()
    
    const delay = parseInt(elements.delay.value)
    const point = document.querySelector('[name="state"]:checked')

    if (!elements.delay.value.trim()) { 
        return 
    }

    if (isNaN(delay) || delay <= 0) { 
        return
    }

    if (!point) { 
        return
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           if (point.value === 'fulfilled') {
              resolve(delay)
           } else {
              reject(delay)
           }
        }, delay)
    })

    promise
        .then((delay) => {
            const message = `✅ Fulfilled promise in ${delay}ms`;
            iziToast.success({ message })
        })
        .catch((delay) => {
            const message = `❌ Rejected promise in ${delay}ms`
            iziToast.error({ message })
        })
}