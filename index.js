// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

    function adicionarAluno(nome){
      alunosDaEscola.push({
        nome,
        notas: [],
        cursos: [],
        faltas: 0
      });
      console.log(`Aluno ${nome} adicionado com sucesso!`);
      
    
    };
   
  
    function listarAlunos(){
      
     
      alunosDaEscola.forEach(aluno => {
        console.log("-".repeat(40));
        console.log(`Nome: ${aluno.nome}`);
        

        let notas = "";       
       
        aluno.notas.map((nota, i) => {
          
          if(i != aluno.notas.length-1){
            notas += nota.toString() +", ";
          } else {
            notas += nota.toString();
          }

          
        });
        
         
                
        let cursos = "";
        aluno.cursos.forEach(curso => {
          let d = curso.dataMatricula;
          let fullDate = `${d.getDay()+1}/${d.getMonth()+1}/${d.getFullYear()}`;
          cursos += `
          Nome: ${curso.nomeDoCurso}
          Data de matricula: ${fullDate}`
        })
        // verifica se o aluno possui cursos
        console.log('Cursos: ' + cursos); 
        console.log('Notas: ' + notas);
        console.log(`Faltas: ${aluno.faltas}`);
        return 0;
      });
    
    }
    
    function buscarAluno(nome){
      let busca = nome;
      const resultado = alunosDaEscola.filter(aluno => {
          return aluno.nome.includes(busca);
      });
      if(resultado.length>=1){
        console.log("Aluno " + nome + " se encontra no sistema.");
        return resultado;
      }else{
        console.log(`Aluno [${nome}] não encontrado no sistema`);
        return 0;

      }
   };

    function matricularAluno(aluno, curso){
      
      const buscaAluno = buscarAluno(aluno);
      if(buscaAluno && buscaAluno.length >0){
          buscaAluno[0].cursos.push({
          nomeDoCurso: curso,
          dataMatricula: new Date,
          });
      console.log(`O aluno ${buscaAluno[0].nome} foi matriculado ao curso ${curso} com sucesso`)
     
      };
    };
  

    function aplicarFalta(aluno){
      const buscaAluno = buscarAluno(aluno);
      if(buscaAluno && buscaAluno[0].cusros.length >0){
        buscaAluno[0].faltas++;
        console.log(`falta aplicada para o aluno ${buscaAluno[0].nome}`);
      };

    };
    
    function aplicarNota(aluno, nota){
      const buscaAluno = buscarAluno(aluno);
      if(buscaAluno && buscaAluno[0].cursos.length >0){
        buscaAluno[0].notas.push(nota);
        console.log(`a nota ${nota} foi aplicada para o aluno ${buscaAluno[0].nome}`);
      }else{
        console.log(`o aluno ${buscaAluno[0].nome} não está matriculado em nenhum curso`);
      }
   };
   
     function aprovarAluno(aluno){
      const buscaAluno = buscarAluno(aluno);
      let media = buscaAluno[0].notas.reduce((acum,numero)=>{ return acum + numero})/ buscaAluno[0].notas.length;
      if(buscaAluno && buscaAluno[0].cursos.length >0 && buscaAluno[0].faltas <= 3 && media >= 6 ){
          console.log(`O Aluno ${aluno} está aprovado com média igual a ${media} no curso: ${buscaAluno[0].cursos[0].nomeDoCurso}`);
      }else if(buscaAluno && buscaAluno[0].cursos.length >0 && buscaAluno[0].faltas <= 3 && media <= 6 ){
          console.log(`O Aluno ${aluno} está reprovado com média igual a ${media} no curso: ${buscaAluno[0].curso[0].nomeDoCurso}`);
      }else if(buscaAluno && buscaAluno[0].cursos.length >0 && buscaAluno[0].faltas > 3 && media <= 6 ){
          console.log(`O Aluno ${aluno} foi reprovado por falta`)
      }else{
        console.log(`O Aluno ${aluno} não está matriculado em nenhum curso`)
      };
     };

