import './App.css';
import { useState } from 'react'


function App() {
  const [name, setName] = useState('')
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [onion, setOnion] = useState(false)
  const [pepper, setPepper] = useState(false)


  return (
    <div className="App">
      <h1> Pizza Order </h1>
      <div className='order'>

        <form className='form'>
          <input placeholder='name'
          value={name}
          onChange={e => setName(e.target.value)}
          />
          <label>
            <input type='checkbox'
              checked={peperoni}
              onChange={() => setPeperoni(!peperoni)}
            />
            Peperoni
          </label>

          <label>
            <input type='checkbox'
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage
          </label>

          <label>
            <input type='checkbox'
              checked={onion}
              onChange={() => setOnion(!onion)}
            />
            Onions
          </label>

          <label>
            <input type='checkbox'
              checked={pepper}
              onChange={() => setPepper(!pepper)}
            />
            Peppers
          </label>
        </form>
        <div>
          <h2>Your Order</h2>
            <h3>{name}</h3>
          <p>
            {peperoni && <div>Peperoni</div>}
            {onion && <div>Onion</div>}
            {pepper && <div>Pepper</div>}
            {sausage && <div>Sausage</div>}

          </p>

        </div>
      </div>
    </div>
  );
}

export default App;
