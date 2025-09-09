import { Fragment } from 'react/jsx-runtime'
import './Banner.css'

export const Banner = () => {
    // JSX: JavaScript XML
    return (
        <> {/* Fragment */}
            <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
        <h1>Teste</h1>
        </>
    )
}