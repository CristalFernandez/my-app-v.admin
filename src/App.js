import './App.css';
import 'styled-components';
import React, {useState, useEffect} from 'react';
import DataTable , {createTheme} from 'react-data-table-component';
import Navbar from './components/navbar';

function Table(){
  return(
      <div className='container'>
          <Table>
              Administrador de tareas
          </Table>

      </div>
  )
  }

const App = ()=> {
    ///1.config hooks
    const [users, setUsers] = useState( [])

    ///2.funcion para mostrar los datos con fetch
    const URL = 'https://gorest.co.in/public/v2/users'
    const showData = async () => {
        const response = await fetch(URL)
        const data     = await response.json()
        console.log(data)
        setUsers(data)
    }

    useEffect( ()=>{
        showData()

    }, [])

    ///3 config las columns para datatable
    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'NAME',
            selector: row => row.name
        },
        {
            name: 'E-MAIL',
            selector: row => row.id.email
        }
    ]
    ///personalizar
    createTheme('custom', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
      
      const MyComponent = () => (
        <DataTable
          title="Arnold Movies"
          columns={columns}
          theme="solarized"
        />
      );
      

    ///4. mostrar la data en datatable

    return(
        <div className='App'>
            <Navbar/>
            <h1>Administrador de Tareas</h1>
        <DataTable
        columns={columns}
        data={users}
        theme='custom'
        pagination
        />

            
        </div>
    );
} 

export default App;