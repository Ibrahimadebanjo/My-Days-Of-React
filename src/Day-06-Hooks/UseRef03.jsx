import  { useRef } from 'react';

function InputRef() {
  const inputRef = useRef();

  const handleClick = () => {
    // Access the DOM element and focus it
    console.log(inputRef.current)
    inputRef.current.style.backgroundColor = "green";
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Click and See console</button>
    </div>
  );
}

export default InputRef;
