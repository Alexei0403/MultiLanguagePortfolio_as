import { useState } from 'react';

const FormInput = (
    {

        name,
        type,
        label,
        handleOnChange,
        errorMsg,
        inputPattern,
        isRequired,
        classes

    }
) => {

    const [checker, setChecker] = useState(false);

    const handleChecker = (e) => {
        setChecker(true);
    }

    return (

        <div className={classes} >

            <div className="control">

                <input

                    type={type}
                    name={name}
                    id={name}
                    className="input is-medium"
                    onChange={handleOnChange}
                    pattern={inputPattern}
                    required={isRequired}
                    onBlur={handleChecker}
                    focused={checker.toString()}

                />

                <span className='errorMessage'>{errorMsg}</span>

                <label htmlFor={name} className="label is-uppercase">{label}</label>

            </div>


        </div >

    )

}

export default FormInput;