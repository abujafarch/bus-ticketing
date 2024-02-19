function selectSeat() {
    let i = 0
    const seats = document.getElementsByClassName('seat')
    for (const seat of seats) {
        seat.addEventListener('click', function () {
            i = i + 1
            if (i > 4) {
                seat.removeEventListener('click', arguments.callee)
            }
            else {
                createTr(seat.innerText)
                seatLeft()
                countSeat()
                seatBackground(seat)
                totalPrice()
                enableNextBtn()
                seat.removeEventListener('click', arguments.callee)
            }
            if (i > 3) {
                enableApply()
            }

            if (i >= 5) {
                alert('Already selected four. You cannot select more than that')
            }
        })
    }
}
selectSeat()

// coupon section functionalities 
const couponInputElement = document.getElementById('coupon-input')
const applyBtn = document.getElementById('apply')
applyBtn.addEventListener('click', function () {
    const couponInput = couponInputElement.value
    if (couponInput == 'NEW15') {
        const grandTotalElement = document.getElementById('grand-total')
        let grandTotalInt = parseInt(grandTotalElement.innerText)
        let grandTotal = grandTotalInt * 85 / 100
        let discounted = grandTotalInt * 15 / 100
        grandTotalElement.innerText = grandTotal;
        hideApply()
        discountAmount(discounted)
    }
    else if (couponInput == 'Couple20') {
        const grandTotalElement = document.getElementById('grand-total')
        let grandTotalInt = parseInt(grandTotalElement.innerText)
        let grandTotal = grandTotalInt * 80 / 100
        let discounted = grandTotalInt * 20 / 100
        grandTotalElement.innerText = grandTotal;
        hideApply()
        discountAmount(discounted)
    }
    else {
        alert('Invalid Coupon. Please input Valid Coupon')
    }
})

// buy tickets section functionalities
function buyTickets(){
    const targetSection = document.getElementById('zatayaat')
    const clickBtn = document.getElementById('buy-ticket')
    targetSection.scrollIntoView({behavior: "smooth"})
}
