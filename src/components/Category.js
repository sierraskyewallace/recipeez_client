import React from 'react'
import { Navigate } from 'react-router-dom'
import CategoryInput from './categoryInput'
import { fetchCategories } from '../actions/fetchCategories'
import { Link, useParams } from 'react-router-dom'



const Category = (props) => {

    console.log(props)
    // let category = props.categorys[props.match.params.id - 1]
    const { id } = useParams()
    let category = props.categories.find(category => category.id == id)

  

    return (
  
      <div>
        <h2>
          {category ? category.name : null} 
          
        </h2>
        
        
      </div>
    )
  
  
  }

export default Category