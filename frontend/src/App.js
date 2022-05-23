import './App.css';

function App() {

  const [formData, setFormData] = useState({
    product_name: '',
    ownerId: '',
    desc: '',
    photo1: '',
    auction_start: '',
  })

  const formChangeHandler = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })

  const formSubmitHandler = () => {
    const formInfo = new FormData();
    axios.post('http://localhost:4000/products/create/new-product/')
  }

  return (
    <div className="App">
      <form>
        <div><input name='' /></div>

      </form>
    </div>
  );
}

export default App;
