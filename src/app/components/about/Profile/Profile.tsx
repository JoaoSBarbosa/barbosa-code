export const Profile=()=>{
    return(
        <>
            <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
            <p className="mb-4">
                Sou um programador júnior apaixonado por desenvolvimento de
                software. Tenho especial interesse em tecnologia, ficção
                científica, medieval e terror. Além disso, sou entusiasta de jogos
                RPG e aventura.
            </p>

            <p className="mb-4">
                Gosto de ouvir música, fazer pesquisas e, claro, programar. Atualmente,
                trabalho na Fanstore, onde desenvolvo projetos em JavaScript,
                React, HTML e CSS, incluindo páginas web e componentes em
                WordPress.
            </p>

            <p className="mb-4">
                Sou organizado, responsável e me adapto facilmente a mudanças. Meu
                objetivo é agregar valor e fazer a diferença nos projetos em que
                trabalho.
            </p>

            <p className="mb-8">
                Estou aberto a novos desafios e oportunidades de crescimento.
                Entre em contato comigo!
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:mr-4 mb-2">
                    <strong>Idade:</strong> 30 anos
                </div>
                <div className="md:mr-4 mb-2">
                    <strong>Endereço:</strong> Itaquaquecetuba - São Paulo/SP
                </div>
                <div className="md:mr-4 mb-2">
                    <strong>Nacionalidade:</strong> Brasileiro
                </div>
                <div className="md:mr-4 mb-2">
                    <strong>Inglês:</strong> Técnico
                </div>
            </div>

            <div className="mt-4">
                <strong>Email:</strong> contato.jsbarbosa@gmail.com
            </div>
            <div className="mt-2">
                <strong>Telefone:</strong> 11 9 99453-7464
            </div>
        </>
    )
}