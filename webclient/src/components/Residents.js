import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import '../css/App.css';
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
import { spacing, positions } from '@material-ui/system';
import $ from 'jquery';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} style={{color: '#28547A'}}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} style={{color: '#28547A'}}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} style={{color: '#28547A'}}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} style={{color: '#28547A'}}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} style={{color: '#28547A'}}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} style={{color: '#28547A'}}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} style={{color: '#28547A'}}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} style={{color: '#28547A'}}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} style={{color: '#28547A'}}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} style={{color: '#28547A'}}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} style={{color: '#28547A'}}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} style={{color: '#28547A'}}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} style={{color: '#28547A'}}/>),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} style={{color: '#28547A'}}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} style={{color: '#28547A'}}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} style={{color: '#28547A'}}/>)
};

function updateRes(resId, resYear, resWeekOff, resFirst, resLast) {
  $.ajax({
    type: 'PUT',
    url: "http://127.0.0.1:5000/residents",
    data: { resId: resId,
            resYear: resYear,
            resWeekOff: resWeekOff,
            resFirst: resFirst,
            resLast: resLast
          },
    success: function(response) {
      console.log(response)
    }
  })
}

function addRes(resFirst, resLast, resYear) {
  $.ajax({
    type: 'POST',
    url: "http://127.0.0.1:5000/residents",
    data: { resFirst: resFirst,
            resLast: resLast,
            resYear: resYear
          },
    success: function(response) {
      console.log(response)
    }
  })
}

function deleteRes(resId) {
  $.ajax({
    type: 'DELETE',
    url: "http://127.0.0.1:5000/residents",
    data: { resId: resId },
    success: function(response) {
      console.log(response)
    }
  })
}

export default class Residents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [ ],
      updatedRes: false,
      addedRes: false,
      deletedRes: false,
      upResId: null,
      upResYear: null,
      upResWeekOff: null,
      upResFirst: null,
      upResLast: null
    }
  }

  componentDidMount() {
    getResidents().then(residents => {
        this.setState({ data: residents })
    })
  }

  componentDidUpdate() {
    if (this.state.updatedRes) {
      updateRes(this.state.upResId, this.state.upResYear, this.state.upResWeekOff, this.state.upResFirst, this.state.upResLast);
      this.setState({
        updatedRes: false,
        upResId: null,
        upResYear: null,
        upResWeekOff: null,
        upResFirst: null,
        upResLast: null
      });
    } else if (this.state.addedRes) {
      addRes(this.state.upResFirst, this.state.upResLast, this.state.upResYear);
      this.setState({
        addedRes: false,
        upResYear: null,
        upResFirst: null,
        upResLast: null
      });
    } else if (this.state.deletedRes) {
      deleteRes(this.state.upResId);
      this.setState({
        deletedRes: false,
        upResId: null
      });
    }
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
                  { title: 'NAME', field: 'first_name',
                    cellStyle: { backgroundColor: '#FFF', color: '#28547A'},
                    headerStyle: { backgroundColor: '#28547A', color: '#FFF', position: "sticky"}},
                    { title: 'LAST', field: 'last_name',
                    cellStyle: { backgroundColor: '#FFF', color: '#28547A'},
                    headerStyle: { backgroundColor: '#28547A', color: '#FFF', position: "sticky"}},
                  { title: 'BLOCK', field: 'block', 
                    cellStyle: { backgroundColor: '#FFF', color: '#28547A', textAlign: "center"},
                    lookup: { 
                      1: '1', 
                      2: '2',
                      3: '3'},
                    headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center", position: "sticky"}},
                  { title: 'YEAR', field: 'year', 
                    cellStyle: { backgroundColor: '#FFF', color: '#28547A', textAlign: "center"},
                    lookup: { 
                      1: '1', 
                      2: '2'},
                    headerStyle: { backgroundColor: '#28547A', color: '#FFF', textAlign: "center", position: "sticky"}},
                  { title: 'WEEK OFF', field: 'off', 
                    cellStyle: { backgroundColor: '#FFF', color: '#28547A'},
                    lookup: { 
                      1: 'Week 1', 
                      2: 'Week 2',
                      3: 'Week 3',
                      4: 'Week 4',
                      5: 'Week 5',
                      6: 'Week 6',
                      7: 'Week 7',
                      8: 'Week 8'},
                    headerStyle: { backgroundColor: '#28547A', color: '#FFF', position: "sticky"}},
                    
                ] 
                }
                data={this.state.data}
                value={this.state.value}
                editable={{
                  onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        {
                          const resYear = newData.year;
                          const resFirst = newData.first_name;
                          const resLast = newData.last_name;
                          const data = this.state.data;
                          data.push(newData);
                          this.setState({
                            data: data,
                            addedRes: true,
                            upResYear: resYear,
                            upResFirst: resFirst,
                            upResLast: resLast
                          }, () => resolve());
                        }
                        resolve()
                      }, 1000)
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        {
                          const resId = newData.id;
                          const resYear = newData.year;
                          const resWeekOff = newData.off;
                          const resFirst = newData.first_name;
                          const resLast = newData.last_name;
                          const data = this.state.data;
                          const index = data.indexOf(oldData);
                          data[index] = newData;
                          this.setState({ 
                            data: data,
                            updatedRes: true,
                            upResId: resId,
                            upResYear: resYear,
                            upResWeekOff: resWeekOff,
                            upResFirst: resFirst,
                            upResLast: resLast
                          }, () => resolve());
                        }
                        resolve()
                      }, 1000)
                    }),
                  onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        {
                          let data = this.state.data;
                          const index = data.indexOf(oldData);
                          const resId = data[index].id;
                          data.splice(index, 1);
                          this.setState({
                            data: data,
                            deletedRes: true,
                            upResId: resId
                          }, () => resolve());
                        }
                        resolve()
                      }, 1000)
                    }),
                }}
                options={{
                  pageSize: 24,
                  pageSizeOptions: [],
                  headerStyle: {
                    backgroundColor: '#28547A', color: '#FFF'
                  },
                  exportButton: true,
                  // grouping:true,
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


                }}                
            />
          </div>
      </div>
    )
  }
}
