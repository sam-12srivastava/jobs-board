import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import FeaturedJobs from './components/FeaturedJobs';
import JobListings from './components/JobListings';
import JobDetail from './components/JobDetail';
import CandidateDashboard from './components/CandidateDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import ApplicationForm from './components/ApplicationForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={FeaturedJobs} />
          <Route path="/job-listings" component={JobListings} />
          <Route path="/job-detail" component={JobDetail} />
          <Route path="/candidate-dashboard" component={CandidateDashboard} />
          <Route path="/employer-dashboard" component={EmployerDashboard} />
          <Route path="/application-form" component={ApplicationForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
