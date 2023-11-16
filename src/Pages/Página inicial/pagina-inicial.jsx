import React from "react";
import './pagina-inicial.css';

export function PaginaInicial(){

    const cards = [
        {
            title: 'titulo'
        },
        {
            title: 'titulo'
        },
        {
            title: 'titulo'
        },
        {
            title: 'titulo'
        },
        {
            title: 'titulo'
        },
        {
            title: 'titulo'
        },
        {
            title: 'titulo'
        },
        {
            title: 'titulo'
        },
    ];

    return (
        <div className="pagina-inicial-main">
            <section className="banner">
                <p>Liberte seu Potencial, Encontre seu Próximo Desafio: Freelancers e Vagas em um Clique</p>
                <div className="btn-img">
                    <div className="left">
                    <p>MEET JOBS</p>
                    <button className="cadastrar">CADASTRAR</button>
                    </div>
                    <div className="right">
                        <img src=".\src\assets\img-banner.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="instrucoes">
                <img src=".\src\assets\img-provisoria.png" alt="" />
        
            </section>
            <section className="cards">
                {
                    cards.map((card) =>{
                        return <div className="card">
                            {card.title}
                        </div>
                    })
                }

            </section>
            <section className="comments">
                
            <div className="comment-card"> COMENTARIO</div>   
            <div className="comment-card"> COMENTARIO</div>  
            <div className="comment-card"> COMENTARIO</div>  
                    
            </section>

        </div>
        );

}

export default PaginaInicial;