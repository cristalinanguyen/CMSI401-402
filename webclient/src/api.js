const getResidents = () => fetch('http://127.0.0.1:5000/').then(r => r.json())

// const addResidents = (newData) => {
//     const data = this.state.data;
//     data.push(newData);
// }

const mockGetResidents = () => Promise.resolve([
    {
      "ID": 1, 
      "last": "Prochnow", 
      "name": "Sophia", 
      "year": 1
    }, 
    {
      "ID": 3, 
      "last": "Nguyen", 
      "name": "Lina", 
      "year": 2
    }, 
    {
      "ID": 4, 
      "last": "Namba", 
      "name": "Liam", 
      "year": 2
    }, 
    {
      "ID": 5, 
      "last": "Santander", 
      "name": "Christian", 
      "year": 2
    }, 
    {
      "ID": 6, 
      "last": "Flora", 
      "name": "Annie", 
      "year": 2
    }, 
    {
      "ID": 10, 
      "last": "Forney", 
      "name": "Andrew", 
      "year": 2
    }, 
    {
      "ID": 15, 
      "last": "Johnson", 
      "name": "BJ", 
      "year": 2
    }
])

export {
      getResidents, 
    //   addResidents
  }