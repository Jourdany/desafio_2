// COM IF E ELSE IF
function calcularRankeadas(vitorias, derrotas){
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10){
    nivel = "Ferro";
  }
  else if (vitorias >= 11 &&  vitorias <= 20){
    nivel = "Bronze";
  }
  else if (vitorias >=21 && vitorias <= 50){
    nivel = "Prata";
  }
   else if (vitorias >=51 && vitorias <= 80){
    nivel = "Ouro";
  }
   else if (vitorias >=81 && vitorias <= 90){
    nivel = "Diamante";
  }
   else if (vitorias >=91 && vitorias <= 100){
    nivel = "Lendário";
  }
   else if (vitorias <= 101){
    nivel = "Imortal";
  }  
  
  console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
    return { saldoVitorias, nivel };
}

//OUTRA FORMA DE FAZER O MESMO ALGORÍTMO COM SWITCH CASE:

function calcularRankeadas (vitorias, derrotas){
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  switch (true){
    case (vitorias < 10):
      nivel = "Ferro;"
      break;
    case (vitorias >= 11 && vitorias <= 20):
      nivel = "Bronze";
      break;
      case (vitorias >= 21 && vitorias <= 50):
      nivel = "Prata";
      break;
      case (vitorias >= 31 && vitorias <= 40):
      nivel = "Ouro";
      break;
      case (vitorias >= 51 && vitorias <= 80):
      nivel = "Diamante";
      break;
      case (vitorias >= 81 && vitorias <= 90):
      nivel = "Lendário";
      break;
      case (vitorias >= 101):
      nivel = "Imortal";
      break;
      default: 
      nivel = "ainda não tem classificação";      
  }
  console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
    return { saldoVitorias, nivel };
}