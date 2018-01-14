import React from "react";
import {Field, reduxForm } from "redux-form";
import {required, email} from "./../utils/validation-rules";
import moment from 'moment';
import DatePicker from 'react-datepicker';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="input-group col-md-6">
        <label htmlFor={label} className="control-label">{label}</label>
        <input {...input} className="form-control" placeholder={label} type={type}/>
        {touched && (error && <div className="alert alert-warning" role="alert">{error}</div>)}
    </div>

)

const renderDatePicker = ({input, label, defaultValue, meta: {touched, error} }) => (
    <div  className="input-group col-md-6">
        <label htmlFor={label} className="control-label">{label}</label>
        <DatePicker {...input} dateForm="DD/MM/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <div className="alert alert-warning" role="alert"> {error}</div>}
    </div>
);


const FormTemplate = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="firstname" type="text"
                   component={renderField} label="First Name"
                   validate={ required}
            />
            <Field name="lastname" type="text"
                   component={renderField} label="Last Name"
                   validate={ required}
            />
            <Field name="email" type="email"
                   component={renderField} label="Email"
                   validate={[required, email]}
            />
            <Field name="date"
                   component={renderDatePicker} label="Date"
                   validate={required}
            />

            <div style={{paddingTop: 20}}>
                <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
                <button type="button" className="btn btn-warning" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'simple-form'
})(FormTemplate)