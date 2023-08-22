import { useState } from 'react'
import '../../App.css'
import styleheader from '../Header/Header.module.css'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header className={styleheader.header}>
                <div className={styleheader.headerdiv}>Prova Prática | 2ª Etapa | Framework</div>
            </header>
        </>
    )
}
export default Header