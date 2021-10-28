// GOAL RESPOSTA CERTA - eu clico na reposta certa e aparece-me HTML e CSS a dizer "Correcto".

// GOAL RESPOSTAS ERRADAS - eu clico nas repostas errada e aparece-me HTML e CSS a dizer "Ooops errado" + "algo específico à repsosta que eu cliquei" + "tenta outra vez.".


// GOAL RESPOSTA CERTA 

// 1. tenho que ir buscar o botão com a resposta correta.

const respostaCerta = document.getElementById('resposta-certa');

// 1.2 tenho que ir buscar o <p> para onde eu quero injetar conteúdo

const explicacao = document.getElementById('explicacao');

// 2. tenho que por o elemento resposta certa a escutar o meu 'click'

respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong>Correto!</strong> 🍾"
})

// GOAL REPOSTAS ERRADAS 

// 1. tenho que ir buscar todas as respostas com a classe resposta-errada
const respostasErradas = document.querySelectorAll('.resposta-errada');

// 2. Iterar por cada resposta errada
respostasErradas.forEach((resposta) => {
	// 3. JS tem que estar À escuta do click em cada resposta
	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo = '<strong>Ooops, errado… 😭</strong>'

		// 4. Quero distinguir que reposta é - se é HTML, CSS ou Ruby
		if(resposta.id === "resposta-html") {
			explicacaoConteudo += " HTML permite-nos dar estrutura à nossa página."
		} else if (resposta.id === "resposta-css") {
			explicacaoConteudo = explicacaoConteudo + " CSS permite-nos dar estilo à nossa página."
		} else {
			explicacaoConteudo += " Ruby é uma das várias linguagens que podem ser utilizadas para backend."
		}

		explicacaoConteudo += " Tenta outra vez :)"

		explicacao.innerHTML = explicacaoConteudo;
	})
})