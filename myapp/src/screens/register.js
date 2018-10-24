import React, { Component } from 'react';
import ServiceCall from '../api/serviceCall';



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        detailsList: [],       
        name: "",
        shopName: "",
        status: ""
    };

    this.handleChange = this.handleChange.bind(this);
}


  saveDetails = () =>
  {
    debugger;
      if(this.state.name != "" && this.state.shopName != "" && this.state.status !="")
      {
          let  details = {
                  "name": this.state.name,
                  "shopName": this.state.shopName,
                  "status": this.state.status,
                  "date":  new Date()
              };
              this.state.detailsList.push(details);
          this.saveUserDetails();
          this.setState ({
            name: "",
            shopName: "",
            status: ""
           });
      }
      else
          alert("Make sure title and content could not empty")
  }
  saveUserDetails = () =>
  {
    ServiceCall.saveDetails(this.state.detailsList).then((responsedetailsList) => {
      this.props.callback();

    });
}
handleChange(event) {
  debugger;
  if(event.target.name =="name")
  {
  this.setState({ name : event.target.value});
  }
  else if(event.target.name =="shopName")
  {
  this.setState({ shopName : event.target.value});
  }
  else if(event.target.name =="status")
  {
  this.setState({ status : event.target.value});
  }
}
 
  render() {
    return (
    <div>
      <p>Name:</p>
      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
      <p>Shop Name:</p>
      <input type="text" name ="shopName" value={this.state.shopName} onChange={this.handleChange} />
      <p>Status:</p>
      <input type="text" name ="status" value={this.state.status} onChange={this.handleChange} />
      <button onClick={ this.saveDetails.bind(this) }>Save</button>
    </div>
    );
  }
}

export default Register;
