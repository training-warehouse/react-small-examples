import React, {useState, useEffect} from 'react';
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://course-api.com/react-tours-project'

const App = () => {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (e) {
            setLoading(false)
            console.log(e);
        }
    }

    const removeTour = (id) => {
        const newTour = tours.filter(tour => tour.id !== id)
        setTours(newTour)
    }

    useEffect(() => {
        fetchTours()
    }, [])

    if (loading) {
        return (
            <main>
                <Loading/>
            </main>
        )
    }

    if (!tours.length) {
        return (
            <main>
                <div className="title">
                    <h2>没有旅游目的地信息</h2>
                    <button className="btn" onClick={() => fetchTours()}>
                        重新获取
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
    );
};

export default App;