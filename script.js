let basPriceEl = document.querySelector('.basic-price')
let proPriceEl = document.querySelector('.professional-price')
let mastPriceEl = document.querySelector('.master-price')
let toggleEl = document.querySelector('.toggle')
let toggleBtnEl = document.querySelector('.toggle-btn')
let annualEl = document.querySelector('.annual')
let monthEl = document.querySelector('.month')
let valueEl = document.querySelector('.value')


function annual() {
    monthEl.classList.remove('clicked')
    annualEl.classList.add('clicked')
    basPriceEl.textContent= '199.99'
    proPriceEl.innerHTML= '249.99'
    mastPriceEl.innerHTML= '399.99'
}

function month() {
      annualEl.classList.remove('clicked')
      monthEl.classList.add('clicked')
      basPriceEl.innerHTML= '19.99'
      proPriceEl.innerHTML= '24.99'
      mastPriceEl.innerHTML= '39.99'
}

annualEl.addEventListener('click', function(){
    annual()
})

monthEl.addEventListener('click', function(){
    month()
})



