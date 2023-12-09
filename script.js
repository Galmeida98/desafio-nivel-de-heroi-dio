
var nome = prompt("Digite o seu nome: ");
var xp = prompt("Digite o XP do herói: ");

if(xp < 1000){
  let nivel = "Ferro"
  console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
} else if(xp >= 1001 && xp <= 2000){
    let nivel = "Bronze"
    console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
} else if(xp >= 2001 && xp <= 5000){
    let nivel = "Prata"
    console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
} else if(xp >= 5001 && xp <= 7000){
    let nivel = "Ouro"
    console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
} else if(xp >= 7001 && xp <= 8000){
    let nivel = "Platina"
    console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
} else if(xp >= 8001 && xp <= 9000){
    let nivel = "Ascendente"
    console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
} else if(xp >= 9001 && xp <= 10000){
    let nivel = "Imortal"
    console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
} else{
    let nivel = "Radiante"
    console.log("O Herói de nome " + nome + " está no nível de: " + nivel);
}

