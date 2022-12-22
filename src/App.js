import './App.css';
import FormControl from './FormControl/FormControl';

function App() {

  const handleFormSubmit = event =>{
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <FormControl 
        inputId='name'
        name='userName'
        inputType='text'
        labelTitle={'Name'}>
        </FormControl>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
