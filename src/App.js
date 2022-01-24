import logo from './logo.svg';

function App() {

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
    { startDate: '15-01-2022', endDate: '16-01-2022', id: '102' },
  ];

  //sorting-events
 //sorting-events
 let mainData = events?.sort(function (current, next) {
  let currentStart = new Date(current?.startDate),
    nextStart = new Date(next?.startDate)
  let currentEnd = new Date(current?.endDate),
    nextEnd = new Date(next?.endDate)
  if (currentStart === nextStart) {
    if (currentEnd < nextEnd) {
      return 1
    }
    if (currentEnd > nextEnd) {
      return -1
    }
  }
  if (currentStart > nextStart) {
    return -1
  }
  return 1
})
  console.log(mainData)
//find-group-event
let putEvent = []
const groupEvent = (tempArray) => {
  console.log(tempArray)
  let firstObj = tempArray[0]
  let slotEvent = [firstObj]
  let filteredItem = [];
  tempArray?.forEach(temp => {
    if(firstObj.endDate < temp.startDate){
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
    <div className="App">
        {
          result?.map((date,index) => (
           date.map(dates => (
            <h2 key={dates.id}>{`${dates.startDate}-${dates.endDate}`}</h2>
           ))
          ))
        }
    </div>
  );
}

export default App;