const scriptURL ='https://script.google.com/macros/s/AKfycbzIsCZNhgM70DvTdXG_U96D13ZwuWiFg8EFaVS9nAO52Ip4USaJRSF3yLReowdXdz9Y/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(Response => alert("شكرًا لك! لقد تم إرسال المعلومات الخاصة بك بنجاح"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})