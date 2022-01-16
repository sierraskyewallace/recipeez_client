import React from 'react'
import {connect} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import { fetchCategories } from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Category from '../components/Category'
import CategoryInput from '../components/categoryInput'
import NavBar from '../components/navBar'

class CategoriesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
      return (
          <div>
            <NavBar />
            <Routes>
                <Route path='/categories' element={<Categories categories={this.props.categories} />} />
              <Route path='/categories/:id' element={<Category categories= {this.props.categories} />} />
              <Route path='/categories/new' element={<CategoryInput />} />
            </Routes>
          </div>
      )
  }

}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)