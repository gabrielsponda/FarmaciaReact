function Home() {
    return (
        <>
            <div className="bg-blue-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja bem-vindo!
                        </h2>
                        <p className='text-xl'>
                            Faça suas comprar e gerencie seus produtos sem sair de casa!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4 border p-4">
                                Produtos
                            </div>
                        </div>

                    </div>

                    <div id="imagem" className="
                        flex 
                        justify-center
                        ">
                        <img
                            src="src\assets\Pharmacist-rafiki.svg"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home