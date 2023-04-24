import {
    createContext, useState
} from "react";

export const TodosData = createContext()

function Context({ children }) {
    const [todos, setTodos] = useState([])

    return (
        <TodosData.Provider value={(todos, setTodos)}>
            {children}
        </TodosData.Provider>
    )
}

export default Context