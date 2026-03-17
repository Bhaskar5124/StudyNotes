import { useRef, useEffect } from 'react';

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
    inputRef.current.placeholder = "Write your name";
    console.log(inputRef.current);
  }, []);

  return <input className='border border-red-200' ref={inputRef} type="text" />;
}

export default FocusableInput;