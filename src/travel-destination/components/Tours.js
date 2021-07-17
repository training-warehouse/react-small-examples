import React from 'react';

import Tour from "./Tour";

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className="title">
                <h2>热门旅游目的地</h2>
                <div className='underline'/>
            </div>

            <div>
                {
                    tours.map((tour => (
                        <Tour tour={tour} key={tour.id}
                              removeTour={removeTour}/>
                    )))
                }
            </div>
        </section>
    );
};

export default Tours;