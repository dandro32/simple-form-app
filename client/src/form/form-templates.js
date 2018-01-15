import React from "react";
import {Field, reduxForm } from "redux-form";
import {required, email} from "./../utils/validation-rules";
import RenderDatePicker from './render-date-picker'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="input-group col-md-6">
        <label htmlFor={label} className="control-label">{label}</label>
        <input {...input} className="form-control" placeholder={label} type={type}/>
        {touched && (error && <div className="alert alert-warning" role="alert">{error}</div>)}
    </div>

)

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
            component={RenderDatePicker} label="Date"
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