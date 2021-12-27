import './styles.css'

function LinhaAssociados( ) {

    return (
      <>
      <ul className="LinhaAssociado"  >
      <li className="">Nome</li>
      <li className="">CPF</li>
      <li className="">Função</li>
      <li className="">Pagamentos</li>
      <li className = "editDelet">
        <div className="editeDelet botao" >
          {/* <img src = {editar} alt = "editar"/> */}
          <p>Editar</p>
        </div>
        <div className = "editeDelet botao" >
          {/* <img src = {deletar} alt = "deletar" /> */}
          <p>Deletar</p>
        </div>
      </li>
    </ul>
    </>
    );
  }
  
  export default LinhaAssociados;
  