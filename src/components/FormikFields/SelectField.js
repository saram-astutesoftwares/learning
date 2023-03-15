import React from 'react'
import {Field, ErrorMessage} from "formik";
import Select from "react-select";
import { selectStyles } from '../../utils';

const SelectField = ({form, field, label_text, options, notSearchable, isDisabled}) => {

    const handleChange = (value) => {
        form.setFieldValue(field, value);
    }
    return (
        <>
            <div>
                <div className={`relative block h-12 w-full group`}>
                <Select
                    styles={selectStyles(form.touched[field] && form.errors[field])}
                    options={options}
                    value={form.values[field]}
                    onChange={handleChange}
                    className="flex-grow field-text-size"
                    placeholder={label_text}
                    isDisabled={isDisabled}
                />
                <p className="text-xs text-red-500">
                    <ErrorMessage name={field} />
                </p>
            </div>
            </div>
        </>
    )
}

export default SelectField