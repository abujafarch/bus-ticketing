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
                seat.removeEventListener('click', arguments.callee)
            }
            if(i > 3){
                enableApply()
            }
        })

        console.log(i)
    }
}
selectSeat()