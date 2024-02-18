function seatLeft(){
    const allSeat = document.getElementById('seat-left')
    let allSeatInt = parseInt(allSeat.innerText)
    let seatLeft = allSeatInt - 1
    allSeat.innerText = seatLeft;
}

function createTr(seatName){
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

function countSeat(){
    const getSeat = document.getElementById('seat-count')
    const seatInnerNumber = parseInt(getSeat.innerText)
    let seatCount = seatInnerNumber + 1
    getSeat.innerText = seatCount
    console.log(getSeat.innerText)
}

function seatBackground(seatElement){
    seatElement.style.backgroundColor = '#1DD100';
    seatElement.style.color = '#ffffff';
}

function totalPrice(){
    const totalPriceElement = document.getElementById('total-price')
    let totalPrice = parseInt(totalPriceElement.innerText)
    totalPrice = totalPrice + 550;
    totalPriceElement.innerText = totalPrice;

    const grandTotalElement = document.getElementById('grand-total')
    grandTotalElement.innerText = totalPrice;
}

// function couponAuthentication(){
//     const couponInputElement = document.getElementById('coupon-input')
//     const applyBtn = document.getElementById('apply')
//     applyBtn.addEventListener('click', function(){
//         const couponInput = couponInputElement.value
//         if(couponInput === 'NEW15'){
//             const totalPriceElement = document.getElementById('total-price')
//             let totalPrice = parseInt(totalPriceElement.innerText)
//             let grandTotal = totalPrice*15/100
//             return grandTotal
//         }
//     })
    
// }
couponAuthentication()
function grandTotal(){
    const grandTotalElement = document.getElementById('grand-total')
    grandTotalElement.innerText = couponAuthentication()
}