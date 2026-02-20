import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'

function App() {
  return (
    <BrowserRouter>

      <HeaderComponent />

      <Routes>
        {/* //http://localhost:5173 */}
        <Route path='/' element={<ListEmployeeComponent />} />

        {/* {//http://localhost:5173/employees */}
        <Route path='/employees' element={<ListEmployeeComponent />} />

        <Route path='/add-employee' element={<EmployeeComponent />} />
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
