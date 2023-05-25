<?php
// http://localhost/api/php

//Variáveis
$url = "localhost";
$usuario = "root";
$senha = "root";
$base = "angular-api";

//Conexão
$conexao = mysqli_connect($url, $usuario, $senha, $base);

//Arrumar caracteres especiais
mysqli_set_charset($conexao, "utf8");

?>