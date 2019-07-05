import React, { useState } from 'react';
import RecourceList from './RecourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <RecourceList resource={resource} />
    </div>
  );
};

export default App;
