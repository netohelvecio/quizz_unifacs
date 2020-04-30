import 'dotenv/config';
import app from './app';

app.listen(process.env.PORT || 3333); // apontar para uma porta do computador e conseguir enviar informações atraves dela 3333 padrao

// o nodemon serve basicamente para nao precisar ficar ligando/desligando o servidor toda vez que ocorre uma alteracao
