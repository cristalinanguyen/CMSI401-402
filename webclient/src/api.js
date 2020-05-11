const getResidents = () => fetch('http://127.0.0.1:5000/residents').then(r => r.json())

const getStartDate = () => fetch('http://127.0.0.1:5000/current-schedule').then(r => r.json())

export {
      getResidents,
      getStartDate
}