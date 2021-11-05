import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addListing } from '../../actions/listingsAction';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
            <div style={{ display: 'block', 
            width: 700, 
            padding: 30 }}>
                <h4>Add a new listing</h4>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.title} name="title"/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" type="text" onChange={this.handleChange} value={this.state.description} name="description"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.location} name="location"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location Description:</Form.Label>
                        <Form.Control as="textarea" type="text" onChange={this.handleChange} value={this.state.location_description} name="location_description"/>
                    </Form.Group>

                    <Form.Label>Pets allowed:</Form.Label>
                    <Form.Select name="pets_allowed" onChange={this.handleSelect}>
                        <option value='true' >Yes</option>
                        <option value='false' >No</option>
                    </Form.Select> 
                    <br />

                    <Form.Label>Air conditioning:</Form.Label>
                    <Form.Select name="air_conditioning" onChange={this.handleSelect}>
                        <option value='true' name="air_conditioning">Yes</option>
                        <option value='false' name="air_conditioning">No</option>
                    </Form.Select>
                    <br />

                    <Form.Label>WiFi:</Form.Label>
                    <Form.Select name="wifi" onChange={this.handleSelect}>
                        <option value='true' name="wifi">Yes</option>
                        <option value='false' name="wifi">No</option>
                    </Form.Select>
                    <br />

                    <Form.Label>Kitchen:</Form.Label>
                    <Form.Select name="kitchen" onChange={this.handleSelect}>
                        <option value='true' name="kitchen">Yes</option>
                        <option value='false' name="kitchen">No</option>
                    </Form.Select>
                    <br />

                    <Form.Label>Image url:</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} value={this.state.img_url} name="img_url"/>
                    
                    <Form.Label>Number of guests:</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} value={this.state.guests} name="guests"/>
                    <Form.Label>Number of bedrooms:</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} value={this.state.bedrooms} name="bedrooms"/>
                    <Form.Label>Number of beds:</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} value={this.state.beds} name="beds"/>
                    <Form.Label>Number of baths:</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} value={this.state.baths} name="baths"/>

                    <Button variant="primary" type="submit">
                        Create New Listing
                    </Button>

                    {/* <label>Title:</label>
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
                    <label>Wifi:</label>
                        <select value={this.state.wifi} onChange={this.handleSelect} name="wifi">
                            <option value='true' >Yes</option>
                            <option value='false' >No</option>
                        </select>  
                    < br />
                    <label>Kitchen:</label>
                        <select value={this.state.kitchen} onChange={this.handleSelect} name="kitchen">
                            <option value='true' >Yes</option>
                            <option value='false' >No</option>
                        </select>  
                    < br />
                    <label>Guests:</label>
                    <input type='text' value={this.state.guests} onChange={this.handleChange} name="guests"/>
                    < br />
                    <label>Bedrooms:</label>
                    <input type='text' value={this.state.bedrooms} onChange={this.handleChange} name="bedrooms"/>
                    < br />
                    <label>Price:</label>
                    <input type='text' value={this.state.price} onChange={this.handleChange} name="price"/>
                    < br />
                    <input type='submit' value='Create Listing'/> */}

                </Form>
            </div>
        );
    }
}


export default connect()(ListingForm);