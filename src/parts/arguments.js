import { useContext, useEffect, useState } from "react";
import { inputContext } from "../App";

export default function Argument(props) {
    const [startOption, setStartOption] = useState();
    const [startValue, setStartValue] = useState();
    const valueData = useContext(inputContext);

    useEffect(() => {
        props.onSubmit(startOption);
    }, [startOption])

    useEffect(() => {
        console.log('dataX')
        props.onSubmitValue(valueData[+startValue]?.bool);
    }, [startValue, valueData])


    return (<>
        <select onClick={(event) => setStartOption(setStartValue(event.target.value))} style={{ width: '110px' }}>
            {console.log(valueData, 'dddssa')}
            {valueData.map((data, i) => {
                return <option value={i}>{data.variable}</option>
            })}

        </select>
        <button onClick={(event) => setStartOption('select...')}>&#10006;</button>
    </>)
}
