import { getTodo, editTodo, deleteTodo } from '@/utils/actions'

export default async function handler(req, res) {
    try {
        //Get the url param
        const id = req.query.id

        //Show route
        if (req.method === "GET") res.json(await getTodo(id))

        ///Edit route 
        if (req.method === "PUT") res.json(await editTodo(req.body, id))

        ///Delete route
        if (req.method === "DELETE") res.json(await deleteTodo(id))

        ///Anything else 
        if (!["GET", "PUT", "DELETE"].includes(req.method))
            res.status(400).send("No Response for that method")

    } catch (error) {
        res.status(400).json({ error })
    }
}