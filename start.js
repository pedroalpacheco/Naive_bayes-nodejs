const NB = require('ml-bayes')

const by = new NB();

by.train("Imagine uma nova história para sua vida e acredite nela.",'otimismo');
by.train("Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",'otimismo');
by.train("Creio que tenho prova suficiente de que falo a verdade: a pobreza.",'filosofia');
by.train("Daria tudo que sei pela metade do que ignoro.",'filosofia');
by.train("Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.",'dúvida');
by.train("O ignorante afirma, o sábio duvida, o sensato reflete.",'dúvida');

//let score = by.guess('Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.')

let score = by.guess('Nossas dúvidas são traidoras e nos fazem perder o que, com frequência, poderíamos ganhar, por simples medo de arriscar.')

let resultado = by.extractWinner(score);

console.log(resultado)

