import React from 'react'
import {connect} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import  { fetchCategories }  from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Category from '../components/Category'
import CategoryInput from '../components/categoryInput'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import LiveCodingComponent from '../components/liveCodingComponent'


class CategoriesContainer extends React.Component {

  state = {
    

  }

  componentDidMount() {
    this.props.fetchCategories()
  }


  componentDidUpdate() {
    
  }



  render() {
      return (
          <div>
            <NavBar />
            <Routes>
              <Route path= '/coding' element={<LiveCodingComponent />} />
              <Route path='/categories' element={<Categories categories={this.props.categories} />} />
              <Route path='/categories/:id' element={<Category categories= {this.props.categories} />} />
              <Route path='/categories/new' element={<CategoryInput />} />
            </Routes>
            <Footer />
          </div>
          
      )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)