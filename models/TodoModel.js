import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    taskName: String,
    time: String,
    place: String
})

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

export default Todo