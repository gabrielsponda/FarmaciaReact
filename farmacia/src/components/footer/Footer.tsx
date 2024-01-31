import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-blue-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Farmácia | Gabriel Sponda
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/gabrielsponda/" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/gabrielsponda" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer