import React from "react";
import Select from "react-select";

class DropDown extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            id: "",
            name: "",
            };
    }

    async getTags() {
        const response = await fetch("http://localhost:3000/api/v1/tags");
        const data = await response.json();
        const tags = data.data.map(tag => ({
                value: tag.attributes.id,
                label: tag.attributes.name,
            }));
        this.setState({ tags });
    }

     componentDidMount() {
         this.getTags();
    }

    handleChange = (e) => {
        this.setState({ id: e.value, name: e.label });
    }




    render() {

        return (
            <div>
                <Select
                    options={this.state.tags} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}


export default DropDown;