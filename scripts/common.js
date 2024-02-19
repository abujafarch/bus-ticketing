function seatLeft() {
    const allSeat = document.getElementById('seat-left')
    let allSeatInt = parseInt(allSeat.innerText)
    let seatLeft = allSeatInt - 1
    allSeat.innerText = seatLeft;
}

function createTr(seatName) {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.innerText = seatName;
    const td2 = document.createElement('td')
    td2.innerText = 'Economy'
    const td3 = document.createElement('td')
    td3.innerText = '550'
    td3.classList.add('text-right')

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    document.getElementById('ticket-table').appendChild(tr)
}

function countSeat() {
    const getSeat = document.getElementById('seat-count')
    const seatInnerNumber = parseInt(getSeat.innerText)
    let seatCount = seatInnerNumber + 1
    getSeat.innerText = seatCount
}

function seatBackground(seatElement) {
    seatElement.style.backgroundColor = '#1DD100';
    seatElement.style.color = '#ffffff';
}

function totalPrice() {
    const totalPriceElement = document.getElementById('total-price')
    let totalPrice = parseInt(totalPriceElement.innerText)
    totalPrice = totalPrice + 550;
    totalPriceElement.innerText = totalPrice;

    const grandTotalElement = document.getElementById('grand-total')
    grandTotalElement.innerText = totalPrice;
}

function enableApply() {
    const applyBtn = document.getElementById('apply')
    applyBtn.removeAttribute('disabled')
}

function hideApply() {
    const applyBtn = document.getElementById('coupon-section')
    applyBtn.classList.add('hidden')
}

function discountAmount(discount) {
    const discountSection = document.getElementById('discount-section')
    discountSection.classList.remove('hidden')
    const discountAmount = document.getElementById('discount-amount')
    discountAmount.innerText = discount;
}

function enableNextBtn() {
    const nextBtn = document.getElementById('next-btn')
    const phoneNum = document.getElementById('phone-num')
    const phoneValue = phoneNum.value;

    if (phoneNum.value.length >= 1) {
        nextBtn.removeAttribute('disabled')
    }
    phoneNum.addEventListener('keyup', function () {
        if (phoneNum.value.length >= 1) {
            nextBtn.removeAttribute('disabled')
        }
        else if (phoneNum.value.length == 0) {
            nextBtn.setAttribute('disabled', true)
        }
    })

    nextBtn.addEventListener('click', function () {
        const main = document.getElementById('main')
        const header = document.getElementById('header')
        const footer = document.getElementById('footer')
        const modal = document.getElementById('modal')

        main.classList.add('hidden')
        header.classList.add('hidden')
        footer.classList.add('hidden')
        modal.classList.remove('hidden')
    })

}





// function grandTotal(){
//     const grandTotalElement = document.getElementById('grand-total')
//     grandTotalElement.innerText = couponAuthentication()
// }