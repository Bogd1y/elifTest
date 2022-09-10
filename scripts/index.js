
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

let formaName = document.querySelector('.forma__name')
let formaSurName = document.querySelector('.forma__surname')
let formaEmail = document.querySelector('.forma__email')
let formaPasw = document.querySelector('.forma__pasw')

let fN = document.querySelector('.fN')
let fSn = document.querySelector('.fSn')
let fE = document.querySelector('.fE')
let fP = document.querySelector('.fP')

const parodiaValidatora = (e) => {
    console.log(123);

    let mistakes = 0

    if (formaName.value == "") {
        fN.classList.add('_active')
        formaName.classList.add('_active')
        mistakes++
    }

    if (formaSurName.value == "") {
        fSn.classList.add('_active')
        formaSurName.classList.add('_active')
        mistakes++
    }

    if (validateEmail(formaEmail.value) === false) {
        fE.classList.add('_active')
        formaEmail.classList.add('_active')
        mistakes++
    }

    if (formaPasw.value == "") {
        fP.classList.add('_active')
        formaPasw.classList.add('_active')
        mistakes++
    }

    if (mistakes > 0) { return } else {
        formaName.value = ''
        formaSurName.value = ''
        formaEmail.value = ''
        formaPasw.value = ''
        alert('all right')
    }
}

document.querySelector('.forma__btn').addEventListener("click", parodiaValidatora)


formaName.addEventListener('click', ()=>(formaName.classList.remove('_active'), fN.classList.remove('_active')))
formaSurName.addEventListener('click', ()=>(formaSurName.classList.remove('_active'), fSn.classList.remove('_active')))
formaEmail.addEventListener('click', ()=>(formaEmail.classList.remove('_active'), fE.classList.remove('_active')))
formaPasw.addEventListener('click', ()=>(formaPasw.classList.remove('_active'), fP.classList.remove('_active')))