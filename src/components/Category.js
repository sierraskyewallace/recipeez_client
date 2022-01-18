import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RecipesContainer from '../containers/recipesContainer'


const Category = (props) => {

    console.log(props)
  
    const { id } = useParams()
    let category = props.categories.find(category => category.id == id)

  

    return (
  
      <div>
        <h2>
          {category ? category.name : null} 
          <RecipesContainer category={category}/>

          
        </h2>
        
        
      </div>
    )
  
  
  }

export default Category