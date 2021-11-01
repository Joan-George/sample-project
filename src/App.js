import './App.css';
import { Increment } from './increment';
import { Decrement } from './decrement';
import { useState } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

function App() {
  const [answer, setanswer] = useState(1)
  const increment = () => setanswer(answer + 1)
  const decrement = () => setanswer(answer - 1)

  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route path="/" exact><Increment increment = {increment} answer={answer}/></Route>
        <Route path="/decrement" exact><Decrement decrement = {decrement} answer={answer}/></Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
