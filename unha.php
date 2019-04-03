<?php
	include 'header-pages.php';
?> 

<link rel="stylesheet" href="css/style-unha.css">

<!-- Introdução -->	
	<section class="intro">
		<div class="mask">
			<div class="text-intro">
				<h1>Unhas</h1>
				<p><a href="index.php">Início/</a><a href="index.php #unha">Serviços/</a><a href="unha.php">Unhas</a></p>
			</div>
		</div>
	</section>
<!-- Procedimentos -->
	<section class="procedures">
		<div class="container">
			<div>
				<ul>
					<h3>Manicure</h3>
					
					<li>Unhas de gel</li>
					<li>Unhas de acrigel</li>
					<li>Unhas de fibra de vidro</li>
					<li>Unhas postiças</li>
					<li>Banho de gel</li>
				</ul>
				<ul>
					<h3>Pedicure</h3>
					
					<li>Spa dos pés</li>
				</ul>
			</div>
			<div class="vertical-bar-xl invisible-mb"></div>
			<?php include "horarios.php" ?>
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

			<a href="depilacao.php"><div class="svc" id="svc-depilacao">
				<div class="box-svc">
					<h3>Depilação</h3>
				</div>
			</div></a>

			<a href="maquiagem.php"><div class="svc" id="svc-maquiagem">
				<div class="box-svc">
					<h3>Maquiagem</h3>
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