import React, { Component } from 'react';
import { Provider } from "react-redux";
import FormTemplate from './components/form';
import { submitData } from './service/services';
import { store } from './utils/store';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div style={{ padding: 30 }}>
                <h2>Simple App Form</h2>
                <FormTemplate onSubmit={submitData} />
            </div>
        </Provider>
    );
  }
}

export default App;
