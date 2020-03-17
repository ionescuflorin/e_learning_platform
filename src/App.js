import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import News from './components/Layout/News/News';

function App() {
  return (
    <div className="App">
      <News />
      <Layout> 
        <Main />
      </Layout>
    </div>
  );
}

export default App;
