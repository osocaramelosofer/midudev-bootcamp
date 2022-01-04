import './App.css';
import Message from './Message.js'

const Description = () => {
  return <p>This is the Description Component.</p>
}

// the components start with Capital Letter A
const App = () => {
  return (
    // JSX = html in JS
    <div className="App">
      <Message color='red' message='Message 1' />
      <Message color='blue' message='Message 2' />
      <Description />
    </div>
  );
}

export default App;
