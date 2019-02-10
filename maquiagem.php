<?php
	include 'header-pages.php';
?> 

<link rel="stylesheet" href="css/style-maquiagem.css">

<!-- Introdução -->
	<section class="intro">
		<div class="mask">
			<div class="text-intro">
				<h1>Maquiagem</h1>
				<p><a href="index.php">Início/</a><a href="index.php #depilacao">Serviços/</a><a href="depilacao.php">Maquiagem</a></p>
			</div>
		</div>
	</section>
<!-- Procedimentos -->
	<section class="procedures">
		<div class="container">
			<ul>
				<h2>Maquiagem</h2>
				
				<li>Sem cílios</li>
				<li>Com cílios</li>
				<li>Básica</li>
			</ul>
		</div>
	</section>
<!-- Serviços -->
	<section class="services">
		<div class="container">
			<a href="cabelo.php"><div class="svc" id="svc-cabelo">
				<div class="box-svc">
					<h3>Cabelo</h3>
				</div>
			</div></a>

			<a href="unha.php"><div class="svc" id="svc-unha">
				<div class="box-svc">
					<h3>Unhas</h3>
				</div>
			</div></a>

			<a href="depilacao.php"><div class="svc" id="svc-depilacao">
				<div class="box-svc">
					<h3>Depilação</h3>
				</div>
			</div></a>
		</div>
	</section>
<!-- Sessão de Transição --> 
	<section class="transition">
		<div class="container">
			<div class="horizontal-bar"></div>
		</div>
	</section>
<?php
	include 'regular-pages.php';
	include 'footer.php';
?> 