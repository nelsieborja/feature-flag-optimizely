import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createInstance, OptimizelyProvider, OptimizelyFeature } from '@optimizely/react-sdk';

const optimizely = createInstance({
  sdkKey: process.env.REACT_APP_OPTIMIZELY_SDK_KEY
});

const App: React.FC = () => {
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: 'user123'
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <OptimizelyFeature feature="feature_test">
            {isEnabled => (
              <div
                style={{
                  background: isEnabled ? '#09d3ac' : '#cc0000',
                  marginTop: 30,
                  padding: '10px 30px'
                }}
              >
                {isEnabled ? 'Got the feature!' : 'Did not get the feature!'}
              </div>
            )}
          </OptimizelyFeature>
        </header>
      </div>
    </OptimizelyProvider>
  );
};

export default App;
