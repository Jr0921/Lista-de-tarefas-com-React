
import { useState } from 'react'

function App() {
    const [tarefas, setTarefas] = useState([]) //Estado do React
    const [inputValue, setInputValue] = useState('') //Estado do React

    function inputChange(event) {
        setInputValue(event.target.value)
    }

    function buttonClik() {
        setTarefas([...tarefas, inputValue])
    }

    return (
        <div>
            <input placeholder="Digite a sua tarefa" onChange={inputChange} />
            <button onClick={buttonClik}>Adicionar Tarefa</button>

            <ul>
                {
                    tarefas.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default App