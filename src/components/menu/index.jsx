import React from 'react';
import style from './Menu.module.css';
import {Link} from 'react-router-dom';
const Menu = () => {
return (
<>
<div className={style.menu}>
<div class="linha">
<header>
<div class="coluna col4">
<h1 className={style.logo}>Kira Farias</h1>
</div>
<div class="coluna col8">
<nav>
<ul class="menu inline sem-marcador">
<li><Link to="/">home</Link></li>
<li><Link to="/cliente">Perfil</Link></li>
<li><Link to="/servico">Curso</Link></li>
<li><Link to="/contato">Contato</Link></li>
</ul>
</nav>
</div>
</header>
</div>
</div>
</>
)
}
export default Menu;