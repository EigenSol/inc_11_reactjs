import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Section from './components/Section.js';
import SnakeyComponent from './components/SnakeyComponent.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sections = [
  {
    title: "Welcome to Eigenagents",
    details: "This is a sample section for the Eigenagents website.",
  },
  {
    bold: true,
    title: "Available Agents",
    details: `
      Available Agents:
      - this section will have a list of agents Available at EigenAgents
      - Users can view their features and details
      - They can try an online demo of assistnats
      - Users can also book a demo with the team
      - Users can also book a custom assistant development session
    `,
  }
]

root.render(
  <React.StrictMode>

    {sections.map(({title, details='', bold=false}, index) => (
      <Section
        key={index}
        title={title}
        details={details}
        bold={bold}
      />
    ))}

    <SnakeyComponent>
      <h1>Hello</h1>
    </SnakeyComponent>
    
  </React.StrictMode>
);