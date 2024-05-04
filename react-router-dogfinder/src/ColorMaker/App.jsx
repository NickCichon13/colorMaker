import React, {Redirect, BrowserRouter as Router, Route} from "react";
import ColorForm from "./AddColorForm";
import ColorList from "./ColorList";

function App() {
    return (
        <Router>
            <Route path="/colors" component={ColorList}/>
            <Route path="/color/new" component={ColorForm}/>
            <Redirect from="/colors/*" to="/colors" />
         <Redirect from="*" to="/colors" />
        </Router>
    );
}

export default App;