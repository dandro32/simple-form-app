import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class RenderDatePicker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.props.input.onChange(moment(date).format('YYYY-MM-DD'))
    }

    render() {
        const {input,label, meta: {touched, error}} = this.props

        return (
            <div  className="input-group col-md-6">
                <label htmlFor={label} className="control-label">{label}</label>
                <DatePicker {...input} dateFormat="YYYY-MM-DD" selected={this.state.startDate} onChange={this.handleChange} />
                {touched && error && <div className="alert alert-warning" role="alert"> {error}</div>}
            </div>
        );
    }
}

export default RenderDatePicker;