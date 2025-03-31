/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de  (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega co"🗿"n estas 5 posibilidades.
 */

const rules = {
  "✂️": ["📄", "🦎"],
	"📄": ["🗿", "🖖"],
	"🗿": ["🦎", "✂️"],
	"🦎": ["🖖", "📄"],
	"🖖": ["✂️", "🗿"],
} 

const whoWins = (arrayGame) => {
  let [p1, p2] = [0, 0] // inicializamos los marcadores en 0

  for (const play of arrayGame) {
    let p1Play = play[0]
    let p2Play = play[1]

    if (p1Play === p2Play) continue // empate, no se dan puntos

  rules[p1Play].includes(p2Play) ? p1++ : p2++ // revisa quien gana para subir el marcador
  }
  return p1 === p2 ? 'Tie' : p1 > p2 ? 'Player 1 Win' : 'Player 2 Win'
}

console.log(whoWins([["🗿", "🗿"], ["📄", "📄"], ["✂️", "✂️"]]))
console.log(whoWins([["🗿", "✂️"], ["📄", "🗿"], ["🦎", "📄"]]))
console.log(whoWins([["🗿", "✂️"], ["✂️", "🗿"], ["📄", "✂️"]]))