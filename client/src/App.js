import React, { Component } from 'react';
import { Provider } from "react-redux";
import FormTemplate from './form/form-templates';
import showResults from './service/form-submit-service';
import { store } from './utils/store';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div style={{ padding: 30 }}>
                <h2>Simple App Form</h2>
                <FormTemplate onSubmit={showResults} />
            </div>
        </Provider>
    );
  }
}

export default App;
