import Form from "./Form"
import TodoList from "./TodoList"
import './global.css'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    // npm i uuid for random id
    // import { v4 as uuidv4 } from 'uuid';


    let [state, setState] = useState({
        items: [],
        course: "",
        trainer: "",
        id: uuidv4()
    })

    let handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let newItem = {
            id: state.id,
            course: state.course,
            trainer: state.trainer
        }
        let finalItems = [...state.items, newItem]
        setState({
            items: finalItems,
            id: uuidv4(),
            course: "",
            trainer: ""
        })
    }

    // console.log(state);

    let handleDelete = (x) => { // x=2

        let filterData = state.items.filter((value) => value.id != x) // 1 != 2 , 2 != 2 , 3 != 2
        console.log("filtered data", filterData); //[{react},{node}]
        setState({ ...state, items: filterData })

    }
    // filter method return array and find method does not return array

    let handleUpdate = (y) => {

        let restItem = state.items.filter((value) => value.id != y)
        let dataToEdit = state.items.find((value) => value.id == y)
        console.log(dataToEdit);
        setState({
            ...state,
            items: restItem,
            course: dataToEdit.course,
            trainer: dataToEdit.trainer
        })
    }


    return (
        <>
            <article>
                <h2>ToDo List</h2>
                <main>
                    <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                </main>
            </article>
        </>
    )
}

export default App  