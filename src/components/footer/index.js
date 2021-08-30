import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import instagramIcon from '../../icons/instagram-20.png';
import facebookIcon from '../../icons/facebook-20.png';
import youtubeIcon from '../../icons/youtube-20.png';
import whatsappIcon from '../../icons/whatsapp-20.png';
import twitterIcon from '../../icons/twitter-20.png';



function Footer() {
    
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const Whatsapp = '(XX) XXXXX-XXXX';
    const Telefone = '(XX) XXXXX-XXXX';
    const Email = 'atendimento@asiaa.com.br';

 return(
      <>
           <div className="footer">
                <div id="right">
                    <p className="title">Redes sociais</p>   
                    <p>Acompanhe todas as novidade e promoções em nossas redes sociais </p>   
                    <img src={instagramIcon} className="icons"></img>
                    <img src={facebookIcon} className="icons"></img>
                    <img src={youtubeIcon} className="icons"></img>
                    <img src={twitterIcon} className="icons"></img>
                    <p className="title">Metodos de pagametos</p>
                </div>
                <div id="left">
                    <p className="title">Atendimento</p>   
                    <p>Whatsapp: {Whatsapp}<img src={whatsappIcon} className="iconWhats"></img></p> 
                    <p>Telefone: {Telefone}</p>   
                    <p>E-mail: {Email}</p>
                </div>
                <p className="down">Copyright© 2021, Asiaa imports. Todos os direitos reservados.</p>
            </div>
        </>
    )
}

export default Footer