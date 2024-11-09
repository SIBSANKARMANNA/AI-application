// import React from 'react';
// import Navbar from '../components/Shared/Navbar';
// import Footer from '../components/Shared/Footer';
// import './Home.css';

// const Home = () => (
//   <div className="home">
  
//     <Navbar/>
//     <main>
//       <h1>Welcome to the AI Web App</h1>
//       <p>This web application integrates AI features to provide personalized experiences.</p>
//     </main>
//     <Footer />
//   </div>
// );

// export default Home;

import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import './Home.css';

const Home = () => (
  <div className="home">
    <Navbar />
    <main>
      <h1>Welcome to the AI Web App</h1>
      <p>This web application integrates AI features to provide personalized experiences.</p>

      {/* New Section with three-column content */}
      <div className="home-content-grid">
        <div className="grid-item">
          <h2>Sentiment Analysis</h2>
          <p>Our AI analyzes text sentiment to help you understand emotions in customer feedback.</p>
        </div>
        <div className="grid-item">
          <h2>Personalized Recommendations</h2>
          <p>Experience tailored suggestions based on AI-driven algorithms for a personalized journey.</p>
        </div>
        <div className="grid-item">
          <h2>Admin Dashboard</h2>
          <p>Admins can manage users, assign roles, and view system metrics easily from the dashboard.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
