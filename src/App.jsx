import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=30&category=16')
      .then(response => response.json())
      .then(data => setApi(data.results))
      .catch(error => console.error(error));
  }, []);
  // Rodou TUDO, mas quando fui colocar o código js pra pegar a api, ele nn aparecia no localhost

  return (
    <>
      <Header />

          <div className="Conteudo">
            <table>
              <thead>
                <tr>
                  <th>Pergunta</th>
                  <th>Nível de Dificuldade</th>
                </tr>
              </thead>

              <tbody>
                {api.map(api => (
                  <tr>
                    <td>{api.question}</td>
                    <td>{api.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

      <Footer />
    </>
  )
}

export default App
