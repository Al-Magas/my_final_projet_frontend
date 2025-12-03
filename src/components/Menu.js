import plat1 from './icons_assets/plat1.jpeg';
import plat2 from './icons_assets/plat2.jpeg';
import plat3 from './icons_assets/plat3.jpeg';
function  Menu(){
    return(
        <div className='primaryCard'>
                  <h2>Les plats de la semaine</h2>
                  <div className='secondaryCard'>
                        <img src={plat1} alt=" 1er plat" />
                        <h3>plat 1</h3>
                        <h4>500 Gnf</h4>
                        <p>description</p>
                  </div>
                   <div className='secondaryCard'>
                        <img src={plat2} alt="2e plat" />
                        <h3>plat 2</h3>
                        <h4>600 Gnf</h4>
                        <p>description 2</p>
                  </div>
                   <div className='secondaryCard'>
                        <img src={plat3} alt="3e plat" />
                        <h3>plat 2</h3>
                        <h4>600 Gnf</h4>
                        <p>description 2</p>
                  </div>
            </div>
    );
}
export default Menu;