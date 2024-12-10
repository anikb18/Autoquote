import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { QuoteRequest } from './pages/QuoteRequest';
import { Login } from './pages/Login';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/quote-request" element={<QuoteRequest />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;