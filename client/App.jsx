import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Phone',
  dataIndex: 'phone',
}, {
  title: 'Email',
  dataIndex: 'email',
}, {
  title: 'Company',
  dataIndex: 'company',
}];

class App extends Component {
	constructor(){
    	super();
		this.state = {
		    data: [],
		    pagination: {},
		    loading: false,
		}
		this.fetch = this.fetch.bind(this);
		this.handleTableChange = this.handleTableChange.bind(this);
	}

	handleTableChange (pagination){
	    const pager = this.state.pagination;
	    pager.current = pagination.current;
	    this.setState({
	      pagination: pager,
	    });
	    this.fetch();
	}

	fetch (){
		this.setState({ loading: true });
		fetch('http://localhost:5555/get_employees1')
		.then(res=> res.json())
		.then((data) => {
		  const pagination = this.state.pagination;
		  pagination.total = 100;
		  this.setState({
		    loading: false,
		    data: data,
		    pagination,
		  });
		});
	}

	componentDidMount() {
		this.fetch();
	}

  render() {
    return (
      <Table columns={columns}
        rowKey={record => record._id}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default App; 