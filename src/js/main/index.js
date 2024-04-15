function playGame() {
    
    let i = 0
    let player = document.querySelector('input[name="players"]:checked').value
    let dice = document.querySelector('input[name="dice"]:checked').value
    let token = document.querySelector('input[name="tokens"]:checked').value
    
    const datos = { playerUnit: player, diceUnit: dice, tokenUnit: token };
    const queryString = new URLSearchParams(datos).toString();
    
    window.location.href = `app.html?${queryString}`;
}
