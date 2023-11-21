import logo from './logo.svg';
import "./App.css"
import Child1 from './Child1';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub } from './reducers/ExampleReducer';

function App() {
  let word = "this is coming from js"
  const [word1, setWord1] = useState("this is coming from js")
  const [flag, setFlag] = useState(true)
  const data = [{
    "name": "nfnfnf",
    "course":"hfhhf"
  }, {
    "name": "fnifiw",
    "course":"fiiesja"
  }]
  function changeTex() {
    console.log("to check function")
    word = "updated"
    setWord1("updated")
    setFlag(!flag)
  }
  function changeText(e) {
    console.log(e.target.value)
    setWord1(e.target.value)
    ref.current = word1
   
    
  }
  const age1 = useSelector((state) => state.example1.age)
  console.log(age1)
  const navigate=useNavigate()
  useEffect(() => {
    console.log("will print once page is reloaded")
    
  }, [])
  const dispatch=useDispatch()
  const ref=useRef()
  return (
    <div className="App">
      <p>hii</p> 
      <Child1 word={word} value={ "testing"} />
      <p>{word}</p>
      <button onClick={() => dispatch(add())}>Add +</button>
      <button onClick={() => dispatch(sub())}>Sub -</button>
      <p>{age1 }</p>
      <input onChange={(e)=>changeText(e)}/>
      <button onClick={() => changeTex()}>Change Text</button>
      {/* Conditional Rendering */}
      {flag && (
        <div>
          <p>{word1}</p>
          <p>{ ref.current}</p>
          </div>
      )}

{/* Looping the data in Array */}
      {data.map((e) => (
        <div>
          <p>Name</p>
          <p>{e.name}</p>
          <p>Course</p>
          <p>{e.course}</p>
          </div>
      ))}
      <Link to={"/child/6"}>Go to child</Link>
    </div>
  );
}

export default App;
