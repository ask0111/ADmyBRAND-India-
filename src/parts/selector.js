import { useEffect, useState } from "react";

export default function Start(props) {
    const [startOption, setStartOption] = useState('select...');




    useEffect(() => {
        props.onSubmit(startOption);
    }, [startOption])

    return (<>
        <select onChange={(event) => setStartOption(event.target.value)}>
            <option value='constant'>constant</option>
            <option value='argument'>argument</option>
            <option value='and'>and</option>
            <option value='or'>or</option>
            <option selected>select...</option>
        </select>
        <button >&#10006;</button>
    </>)
}