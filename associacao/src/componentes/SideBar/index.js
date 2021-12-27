import './styles.css';
import comissao from '../../Assets/comissao.jpeg'
import home from '../../Assets/home.png'
import eventos from '../../Assets/eventos.png'
import pagamento from '../../Assets/pagamento.png'
import inicio from '../../Assets/inicio.png'
import pessoas from '../../Assets/pessoas.png'
import sair from '../../Assets/sair.png'
import lideres from '../../Assets/lideres.png'
import {useState} from 'react'

function SideBar({setHomeOpen, setMenu}) {
  const [imagemPerfil, setImagemPerfil] = useState('')

  const mudarMenu = ()=>{
    setHomeOpen(false) 
    setMenu(true)
  }
  
  return (
    <div className='containerSideBar'>
    <div className="info-assoc">
       <div className = "headerSide flex">
            <img 
                onClick={mudarMenu}
                className = "home"
                src = {home}
            />
            <img
            onClick={(e)=> setImagemPerfil(e.target.src)}
            className = "img-perfil"
            src = {comissao}
            />
            <h2>Baba Veteranos Do Salava</h2>
        </div>
        <div className = "sectionSidebar">
           <ul>
               <li>
                <img src = {inicio}
               />
               <a href='home'>Pagina inicial</a>
               </li>
               <li>
                <img src = {lideres}/>
                <a href='comissao'>Comissão</a>
               </li>
               <li>
                <img src = {pessoas}/>
                <a href='associados'>Associados</a>
               </li>
               <li>
                <img src = {eventos}/>
                <a href='eventos'> Eventos</a>
               </li>
               <li>
                <img src = {pagamento}/>
                <a href='Pagamentos'> Pagamentos</a>
               </li>
           </ul>
          <img 
          className='desconectar'
          src={sair}
          />
        </div>     
    </div>
      {imagemPerfil &&
        <div className='modal-img' onClick={()=> setImagemPerfil('')}>
          <img src={imagemPerfil}/>
      </div>}
    </div >
  );
}

export default SideBar;
