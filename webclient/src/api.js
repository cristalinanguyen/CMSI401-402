const getResidents = () => fetch('http://127.0.0.1:5000/residents').then(r => r.json())

const addResidents = (newData) => {
    const data = this.state.data;
    data.push(newData);
}

export {
      getResidents, addResidents
  }