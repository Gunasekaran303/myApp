import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Search from './search';
import Register from './register';
import ServiceCall from '../api/serviceCall';

 
class UserList extends Component {  
  constructor(props) {
    super(props);
    this.state = {
        details: []
    };
}
componentWillMount() {
        this.getDetailsList();
}

getDetailsList()
{
  ServiceCall.getDetails().then((responsedetailsList) => {
        if(responsedetailsList.length > 0)
        {
            this.setState({
              details: responsedetailsList
            })
        }
    });
}
registerCallBack()
{
  this.getDetailsList();
}
    render() {
        const columns = [{
            Header: 'Name',
            accessor: 'name' 
          }, {
            Header: 'Shop Name',
            accessor: 'shopName',
          }, {
            Header: 'Status',
            accessor:'status',
          }, {
            Header: 'Date',
            accessor: 'date'
          }]
        
      return ( 
        <div>
           <Search/>
          <ReactTable columns ={columns} data ={this.state.details}
          />
          <Register callback={this.registerCallBack.bind(this)}/>
        </div>
      );
    }
  }
   
  export default UserList;