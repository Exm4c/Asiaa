export function Menuitems(id) {

    return (id.id === 1) ?

        <div>
            <a href="/">Eletrônicos</a>
            <a href="/">Celulares</a>
            <a href="/">Computadores</a>
        </div> :

        <div>

            <a href="/">Login</a>
            <a href="/">Cadastre-se</a>

        </div>

}

