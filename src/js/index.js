function playGame() {

    console.log("Pulsado el boton de jugar")
    
    let i = 0
    let player = document.querySelector('input[name="players"]:checked').value
    let dice = document.querySelector('input[name="dice"]:checked').value
    let token = document.querySelector('input[name="tokens"]:checked').value
    
    console.log(`Valores para la partida:`)
    console.log(`Jugadores: ${player}, Dados: ${dice}, Fichas: ${token}`)
    
    const datos = { playerUnit: player, diceUnit: dice, tokenUnit: token };
    const queryString = new URLSearchParams(datos).toString();
    
    window.location.href = `app.html?${queryString}`;
}
