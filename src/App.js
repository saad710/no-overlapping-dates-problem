import React from 'react';

import moment from 'moment';


const App = () => {
  
  let events = [
    { startDate: '10-01-2022', endDate: '20-01-2022', id: '001' },
    { startDate: '10-01-2022', endDate: '14-01-2022', id: '008' },
    { startDate: '21-01-2022', endDate: '25-01-2022', id: '002' },
    { startDate: '10-01-2022', endDate: '15-01-2022', id: '004' },
    { startDate: '17-01-2022', endDate: '20-01-2022', id: '005' },
    { startDate: '20-01-2022', endDate: '29-01-2022', id: '101' },
    { startDate: '18-01-2022', endDate: '18-01-2022', id: '009' },
    { startDate: '25-01-2022', endDate: '30-01-2022', id: '006' },
    { startDate: '26-01-2022', endDate: '30-01-2022', id: '007' },
    { startDate: '15-01-2022', endDate: '16-01-2024', id: '102' },
  ];
  // console.log(moment('16-01-2022', "DD-MM-YYYY").isBefore(moment('17-01-2023', "DD-MM-YYYY")));

  //sorting-events
  let mainData = events?.sort((current, next) => next.startDate > current.startDate ? -1 : 1)
  console.log(mainData)
//find-group-event
  let putEvent = []
  const groupEvent = (tempArray) => {
    let firstObj = tempArray[0]
    let slotEvent = [firstObj]
    let filteredItem = [];
    tempArray?.forEach(temp => {
      if(moment(firstObj.endDate, "DD-MM-YYYY").isBefore(moment(temp.startDate, "DD-MM-YYYY"))){
        firstObj = temp
        slotEvent.push(temp)
      }
      filteredItem = tempArray.filter((ind) => {
      return ind.id !== firstObj.id
      });
        tempArray = filteredItem
      })
      putEvent.push(slotEvent)
      if(tempArray.length !== 0){
        groupEvent(tempArray);
      }
      return putEvent;
    }
//final-result
const result = groupEvent(mainData)
console.log(result)

  return (
    <div>
       <h1>hello</h1>
    </div>
  );
};

export default App;