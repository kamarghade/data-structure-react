import React from 'react';
import BinarySearchAlgorithm from './components/BinarySearchAlgorithm';

function App() {
  const [form, setFormValues] = React.useState({
    array: '',
    searchKey: '',
  });

  const updateState = (event) => {
    const { target: { id, value } } = event;
    setFormValues({...form, [id]: value });
  };

  return (
    <div className="App">
      <br />
      <label>Array: </label><input type='text' id='array' value={form.array} onChange={updateState} /> <br /><br />
      <label>Search Key: </label><input type='text' id='searchKey' value={form.searchKey} onChange={updateState} />
      <BinarySearchAlgorithm
        array={form.array}
        sortedArray={form.array.split(',')}
        searchKey={form.searchKey}
      />
    </div>
  );
}

export default App;
