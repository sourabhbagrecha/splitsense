import { useState } from 'react';
export default initialVal => {
  const [value, setValue] = useState(parseFloat(initialVal || 0));
  const handleChange = e => setValue(parseFloat(e.target.value));
  const reset = () => setValue("");
  return [value, handleChange, reset];
}