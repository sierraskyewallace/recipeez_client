import React from "react";
import Select from "react-select";

class DropDown extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            categories: [],
            id: "",
            name: "",
            };
    }

    async getCategories() {
        const response = await fetch("http://localhost:3000/api/v1/categories");
        const data = await response.json();
        const categories = data.data.map(category => ({
                value: category.attributes.id,
                label: category.attributes.name,
            }));
        this.setState({ categories });
    }

     componentDidMount() {
         this.getCategories();
    }


    render() {
        console.log(this.state.categories);
        return (
            <div>
                <Select
                    options={this.state.categories} />
            </div>
        );
    }
}


export default DropDown;