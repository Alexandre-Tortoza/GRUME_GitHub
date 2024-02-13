<?php
// Verifique se o usuário está autenticado
session_start();
if (!isset($_SESSION["autenticado"]) || $_SESSION["autenticado"] !== true) {
    // Se não estiver autenticado, redirecione para a página de login
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Protegida</title>
    <link rel="stylesheet" href="../../css/_priv/priv.css">
    <script src="../../js/_priv/_admin.js"></script>
</head>
<body id="admin">

    <header class="adminMenu">
            <div>
                <button onclick="changeOption(0)">Equipe</button>
                <button onclick="changeOption(1)">Orientações concluidas</button>
                <button onclick="changeOption(2)">Publicações</button>
                <button onclick="changeOption(3)">Documentos Uteis</button>
                <button onclick="changeOption(4)">Disciplina</button>
            </div>
            <a id="admin__logOut" href="logout.php">Sair</a>   
    </header>

    <main>
        <div id="container"></div>
    </main>

</body>
</html>
    
