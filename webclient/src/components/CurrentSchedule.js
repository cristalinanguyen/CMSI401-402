// import React from "react";
// import { render } from "react-dom";
// import Paper from "@material-ui/core/Paper";
// import { ViewState } from "@devexpress/dx-react-scheduler";
// import {
//   Scheduler,
//   WeekView,
//   Appointments
// } from "@devexpress/dx-react-scheduler-material-ui";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { blue } from "@material-ui/core/colors";
// import { appointments } from "./data";

// const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

// export default class CurrentSchedule extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: appointments
//     };
//   }
//   render() {
//     const { data } = this.state;

//     return (
//       <MuiThemeProvider theme={theme}>
//         <Paper>
//           <Scheduler data={data}>
//             <ViewState currentDate="2018-06-28" />
//             <WeekView startDayHour={9} endDayHour={19} />
//             <Appointments />
//           </Scheduler>
//         </Paper>
//       </MuiThemeProvider>
//     );
//   }
// }

// render(<CurrentSchedule />, document.getElementById("root"));


import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import ReactDOM from 'react-dom';
import generateFakeData from "./generate-fake-data";

import Timeline, {
    TimelineHeaders,
    SidebarHeader,
    DateHeader
  } from "react-calendar-timeline/lib";
  

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]
 
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]

var keys = {
    groupIdKey: "id",
    groupTitleKey: "title",
    groupRightTitleKey: "rightTitle",
    itemIdKey: "id",
    itemTitleKey: "title",
    itemDivTitleKey: "title",
    itemGroupKey: "group",
    itemTimeStartKey: "start",
    itemTimeEndKey: "end",
    groupLabelKey: "title"
  };

ReactDOM.render(
    <div>
      Rendered by react!
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
      />
    </div>,
    document.getElementById('root')
  )

export default class CurrentSchedule extends Component {

    constructor(props) {
        super(props);

        const { groups, items } = generateFakeData(150);
        const defaultTimeStart = moment()
            .startOf("day")
            .toDate();
        const defaultTimeEnd = moment()
            .startOf("day")
            .add(1, "day")
            .toDate();

        this.state = {
            groups,
            items,
            defaultTimeStart,
            defaultTimeEnd
        };
        }

        render() {
        const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;

        return (

            <div>
                <Header/>
                <h1>Schedule</h1>

                <Timeline
                groups={groups}
                items={items}
                keys={keys}
                sidebarContent={<div>Above The Left</div>}
                itemsSorted
                itemTouchSendsClick={false}
                stackItems
                itemHeightRatio={0.75}
                showCursorLine
                canMove={false}
                canResize={false}
                defaultTimeStart={defaultTimeStart}
                defaultTimeEnd={defaultTimeEnd}
                >

            <TimelineHeaders className="sticky">
                <SidebarHeader>
                {({ getRootProps }) => {
                    return <div {...getRootProps()}>Left</div>;
                }}
                </SidebarHeader>
                <DateHeader unit="primaryHeader" />
                <DateHeader />
            </TimelineHeaders>
            </Timeline>

            </div>
        );
    }
}