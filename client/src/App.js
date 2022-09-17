import './App.css';
import React from 'react';

function App() {

  const [data, setData] = React.useState([]);
  React.useEffect(() =>{
    fetch("/products")
    .then((res) => res.json())
    .then( (data) => {
      setData(data.mongoData);
    });
  },[]);
  //once to do
  return (
    <div>
      {data.map((mongoData,index)=>{
        return(
          <div>
             <h2>name: {mongoData.name}</h2>
            <h2>price: {mongoData.price}</h2>
            <h2>manufacture: {mongoData.manufacture}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default App;

