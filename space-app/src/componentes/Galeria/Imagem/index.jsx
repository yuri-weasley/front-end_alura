const Imagem = ({ foto, expandida = false, aoZoomSolicitado }) => {
    return(<figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.titulo}/>
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone>
                    <img src="/icones/favorito.png" alt="Ícone de favorito"/>
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                    <img src="/icones/expandir.png" alt="Ícone de expandir"/>
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </figure>)
}

export default Imagem;