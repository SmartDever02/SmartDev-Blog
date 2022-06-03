import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Landing from './pages/landing/Landing';

//@ts-ignore
const Examples = lazy(() => import('./pages/examples'));

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/examples/*' element={<Examples />} />
          </Routes>
        </Router>
      </Suspense>
    </Layout>
  );
}

export default App;
