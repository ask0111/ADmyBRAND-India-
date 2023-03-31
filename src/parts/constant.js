import { useState, useEffect } from "react";

export default function Constant(props) {

    const [startOption, setStartOption] = useState();
    const [startValue, setStartValue] = useState();


    useEffect(() => {
        props.onSubmit(startOption);
    }, [startOption])

    useEffect(() => {
        props.onSubmitValue(startValue);
    }, [startValue])


    return (<>
        <select onClick={(event) => setStartValue(event.target.value)} style={{ width: '110px' }}>
            <option selected></option>
            <option value={true}>true</option>
            <option value={false}>false</option>
        </select>
        <button onClick={(event) => setStartOption('select...')}>&#10006;</button>
    </>);
}