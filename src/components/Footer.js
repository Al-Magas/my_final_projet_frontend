import Logo from './icons_assets/Logo.svg'
function Footer(){
    return(
        <footer>
              <div>
                <img src={Logo} alt="Logo"/>
              </div>
              <div>
                <h2>Contacts</h2>
                <p>Tel:+224 612346266</p>
                <p>Mail: littlelemon@gmail.com</p>
                <p>Localisation:Chicago</p>
              </div>
              <div>
                <h2>Media sociaux</h2>
                <p>Facebook: Little Lemon</p>
                <p>Youtube:   Little Lemon Restaurant</p>
                <p>LinkedIn: Little Lemon Restaurant</p>
              </div>
              <div>
                <h2>Liens utils</h2>
                <p>Recettes africaines</p>
                <p>Recettes orientales</p>
                <p>Recettes asiatiques</p>
              </div>
        </footer>
    );
}
export default Footer;