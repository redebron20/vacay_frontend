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
        // main_image: ""
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

    handleSubmit = (event) => {
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
            // main_image: ""
        }) 
    }

    render() {
        return (
            <div style={{ display: 'block', 
            width: 700, 
            padding: 30 }}>
                <h4>Add a new listing</h4>
                <Form onSubmit={this.handleSubmit}>
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

                    <Form.Group>
                        <Form.Label>Longitude:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.longitude} name="longitude"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Latitude:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.latitude} name="latitude"/>
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

                    <Form.Group>
                        <Form.Label>Number of guests:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.guests} name="guests"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Number of bedrooms:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.bedrooms} name="bedrooms"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Number of beds:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.beds} name="beds"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Number of baths:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.baths} name="baths"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} value={this.state.price} name="price"/>
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" onChange={this.handleChange} value={this.state.main_image} name="main_image" />
                    </Form.Group> */}

                    <Button variant="primary" type="submit">
                        Create New Listing
                    </Button>

                </Form>
            </div>
        );
    }
}


export default connect(null, { addListing })(ListingForm);