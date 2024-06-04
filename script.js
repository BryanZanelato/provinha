function adicionarAluno() {

    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (nota1 > 5 || nota2 > 5) {
        alert('As notas devem ser no máximo 5.');
        return;
    }

    var media = (nota1 + nota2) / 2;
    var status = media >= 5 ? 'Aprovado' : 'Reprovado';

    var tabela = document.getElementById('tabelaAlunos').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    var celulaNome = novaLinha.insertCell(0);
    var celulaMatricula = novaLinha.insertCell(1);
    var celulaNota1 = novaLinha.insertCell(2);
    var celulaNota2 = novaLinha.insertCell(3);
    var celulaMedia = novaLinha.insertCell(4);
    var celulaStatus = novaLinha.insertCell(5);

    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaNota1.innerHTML = nota1.toFixed(2);
    celulaNota2.innerHTML = nota2.toFixed(2);
    celulaMedia.innerHTML = media.toFixed(2);
    celulaStatus.innerHTML = status;

    document.getElementById('notasForm').reset();
}