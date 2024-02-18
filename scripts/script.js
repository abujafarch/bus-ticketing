function selectSeat(){
    const seats = document.getElementsByClassName('seat')
    for (const seat of seats){
        seat.addEventListener('click', function(){

            createTr(seat.innerText)
            seatLeft()
            countSeat()
            seatBackground(seat)
            totalPrice()
            seat.removeEventListener('click' , arguments.callee)
        })
    }
}
selectSeat()