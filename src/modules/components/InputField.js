import React from 'react';
import TextField from '../components/TextField';


const InputField = props => {
    const validateInput = values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
            <TextField
            className={props.className}
            type='submit'
            value={props.label}
            disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
            <label className="inputField__label">
                {props.label}
                <TextField
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className={props.className}
                    rows={7}
                    name={props.name}
                />
            </label>

        );
    } else {
        return (
            <label className="inputField__label">
            {props.label}
            <TextField
                onChange={(e) => props.onChangeHandler(e.target.value)}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                required={props.isRequired}
                className={props.className}
                name={props.name}
            />
            </label>

        );
    }


};

export default React.memo(InputField);