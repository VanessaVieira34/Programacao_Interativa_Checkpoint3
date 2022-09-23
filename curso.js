let Estudantes = require('./estudantes');

let curso = {
    nomeDoCurso : 'Dev ctd',
    notaDeAprovacao: 6,
    faltaMaximas: 3,
    listaDeEstudantes: Estudantes,

    adicionaAluno: function(aluno){
        this.listaDeEstudantes.push(aluno)
    },

    resultadoAluno: function(aluno){

        if(aluno.qtdFaltas === curso.faltaMaximas && calculaMedia(aluno.notas) > this.notaDeAprovacao + (this.notaDeAprovacao * 10)/100  ){
            return `Aprovado(a)`;
        }

        if(calculaMedia(aluno.notas) >= this.notaDeAprovacao && aluno.qtdFaltas < this.faltaMaximas){
            return `Aprovado(a) `;
        }else{
            return `Reprovado(a) `;
        }
    },

    verificaAlunos: function(){
        this.listaDeEstudantes.forEach(item => {
            console.log( item.nome + ' - ' + this.resultadoAluno(item))
        })
    }

}

module.exports = curso;