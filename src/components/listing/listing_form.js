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

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value 
        })
    }

    handleSelect = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addListing(this.state)
        this.setState({
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
        }) 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
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
                    <label>Pets allowed:</label>
                        <select value={this.state.pets_allowed} onChange={this.handleSelect} name="pets_allowed">
                            <option value='true' >Yes</option>
                            <option value='false' >No</option>
                        </select>  
                    < br />
                    <label>Air conditioning:</label>
                        <select value={this.state.air_conditioning} onChange={this.handleSelect} name="air_conditioning">
                            <option value='true' >Yes</option>
                            <option value='false' >No</option>
                        </select>  
                    < br />
                    <input type='submit' value='Create Listing'/>

                </form>
            </div>
        );
    }
}


export default connect()(ListingForm);