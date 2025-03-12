import { useSelector } from "react-redux"

useSelector

const App = () => {

  const { tasks } = useSelector(state => state.task)



  return (
    <>
      <pre><code>{JSON.stringify(tasks)}</code></pre>
    </>
  )
}

export default App