import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import '../services/product.css'


class ViewProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Employee: {}
        }
    }

    componentDidMount(){
        ProductService.getEmployeeById(this.state.id).then( res => {
            this.setState({Employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Category:  &nbsp; </label>
                            <div> { this.state.Employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Product  Name: &nbsp;  </label>
                            <div> { this.state.Employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID:   &nbsp; </label>
                            <div> { this.state.Employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProduct
