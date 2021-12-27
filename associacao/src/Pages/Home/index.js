import './styles.css';
import SideBar from '../../componentes/SideBar'
import SideBarMin from '../../componentes/SideBarMin'
import {useState} from 'react'

function Home() {
  const [menuOpen, setMenu] = useState(false)
  const [homeOpen, setHomeOpen] = useState(true)
  
  return (
    <div className="Home">
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
    </div>
  );
}

export default Home;
