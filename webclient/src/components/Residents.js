import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { getResidents } from '../api';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default class Residents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Resident ID', field: 'ID',
          editComponent: props => (
            <input
              type="numeric"
              value={props.value}
              onChange={e => props.onChange(e.target.value)}
            />
          )
        },
        { title: 'First Name', field: 'name', },
        { title: 'Last Name', field: 'last' },
        { title: 'Year', field: 'year', type: 'numeric' },
      ],

      data: []      
    }
  }

  componentDidMount() {
    getResidents().then(residents => {
        this.setState({ data: residents })
    })
  }

//   componentDidUpdate() {
//       addResidents().then(newData => {
//           newData = []
//           // add new data to data
//           this.setState({ data : newData })
//       })
//   }

  render() {
    return (
    <div className="App">
        <Header>
            <h1>Residents Page</h1>
        </Header>

        <MaterialTable
            title = "Schedule"
            icons={tableIcons}
            columns={this.state.columns}
            data={this.state.data}

            options={{
                pageSize: 12,
                pageSizeOptions: [12, 24, 48]
            }}

            // editable={{
            // onRowAdd: newData =>
            //     addResidents(newData)

            // onRowUpdate: (newData, oldData) =>
            //     new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //         {
            //         const data = this.state.data;
            //         const index = data.indexOf(oldData);
            //         data[index] = newData;
            //         this.setState({ data }, () => resolve());
            //         }
            //         resolve()
            //     }, 1000)
            //     }),
            // onRowDelete: oldData =>
            //     new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //         {
            //         let data = this.state.data;
            //         const index = data.indexOf(oldData);
            //         data.splice(index, 1);
            //         this.setState({ data }, () => resolve());
            //         }
            //         resolve()
            //     }, 1000)
            //     }),
            // }}
        />
    </div>
    )
  }
}

