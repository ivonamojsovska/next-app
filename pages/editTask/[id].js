import { getTodo } from "@/utils/actions";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/EditTask.module.css'

const EditTask = ({ todo }) => {
    const router = useRouter()

    const [editTodo, setEditTodo] = useState({ ...todo })

    const handleChange = (e) => {
        const editedTodo = { ...editTodo }
        editedTodo[e.target.name] = e.target.value
        setEditTodo(editedTodo)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`/api/todos/${todo._id}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editTodo)
        })
        router.push(`/`)

    }

    return (<div className={`container`} >
        <h3>Edit Task: {editTodo.taskName}</h3>
        <div className={styles.edit__task_form}>
            <form onSubmit={handleSubmit}>
                <div className={styles.form__input}>
                    <input
                        type="text"
                        name="name"
                        value={editTodo.taskName}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.form__input}>
                    <input
                        type="text"
                        name="time"
                        value={editTodo.time}

                        required
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.form__input}>
                    <input
                        type="text"
                        name="place"
                        value={editTodo.place}

                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form__button">
                    <input type="submit" value="Edit Task" className={styles.edit__button} />
                </div>
            </form>
        </div>
    </div>
    );
}

export default EditTask;


export async function getServerSideProps(ctx) {
    const id = ctx.query.id;
    const todo = JSON.parse(JSON.stringify(await getTodo(id)));

    return {
        props: {
            title: "Todo App - Edit Todo",
            description: "This page is for editing an existing todo",
            todo,
        },
    };
}
