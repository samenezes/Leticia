import { useState } from 'react'
import '../../App.css'
import stylefooter from '../Footer/Footer.module.css'

function Footer() {
    const [count, setCount] = useState(0)

    return (
        <>
            <footer className={stylefooter.footer}>
                <div className={stylefooter.footerdiv}>3D1 | Letícia Silva França | 21</div>
            </footer>
        </>
  )
}
export default Footer