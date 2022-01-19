import React from 'react' 
import { connect } from 'react-redux'


class LiveCodingComponent extends React.Component {

    state = {
        categories: [],
    }

    render() { 
        return (
            <div>
                {this.props.categories.map(category => {
                    return(
                    category.name
                    )
                    })
            }
            </div>
        )
            }
        }
            

    const mapStateToProps = state => {
        return {
            categories: state.categories
        }

        
    }

export default connect(mapStateToProps)(LiveCodingComponent);