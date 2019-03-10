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


	<div class="bg-dkt">	
		<div class="container">
		<!-- Formulário -->
			<section class="bg-form">
				<form action="enviar.php" method="post" name="form" class="formphp">
					<label for="nome">Nome</label>
					<input type="text" name="nome" wrap="hard" class="text-box" id="campo" required>
					<label for="email">E-mail</label>
					<input type="text" name="email" wrap="hard" class="text-box" id="campo" required>
					<label for="telefone">Telefone</label>
					<input type="text" name="telefone" wrap="hard" class="text-box" required>
					<label for="mensagem">Mensagem</label>
					<textarea name="mensagem" wrap="hard" class="text-box t-area" required></textarea>
					<label class="nao-aparece">Se você não é um robô, deixe em branco.</label>
					<input type="text" class="nao-aparece" name="leaveblank">
					<label class="nao-aparece">Se você não é um robô, não mude este campo.</label>
					<input type="text" class="nao-aparece" name="dontchange" value="http://" >

					<button name="enviar" type="submit" id="form-submit">Enviar</button>
				</form>		
			</section>

		<div class="vertical-bar invisible-mb"></div>

		<!-- Horários -->
			<section class="bg-horario">			
				<div class="box-horarios">
					<h2>Horários</h2>
					<p>Segunda a Sábado: 9h - 18h</p>
					<p>O salão não abre aos domingos.</p>

					<h2>Agende um horário</h2>
					<p>Ligue agora e agende um horário no Salão de Beleza Belíssima</p>

					<h3>(84) 3207-1599</h3>
					<h3>Av. dos Ipês, 754 A - Neópolis -<br> Natal - RN</h3>
				</div>			
			</section>
		</div>
	</div>
<?php
	include 'footer.php';
?> 