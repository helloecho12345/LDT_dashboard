import React from 'react'
import './App.css'
// import Dashboard from './components/Dashboard'
// import {DropDownList} from './components/DropDownList';
// import {Element} from './components/Element';
import SearchTable from './components/FilterTable';

const App = () => {
  return (
    <div className='App'>
      {/* <Dashboard /> */}
      <SearchTable />
      {/* <DropDownList /> */}
      {/* <Element /> */}
    </div>
  );
}

export default App;