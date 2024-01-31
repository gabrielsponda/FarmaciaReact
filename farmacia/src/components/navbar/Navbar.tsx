import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-blue-900 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to="/" className="text-2xl font-bold">Farmácia Online</Link>

                    <div className='flex gap-4'>
                        <div className='hover:underline'>Produtos</div>
                        <Link to="/categorias" className='hover:underline'>Categorias</Link>
                        <Link to="/cadastrarCategoria" className='hover:underline'>Cadastrar categoria</Link>
                        <div className='hover:underline'>Perfil</div>
                        <div className='hover:underline'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar