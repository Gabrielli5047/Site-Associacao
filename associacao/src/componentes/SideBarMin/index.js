import './styles.css';
import menu from '../../Assets/menu.png'
import sair from '../../Assets/sair.png'


function SideBarMin({setHomeOpen, setMenu}) {

  const menuOpen = ()=>{
    setHomeOpen(true)
    setMenu(false)
  }

  return (
    <div className="sideBarMin">
      <div  className = "menu-sideBar">
        <img
            onClick={menuOpen}
            src = {menu}
            />
      </div>
      <img 
          className='desconectarMenu'
          src={sair}
      />
    </div>
  );
}

export default SideBarMin;
