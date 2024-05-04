import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import DogInformation from './DogInformation';
import Filter from './Filter';

function Route({dogs}) {
    return (
        <Routes>
            <Route
                path="/dogs"
                element={<List dogs={dogs} />}
            />
            <Route 
                path="/dongs/:name"
                element={<Filter dogs={dog}/>}
            />
            <Route 
                path="/"
                element= {<Navigate to="/dogs" />}
            />

        </Routes>
    )
}
export default Route;