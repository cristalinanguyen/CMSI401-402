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
import { TablePagination } from '@material-ui/core';
import { getResidents } from '../api'; 
import { CsvBuilder } from 'filefy';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

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


export default class CurrentSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [ ],
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

        <div style={{marginLeft:100, marginRight: 100}}>
          <MaterialTable
              
              title= ""
              options={{
                grouping: true
              }}
              icons={tableIcons}
              columns={[
                { title: 'BLOCK', field: 'block', defaultGroupOrder: 0, 
                  cellStyle: { backgroundColor: '#FFF', color: '#28547A'},
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF'}},
                { title: 'RESIDENT', field: 'name',
                  cellStyle: { backgroundColor: '#FFF', color: '#28547A'},
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'YEAR', field: 'year', 
                  cellStyle: { backgroundColor: '#FFF', color: '#28547A', textAlign: "center"},
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 1', field: 'shift1', 
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 2', field: 'shift2',
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 3', field: 'shift3',
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 4', field: 'shift4',
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 5', field: 'shift5',
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 6', field: 'shift6',
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 7', field: 'shift7',
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
                { title: 'Week 8', field: 'shift8',
                  headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center"}},
              ] 
              }
              data={this.state.data}
              value={this.state.value}
              options={{
                pageSize: 15,
                pageSizeOptions: [],
                headerStyle: {
                  backgroundColor: '#658CAE',
                  color: '#FFF',
                },
                exportButton: true,
                grouping:true,
                Search:true,
                exportCsv: (columnList, initialData) => {
                  const columns = columnList.filter(columnDef => {
                    return !columnDef.hidden && columnDef.field && columnDef.export !== false;
                  })
                  const data = initialData.map(rowData =>
                    columns.map(columnDef => {
                      return columnDef.render ? columnDef.render(rowData) : rowData[columnDef.field];
                    })
                  );
                  const builder = new CsvBuilder('data' + '.csv');
                  builder
                    .setDelimeter(',')
                    .setColumns(columns.map(columnDef => columnDef.title))
                    .addRows(data)
                    .exportFile();
                },
                cellStyle: (value, rowData) => {
                  
                    if (value.substring(0,1) === "C") {
                      return {color: '#FF7260', textAlign: "center", fontSize: 17}
                    } else if (value.substring(0,1) === "B") {
                      return {color: '#5F9FFF', textAlign: "center", fontSize: 17}
                    } else if (value.substring(0,1) === "D") {
                      return {color: '#15A452', textAlign: "center", fontSize: 17}
                    } else if (value.substring(0,1) === "F") {
                      return {color: '#939000', textAlign: "center", fontSize: 17}
                    } 
                    return{}
                  },

              }}
              
          />
        </div>
    </div>
    )
  }
}

