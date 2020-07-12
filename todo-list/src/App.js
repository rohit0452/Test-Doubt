import React from 'react';
import './App.css';
import Todolist from './todoitem';
import Header from "./header"
import Footer from "./footer"
//import Additem from './additem';

class App extends React.Component {

    state = {
        title: "",
        description: "",
        deadline: "",
    }
    render() {
        return (
            <div className="container">
                <Header />
                <div className="App">
                    <div className="todolist">
                        <Todolist />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
