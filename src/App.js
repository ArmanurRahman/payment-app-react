import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Plans from "./containers/Plans";
import Payment from "./containers/Payment";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Plans />} />
                <Route path='/payment/:planId' element={<Payment />} />
            </Routes>
        </div>
    );
}

export default App;
