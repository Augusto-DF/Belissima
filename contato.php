<?php
	include 'header-pages.php';
?> 

<link rel="stylesheet" href="css/style-contato.css">
<!-- Introdução -->
	<section class="intro">
		<div class="mask">
			<div class="text-intro">
				<h1>Contato</h1>
				<p><a href="index.php">Início/</a><a href="index.php #unha">Serviços/</a><a href="contato.php">Contato</a></p>
			</div>
		</div>
	</section>

<!-- Formulário -->
	<section class="bg-form">
		<div class="container">
			<form action="enviar.php" method="post" name="form" class="formphp">
				<label for="nome">Nome</label>
				<input type="text" name="nome" wrap="hard" class="text-box">
				<label for="email">E-mail</label>
				<input type="text" name="email" wrap="hard" class="text-box">
				<label for="telefone">Telefone</label>
				<input type="text" name="telefone" wrap="hard" class="text-box">
				<label for="mensagem">Mensagem</label>
				<textarea name="mensagem" wrap="hard" class="text-box t-area"></textarea>

				<button name="enviar" type="submit">Enviar</button>
			</form>
		</div>
	</section>

<!-- Horários -->
	<section class="bg-horario">
		<div class="container">
			<div class="box-horarios">
				<h2>Horários</h2>
				<p>Segunda a Sábado: 9h - 18h</p>
				<p>O salão não abre aos domingos.</p>

				<h2>Agende um horário</h2>
				<p>Ligue agora e agende um horário no Salão de Beleza Belíssima</p>

				<h3>(84) 3207-1599</h3>
				<h3>Av. dos Ipês, 754 A - Neópolis -<br> Natal - RN</h3>
			</div>
		</div>
	</section>
<?php
	include 'footer.php';
?> 