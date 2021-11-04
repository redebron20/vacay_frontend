import React, { Component } from 'react'
import { connect } from 'react-redux';

class ListingForm extends Component {
    state = {
        title: "",
        description: "",
        location: "",
        location_description: "",
        longitude: "",
        latitude: "",
        pets_allowed: true,
        air_conditioning: true,
        guests: "",
        bedrooms: "",
        beds: "",
        baths: "",
        kitchen: true,
        wifi: true,
        price: ""
    }

    handleOnChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value 
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <label>Title:</label>
                    <input type='text' value={this.state.title} onChange={this.handleChange} name="title"/>
                    < br />
                    <label>Description:</label>
                    <input type='text' value={this.state.description} onChange={this.handleChange} name="description"/>
                    < br />
                    <label>Location:</label>
                    <input type='text' value={this.state.location} onChange={this.handleChange} name="location"/>
                    < br />
                    <label>Location Description:</label>
                    <input type='text' value={this.state.location_description} onChange={this.handleChange} name="location_description"/>
                    < br />
                    

                </Form>
            </div>
        );
    }
}


export default connect()(ListingInput);