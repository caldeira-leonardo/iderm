import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from 'components/Home/Home'
import Products from 'components/Products/Products'
import EspecificProduct from 'components/EspecificProduct/EspecificProduct'
import About from 'components/About/About'
import Contact from 'components/Contact/Contact'
import ProductsTi from 'components/ProductsTi/ProductsTi'
import EspecificTiProduct from 'components/EspecificTiProduct/EspecificTiProduct'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<Home />} path="/" exact />
                    <Route element={<Home />} path="/home" />
                    <Route element={<Products />} path="/products" />
                    <Route element={<EspecificProduct />} path={`/products/:productName`} />
                    <Route element={<ProductsTi />} path="/catalogo" />
                    <Route element={<EspecificTiProduct />} path="/catalogo/:productName" />
                    <Route element={<About />} path="/about" />
                    <Route element={<Contact />} path="/contact" />
                </Routes>
            </Router>
        </div>
    )
}

export default App
