import React from 'react'
const Contato = () => {
return (
<div>
<div class="linha">
<section>
<div class="coluna col5">
<h3>Localização</h3>
<img src="img/mapa.jpg" alt="" />
<ul class="sem-padding sem-marcador">
<li>Adovel Quintino da Silva</li>
<li>Jardim Das Graças</li>
<li>Cotia, SP</li>
</ul>
<h3>Contato direto</h3>
<ul class="sem-padding sem-marcador">
<li>Fone: <strong>(11) 9 99989-3632</strong></li>
<li>E-mail: <strong>kirafarias699@gmail.com</strong></li>
<li>Instagram: <strong>kirafarias_dc</strong></li>
</ul>
</div>
<div class="coluna col7 contato">
<h2>Envie uma mensagem</h2>
<form action="">
<label for="nome">Seu nome:</label>
<input type="text" name="nome" id="nome" />
<label>Seu e-mail:</label>
<input type="text" name="email" id="email" />
<label>Assunto:</label>
<input type="text" name="assunto" id="assunto" />
<label>Mensagem:</label>
<textarea name="menasgem" id="mensagem"></textarea>
<input type="submit" class="botao" name="enviar"
value="Enviar mensagem &raquo;" />
</form>
</div>
</section>
</div>
</div>
)
}
export default Contato;