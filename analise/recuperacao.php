<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="./stylee.css">
        <title>Recuperação</title>
    </head>
    <body>
        <div class="main_login">
            <div class="right_login">
                <div class="card_login">
                    <div class="textfield">
                        <div class="logo">Logo<br></div> 
                        <label for="usuario">Recuperar senha</label>
                        <div class="sub_titulo">Você receberá um email para recuperar sua senha</div>
                        <form method="POST" action="VERIFICAÇÃO.php">
                            <input type="text" placeholder="Email" class="text" name="email">
                            <br>
                            <a href="./cadastro.php" class="link">Fazer login </a>
                            <input type="submit" name="enviar" value="enviar" class="btn_login">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>