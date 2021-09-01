export function Menuitems(id) {

   // { console.log(id) }
   //Acho que to comparando duas coisas diferentes

    return (id = 'Todos os produtos') ? <div>
        <a href="/">Eletrônicos</a>
        <a href="/">Celulares</a>
        <a href="/">Computadores</a>

    </div> : <div>
        <a href="/">Conta</a>
        <a href="/">Cadastre-se</a>

    </div>

}

