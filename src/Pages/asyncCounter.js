import React , { useEffect, useState } from 'react'

const AsyncCounter = () => {
    useEffect(()=>{
        setCount(0);
    }, []);
    const [count , setCount] = useState(0);
    // const [asyncCount , setAsyncCount ] = useState([count]);
    const handleIncrement = () =>{
        setCount(count + 2);
    }
    const handleDecrement = () =>{
        setCount(count - 2);
    }
    const handleAsyncIncrement = () =>{
        setCount(prevValue => prevValue + 1);
    }
    const handleAsyncDecrement = () =>{
        setCount(prevValue => prevValue - 1);
    }

  return (
    <div>
    <h1>
        Counter : {count}
    </h1>
    <button
    style={{marginRight:'10px'}}
    onClick ={handleIncrement}
    >
        Increment 
    </button>
    <button
      onClick ={handleAsyncIncrement}
      style={{marginRight:'10px'}}
    >
        Async Increment
    </button>
    <button
    style={{marginRight:'10px'}}
    onClick ={handleDecrement}
    >
        Decrement
    </button>
    <button
      onClick ={handleAsyncDecrement}
      style={{marginRight:'10px'}}
    >
        Async Decrement
    </button>
</div>
  )
}

export default AsyncCounter

