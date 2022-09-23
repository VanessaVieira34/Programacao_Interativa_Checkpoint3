let Aluno = require('./modulos/aluno');
let Curso = require('./modulos/curso');


//Criando registro do novo aluno
let aluno1 = new Aluno("Jose Silva", 0, [0, 10, 20]);
console.log(aluno1)

//Calcuo da média 
console.log(`Média do aluno: ` + calculaMedia(aluno1.notas))

//Incuindo o aluno a lista dos demais alunos
Curso.adicionaAluno(aluno1);
console.log('Banco de dados dos alunos', Curso.listaDeEstudantes)

console.log()
//Resultado Verificação array
Curso.verificaAlunos()






