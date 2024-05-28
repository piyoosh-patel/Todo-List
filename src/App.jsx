
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='bg-black text-white font-extrabold w-32 float-right py-3'>To-do Demo</h1>
      <AddTodo />
      {/* <Todos /> */}
    </>
  )
}

export default App