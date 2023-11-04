import React from 'react';
import './App.css';
import { useQuery } from 'react-query';
import { Sidebar } from 'widgets/Sidebar';
import { fetchMostPopular } from './widgets/Sidebar/apiCalls/fetchMostPopular/fetchMostPopular';
import { ApiItems } from './widgets/Sidebar/apiCalls/fetchMostPopular/types';
import { Main } from './widgets/Main/Main';

function App() {
  const { data } = useQuery<ApiItems[]>('mostPopular', fetchMostPopular);

  return (
    <div className="App">
      <Sidebar data={data} />
      <Main />
    </div>
  );
}

export default App;
