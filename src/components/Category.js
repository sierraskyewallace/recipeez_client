import React from 'react'
//import {Redirect} from 'react-router-dom'



const Category = (props) => {

  console.log(props)

  let category = props.categorys.filter(category => category.id == props.match.params.id)[0]

  console.log(category)
  return (

    <div>
      <h2>
        {category ? category.name : null}
      </h2>
      
    </div>
  )


}

export default Category