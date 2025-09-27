import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou o Antônio, um entusiasta de tecnologia e programação. Aqui compartilho meus projetos, aprendizados e experiências na área de desenvolvimento web. Sinta-se à vontade para explorar e conhecer mais sobre meu trabalho!
                </p>
            </div>
            <div className={styles.imagem}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido} 
                    aria-hidden={true}
                    alt="Círculo colorido"
                />

                <img
                    className={styles.minhaFoto}
                    src={styles.minhaFoto}
                    alt="Foto do Antônio"
                />
            </div>
        </div>
    )
}