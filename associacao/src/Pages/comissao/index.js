import './styles.css';
import valdenir from '../../Assets/valdenir.jpeg'
import keu from '../../Assets/keu.jpeg'
import Luiz from '../../Assets/Luiz.jpeg'
import felipe from '../../Assets/felipe.jpeg'
import anisio from '../../Assets/anisio.jpeg'
import charles from '../../Assets/charles.jpeg'
import naelson from '../../Assets/naelson.jpeg'
import SideBar from '../../componentes/SideBar'
import SideBarMin from '../../componentes/SideBarMin'
import {useState} from 'react'

function Comissao() {
  const [menuOpen, setMenu] = useState(false)
  const [homeOpen, setHomeOpen] = useState(true)
  const [imagemComissao, setImagemComissao] = useState('')
  
  return (
    <>
    {menuOpen &&
          <SideBarMin
           setHomeOpen = {setHomeOpen}
           setMenu = {setMenu}
          />
      }
      {homeOpen &&
          <SideBar
           setHomeOpen = {setHomeOpen}
           setMenu = {setMenu}
          />
      }
    <div className="comissao">
      <div className='grupo1'>
        <nav>
          <img 
          src = {valdenir}
          onClick={(e)=> setImagemComissao(e.target.src)}
          />
          <h3>Valdenir - Presidente</h3>
        </nav>
        <nav>
          <img 
          src = {Luiz}
          onClick={(e)=> setImagemComissao(e.target.src)}
          />
          <h3>Luiz - Vice-Presidente</h3>
        </nav>
        <nav>
          <img 
          src = {naelson}
          onClick={(e)=> setImagemComissao(e.target.src)}
          />
          <h3>Naelson - Diretor</h3>
        </nav>
        
        <nav>
          <img 
          src = {anisio}
          onClick={(e)=> setImagemComissao(e.target.src)}
          />
          <h3>Anisio - Diretor</h3>
        </nav>
      </div>
      <div className='grupo2'>
        <nav>
          <img 
          src = {felipe}
          onClick={(e)=> setImagemComissao(e.target.src)}
          />
          <h3>Felipe - Diretor</h3>
        </nav>
        <nav>
          <img 
          src = {charles}
          onClick={(e)=> setImagemComissao(e.target.src)}
          />
          <h3>Charles - Diretor</h3>
        </nav>
        <nav>
          <img 
          src = {keu}
          onClick={(e)=> setImagemComissao(e.target.src)}
          />
          <h3>Keu - Diretor</h3>
        </nav>
        <nav className='nav'>
        </nav>
      </div>
      {imagemComissao &&
        <div className='modal-img' onClick={()=> setImagemComissao('')}>
          <img src={imagemComissao}/>
      </div>}       
    </div>
    
    </>
  );
}

export default  Comissao;
