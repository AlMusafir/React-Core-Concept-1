import './App.css'

import Counter from './Counter'

import Team from './Team'


import Friend from './Friend'

import Friends from './Friends'

function App() {
    function handleClick(){
      alert('Warning')
    }
    // option 2 using arorw function 
    const handleClick2 = () =>{
      alert('Option 2 is Actioned')
    }
  return (
    <>
      <h2>React Core 
      Concepts part 2</h2>


      <Friend></Friend>


      <Friends></Friends>


      <Team></Team>

      <Counter></Counter>


      {/*option 1 to get the event handler function  */}
      <button onClick={handleClick}>Option 1</button>

        {/* option 2 */}
      <button onClick={handleClick2}>Option 2</button>


      {/* option 3. write inline function  */}
      <button onClick={() => {alert('3 means three')}}>Not three</button>


    </>
  )
}

export default App
