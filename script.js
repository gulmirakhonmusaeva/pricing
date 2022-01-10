
const elsPaymentPeriodInput = document.querySelectorAll('[name="payment-period"]')
const prices = document.querySelectorAll('.price')

elsPaymentPeriodInput.forEach(elPaymentPeriodInput => {
    elPaymentPeriodInput.addEventListener('change', function() {
        const period = elPaymentPeriodInput.value
        if(period === 'annual'){
            prices.forEach((price) =>{
                price.textContent = +price.getAttribute('data-annually')
            })
        } else {
            prices.forEach((price) =>{
                price.textContent = +price.getAttribute('data-monthly')
            })
        }
    })
});