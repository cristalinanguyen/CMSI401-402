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
          

        { title: 'Year', field: 'year', type: 'numeric', 
      
          cellStyle: {
              backgroundColor: '#FFF',
              color: '#28547A'
          },
          headerStyle: {
            backgroundColor: '#28547A',
            color: '#FFF'
          }
          
        },
        { title: 'Resident', field: 'name',
      
          
          cellStyle: {
              backgroundColor: '#FFF',
              color: '#28547A'
          },
          headerStyle: {
            backgroundColor: '#28547A',
            color: '#FFF'
          }
        },
        { title: 'Week 1', field: 'shift1',
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
          
        }
        ,
        { title: 'Week 2', field: 'shift2', 
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
        },
        { title: 'Week 3', field: 'shift1', 
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
        },
        { title: 'Week 4', field: 'shift4', 
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
        },
        { title: 'Week 5', field: 'shift5', 
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
        },
        { title: 'Week 6', field: 'shift6', 
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
        },
        { title: 'Week 6', field: 'shift7',
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
        },
        { title: 'Week 8', field: 'shift8',
          cellStyle: value => {
            if (value.substring(0,1) === "C") {
              return {backgroundColor: '#FFDDE4', color: '#FF7260'}
            } else if (value.substring(0,1) === "B") {
              return {backgroundColor: '#D9F0FF', color: '#5F9FFF'}
            } else if (value.substring(0,1) === "D") {
              return {backgroundColor: '#CBFBC5', color: '#15A452'}
            } else if (value.substring(0,1) === "F") {
              return {backgroundColor: '#FEECC7', color: '#939000'}
            } 
            return{}
          },
          headerStyle: {
            backgroundColor: '#658CAE',
            color: '#FFF'
          }
        }
        

      ],
      
      data: [
      ],

    }
  }

  componentDidMount() {
    getResidents().then(residents => {
        this.setState({ data: residents })
    })
  }

  render() {
    


    return (

          

    <div className="App">
        <Header>
            <h1>Residents Page </h1>
        </Header>
        <MaterialTable

            title= "Full Schedule"
            options={{
              grouping: true
            }}
            icons={tableIcons}
            columns={this.state.columns}
            cellStyle={this.state.cellStyle}
            data={this.state.data}

            options={{
              pageSize: 24,
              pageSizeOptions: [],
              headerStyle: {
                backgroundColor: '#658CAE',
                color: '#FFF'
              },
              exportButton: true,
              
            }}
        />
        
    </div>
    )
  }
}

