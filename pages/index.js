
import styles from '@/styles/Home.module.css'

import TaskList from '@/components/TaskList'


import { getTodos } from '@/utils/actions'



export default function Home({ todos }) {
  return (

    <TaskList todos={todos} />

  )
}

export async function getServerSideProps(ctx) {
  const todos = JSON.parse(JSON.stringify(await getTodos()))
  return {
    props: {
      title: "Done Undone - Main page",
      todos
    }
  }
}
