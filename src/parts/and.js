import { useEffect, useState } from "react";

export default function Or(props) {
    const [startOption, setStartOption] = useState('');

    useEffect(() => {
        props.onSubmit(startOption);
    }, [startOption])


    return (<>
        <select onChange={(event) => setStartOption(event.target.value)}>
            <option value='constant'>constant</option>
            <option value='argument'>argument</option>
            <option value='and' selected>and</option>
            <option value='or'>or</option>
            <option>select...</option>
        </select>
        <button >&#10006;</button>

    </>)


}