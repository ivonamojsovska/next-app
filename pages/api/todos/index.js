import { getTodos, createTodo } from "@/utils/actions";

export default async function handler(req, res) {
    try {
        //Index route
        if (req.method === "GET") {
            res.json(await getTodos()
            )
        }

        //Create route
        if (req.method === "POST")
            res.json(await createTodo(req.body) ? await getTodos() : { error: 'Error within create todo function' })

        //Anything else
        if (!["GET", "POST"].includes(req.method))
            res.status(400).send("No response for that method")

    } catch (error) {
        res.status(400).json({ error })
    }
}