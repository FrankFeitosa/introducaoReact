import '../components/NovoComponent.css'
export const NovoComponent = () => {
    return (
        <div>
            <article className='artigo'>
                <div id='img'>
                    <img src="https://www.filhovemver.com.br/wp-content/uploads/2014/11/ponte-com-por-do-sol.jpg" alt="Imagem do por do sol" />
                </div>
                <div className='paragrafy'>
                    <h3>Por do Sol</h3>
                    <p>
                        Um lindo por do Sol acompanhado, do mar calmo, da brisa leve, um ambiente cheio de belezas naturais e ainda mais com alguém que você ama e quer desfrutar de momentos especiais e que brilham os olhos de todos.
                    </p>
                </div>
            </article>
        </div>
    );
}

export const NovoComponent2 = () => {
    return ( 
        
        <div>
            <article className='artigo'>
                <div id='img-1'>
                    <img src="https://i.pinimg.com/originals/96/f5/ac/96f5ac0c81c929c6d8bdc9decca376ff.jpg" alt="Imagem do nascer do sol" />
                </div>
                <div className='paragrafy'>
                    <h3>Nascer do Sol</h3>
                    <p>
                        Um lindo nascer do Sol acompanhado, do mar calmo, da brisa leve, um ambiente cheio de belezas naturais você vai desfrutar de momentos especiais, que trarão ótimas recordações.
                    </p>
                </div>
            </article>
        </div>
     );
}

export default { NovoComponent, NovoComponent2}
 