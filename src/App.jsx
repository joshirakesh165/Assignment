import './App.css'
import VirtualScroll from './Assignments/VirtualScroll/VirtualScroll'
import './App.css'
import InfiniteScroll from './Assignments/InfiniteScroll/InfiniteScroll'
import Explorer from './Assignments/Explorer/Explorer'
import PasswordGenerate from './Assignments/PasswordGenerator/PasswordGenerate'
import Form from './Assignments/FormLib/Form'
import Lauout from './Lauout'
import AssignmentPage from './Assignments/AssignmentPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Lauout />,
      children: [
        { path: '/assignment/:name', element: <AssignmentPage /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
