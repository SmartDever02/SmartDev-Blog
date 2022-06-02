import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';

//@ts-ignore
const Landing = lazy(() => import('./pages/landing'));
//@ts-ignore
const Examples = lazy(() => import('./pages/examples'));

function App() {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/examples' element={<Examples />} />
          </Routes>
        </Suspense>
      </Router>
    </Layout>
  );
}

export default App;
