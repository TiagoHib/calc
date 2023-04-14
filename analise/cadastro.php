<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="./stylee.css">
        <title>Cadastro</title>
    </head>
    <body>
        <div class="main_login">
            <div class="right_login">
                <div class="card_login">
                    <div class="textfield">
                        <div class="logo">Logo<br></div> 
                        <label for="usuario">Criar conta</label>
                        <br><br>
                        <form method="POST" action="CONEXÃO.php">
                            <input type="text" name="nome" placeholder="Nome" class="text" required>
                            <br><br>
                            <input type="text" placeholder="Email" class="text" name="email" required>
                            <br> <br>
                            <input type="password" placeholder="Senha" class="text" name="senha" required>
                            <br><br>
                            <input type="password" placeholder="Confirmar senha" class="text" name="senha" required>
                            <a href="./login.php" class="link">Fazer login</a>
                            <input type="submit" name="enviar" value="enviar" class="btn_login">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>