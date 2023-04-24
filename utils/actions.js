//import todos from './data.json'
import { connect } from './connection'
import Todo from '@/models/TodoModel'

///Get all todos
export const getTodos = async () => {
    try {
        const connected = await connect()
        return await Todo.find({})
    } catch (error) {
        return { error: 'Error in getTodos function' }
    }
}

///Get single todo

export const getTodo = async (id) => {
    try {
        const connected = await connect()
        return await Todo.findById(id)

    } catch (error) {
        return { error: 'Error in getTodo function' }
    }
}

///Create a todo
export const createTodo = async (newTodo) => {
    try {
        const connected = await connect()
        return await Todo.create(newTodo)

    } catch (error) {
        return { error: 'Error in creating todo function' }
    }
}

///Edit todo 
export const editTodo = async (editedTodo, id) => {
    try {
        const connected = await connect()
        return await Todo.findByIdAndUpdate(id, editedTodo, { new: true })

    } catch (error) {
        return { error: 'Error in edit todo function' }
    }
}

///Delete todo
export const deleteTodo = async (id) => {
    try {
        const connected = await connect()
        return await Todo.findByIdAndRemove(id)
    }
    catch (error) {
        return { error: 'Error in delete todo function' }
    }

}

