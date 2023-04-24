import Link from "next/link";
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import styles from '@/styles/TaskList.module.css'

const TaskList = ({ todos }) => {
    return (<div className={`${styles.tasklist__container} container`}>
        <h3>This is what you have...</h3>
        {todos ? todos.map((todo) => {
            return (
                <div key={todo._id} id={todo._id} className={styles.task__content}>
                    <div className={styles.task__text}>
                        <div className={styles.task__name}>
                            {todo.taskName}
                        </div>
                        <div className={styles.task__time}>
                            {todo.time}
                        </div>
                    </div>
                    <div className={styles.task__icons}>
                        <div className={styles.task__icon}>
                            <button className={styles.icon__btn} onClick={() => handleChecked(todo._id)}><AiOutlineCheckCircle /></button>
                        </div>
                        <div className={styles.task__icon}>
                            <Link href={`/editTask/${todo._id}`}><button className={styles.icon__btn}><CiEdit /></button></Link>

                        </div>
                        <div className={styles.task__icon}>
                            <button className={styles.icon__btn} onClick={() => handleDelete(todo._id)}><BsTrash /></button>
                        </div>
                    </div>
                </div>

            );
        }) : <></>}
        <div className={styles.add__task}>
            <Link href='/addTask'><button className={styles.add__task_button}>Add Task</button></Link>
        </div>
    </div>);
}

export default TaskList;