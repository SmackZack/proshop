import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CarourselPage from './components/CarouselPage'
import HomeScreen from './screens/HomeScreen'
import Cart from './screens/Cart'
import WishList from './screens/WishList'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Route path="/cart" component={Cart} />
        <Route path="/wishlist" component={WishList} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" component={HomeScreen} exact />
      </div>
      <Footer />
    </Router>
  )
}

export default App
