import { useEffect, useState, createContext } from 'react'
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

export const CustomersContext = createContext();
function App() {
  const [menu, setMenu] = useState([]);
  const [overview, setOverview] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuRes, overviewRes, customersRes] = await Promise.all([
          axios.get(API1),
          axios.get(API2),
          axios.get(API3),
        ]);
        setMenu(menuRes.data);
        setOverview(overviewRes.data);
        setCustomers(customersRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
    <div className="container">
      <Header />
      <SideBar Menu={menu} />
      <CustomersContext.Provider value={{ customers, setCustomers }}>
        <Content Overview={overview} />
      </CustomersContext.Provider>
      </div>
    </div>
  );
}

export default App;

