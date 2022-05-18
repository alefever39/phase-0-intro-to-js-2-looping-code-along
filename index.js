function writeCards(namesArray, eventName) {
    const cardsWritten = []
    for (let i=0; i < namesArray.length; i++) {
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`
        cardsWritten.push(message)
    }
    return cardsWritten
}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--
    }
}