import React, { useEffect, useState} from 'react'

const Covid = () => {

    const [data , setData] = useState([]);

    const getCovidData = async () => {       // "async" says that it is asynchronous
        try{
            const response = await fetch('https://data.covid19india.org/data.json');   // "await" says that it wait after fetching the data from api
            const actualData = await response.json();
            // console.log(actualData.statewise[15])
            setData(actualData.statewise[15])
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

  return (
    <>
        <section>
            <h1>  LIVE</h1>
            <h2>Covid-19 Tracker for Jharkhand</h2>

            <ul>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h3>State </h3> 
                            <p className='card_total'>{data.state}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h3>Total Recovered</h3> 
                            <p className='card_total'>{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h3>Total Confirmed</h3> 
                            <p className='card_total'>{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className='card' id='death'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h3>Total Deaths</h3> 
                            <p className='card_total'>{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h3>Total Active</h3> 
                            <p className='card_total'>{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <h3>Last Updated</h3> 
                            <p className='card_total'>{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </>
  )
}

export default Covid