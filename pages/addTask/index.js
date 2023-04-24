import { React, useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/AddTask.module.css'


const AddTask = () => {
    const router = useRouter()
    const [task, setTask] = useState({ title: null, time: null, place: null });

    const handleChange = (e) => {
        const newTask = { ...task };
        newTask[e.target.name] = e.target.value;
        setTask(newTask);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/todos', {
            method: 'post',
            headers: { "Content-Type": "application/json" }
            , body: JSON.stringify(task)
        })
        e.target.reset();
        router.push('/')

    };

    return (
        <>
            <div className={`container`}>
                <h3>Let's add some tasks...</h3>
                <div className={styles.add__task_form}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__input}>
                            <input
                                type="text"
                                name="taskName"
                                placeholder="What you need to do?"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.form__input}>
                            <input
                                type="text"
                                name="time"
                                placeholder="What time?"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.form__input}>
                            <input
                                type="text"
                                name="place"
                                placeholder="Where?"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.form__button}>
                            <input type="submit" value="Add Task" className={styles.add__task_button} />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTask;
