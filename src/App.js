
import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import * as ReactBootStrap from 'react-bootstrap';

const App = () => {

  const [deals, setDeals] = useState(null);
  const [loading, setLoading] = useState(false);

  const dealsFunction = async() => {
    try{
      const data = await axios
        .get("https://godeals-backend.asparksys.com/api/category/department-store-9061")
        .then(data => {
          console.log(data);
          setDeals(data.data.result);
        });
        setLoading(true);
    }
    catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dealsFunction();
  }, []);

  return ( 
    
    <div className='App'>
    <Spinner animation="grow" />
      <h1>Go-<span>Deals</span> </h1>
      {false ? (deals && deals.data[0].images[0]) : (
        <ReactBootStrap.Spinner animation="border" />
      )}

      <div className="home">

        <div className='deals'>
          <div className='deal'>
            <div className='gallery'>
              <img src={loading ? (deals && deals.data[0].images[0]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[0].title}</p>
            </div> 

            <div className='gallery'>
              <img src={loading ? (deals && deals.data[1].images[1]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[1].title}</p>
            </div> 

            <div className='gallery'>
              <img src={loading ? (deals && deals.data[0].images[2]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[2].title}</p>
            </div> 

            <div className='gallery'>
              <img src={loading ? (deals && deals.data[1].images[1]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[1].title}</p>
            </div> 
          </div>

          <div className='deal'>
            <div className='gallery'>
              <img src={loading ? (deals && deals.data[0].images[0]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[0].title}</p>
            </div> 

            <div className='gallery'>
              <img src={loading ? (deals && deals.data[1].images[0]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[1].title}</p>
            </div> 

            <div className='gallery'>
              <img src={loading ? (deals && deals.data[1].images[1]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[1].title}</p>
            </div> 

            <div className='gallery'>
              <img src={loading ? (deals && deals.data[1].images[2]) : (
              <Spinner animation="border" />
              )}
              />
              <p>{deals && deals.data[1].title}</p>
            </div> 
          </div>
        </div>
      </div>
    </div>

   );
}
 
export default App;