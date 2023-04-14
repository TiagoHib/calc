<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="./stylee.css">
        <title>Login</title>
    </head>
    <body>
        <div class="main_login">
            <div class="right_login">
                <div class="card_login">
                    <div class="textfield">
                        <div class="logo">Logo<br></div> 
                        <label for="usuario">Login</label>
                        <br><br>
                        <form method="POST" action="VERIFICAÇÃO.php">
                            <input type="text" placeholder="Email" class="text" name="email">
                            <br> <br>
                            <input type="password" placeholder="Senha" class="text" name="senha">
                            <br> <br>
                            <a href="./cadastro.php" class="link">Criar conta</a>
                            <a href="./recuperacao.php" class="link">Recuperar senha</a><br>
                            <input type="submit" name="enviar" value="enviar" class="btn_login">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>