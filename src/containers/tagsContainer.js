import React from "react";
import { connect } from "react-redux";
import fetchTags from "../actions/fetchTags";



class TagsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTags();
    }


  render() {
    return (
        
        <div>
            <Tags tags={this.props.tags} />
            
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags

    };
};

export default connect(mapStateToProps, {fetchTags})(TagsContainer);