import React from 'react';
import { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';

import Main from './components/Main';

function App() {


  return (
    <div className="container">
      <Main />
    </div>
  );
}
export default App;