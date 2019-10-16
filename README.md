A simple implementation of Feature Flag in React using [Optimizely](https://www.optimizely.com/rollouts/).

### Example

```js
import { createInstance, OptimizelyProvider, OptimizelyFeature } from '@optimizely/react-sdk';

const optimizely = createInstance({
  sdkKey: '<your_SDK_key>'
});

class App extends React.Component {
  render() {
    return (
      <OptimizelyProvider optimizely={optimizely}>
        <OptimizelyFeature feature="<your_feature_key>">
          {isEnabled => (
            <div
              style={{
                background: isEnabled ? '#09d3ac' : '#cc0000',
                padding: 30
              }}
            >
              {isEnabled ? 'Got the feature!' : 'Did not get the feature!'}
            </div>
          )}
        </OptimizelyFeature>
      </OptimizelyProvider>
    );
  }
}

export default App;
```
