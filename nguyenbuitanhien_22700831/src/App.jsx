import { useEffect, useState } from 'react'
import './App.css'
import './css/Layout.css'
import Header from './components/Header'
import axios from 'axios'
import SideBar from './components/SideBar'
import 'boxicons/css/boxicons.min.css'
import Content from './components/Content'

const API1 = "http://localhost:3000/menu"
const API2 = "http://localhost:3001/overview"
const API3 = "http://localhost:3002/customers"

function App() {
  const [menu, setMenu] = useState([])
  const [overview, setOverview] = useState([])
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const [postsRes, usersRes, commentsRes] = await Promise.all([
          axios.get(API1),
          axios.get(API2),
          axios.get(API3),
        ]);

        setMenu(postsRes.data);
        setOverview(usersRes.data);
        setCustomers(commentsRes.data);
      }catch(error){
        console.error("Error fetching data:", error)
      }
    }

    fetchData();
  },[])

  console.log("menu", menu)
  console.log("overview", overview)
  console.log("customers", customers)

  return (
    <div className='flex justify-center'>
      <div className="container">
        <Header/>
        <SideBar Menu = {menu}/>
        <Content Overview={overview} Customers={customers}/>
      </div>
    </div>
  )
}

export default App
