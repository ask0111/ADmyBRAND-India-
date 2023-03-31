import { useState, useEffect, useCallback } from "react";
// import SelectDataType from "./solution/selectdatatype";
import Head from './parts/head/operate';
import './app.css'
import { createContext } from "react";
const inputContext = createContext();
const ResultProvider = createContext();


function App() {

  const [state, setState] = useState(['My Arg']);
  const [updatestate, setUpdateState] = useState({});
  const [bool, setBool] = useState({});
  const [inputData, setInputData] = useState([{ id: 0, bool: true, variable: state[0] }]);
  const [resultVal, setResultVal] = useState(['undefined']);


  const setStateData = useCallback(() => {
    var storeupdateValue = state.map((data, i) => {
      if (i === updatestate.index) {
        return updatestate.value;
      }
      return data;
    })
    setState(storeupdateValue);
  }, [state, updatestate])

  useEffect(() => {
    const varwithvalue = inputData.map((data, i) => {
      if (i === bool.index) {
        return { id: i, bool: bool.value, variable: data.variable };
      }
      return data;
    });

    setInputData(varwithvalue);
  }, [bool])

  useEffect(() => {
    setStateData();
    var arr = inputData.map((data, i) => {
      if (i === updatestate.index) {
        return {
          id: i,
          bool: inputData[i].bool,
          variable: updatestate.value
        }
      }
      return data;
    });
    setInputData(arr);

  }, [updatestate]);

  const Handler = () => {
    setState([...state, 'New Arg']);
    setInputData([...inputData, { id: inputData.length, bool: true, variable: 'New Arg' }])
  }
  const ResultValues = (Props) => {
    setResultVal(Props);
  }



  const resultfunction = () => {
    var holdval;

    return resultVal.reduce((preVal, val) => {
      if (typeof (val) == 'object') {
        if (holdval === undefined) {
          return holdval === '&&' ? (true && (val[0] == '&&' ? (val[1] && val[2]) : (val[1] || val[2]))) : (preVal || (val[0] == '&&' ? (val[1] && val[2]) : (val[1] || val[2])));
        }

        var ans = holdval === '&&' ? (preVal && (val[0] == '&&' ? (val[1] && val[2]) : (val[1] || val[2]))) : (preVal || (val[0] == '&&' ? (val[1] && val[2]) : (val[1] || val[2])));

        holdval = val[0];
        return ans;
      } else {
        return holdval === undefined ? val : (holdval == '&&' ? (preVal && val) : (preVal || val));
      }
    }, false);
  }




  return (
    // <ResultProvider.Provider value={resultVal}>
    <inputContext.Provider value={inputData}>
      {state.map((data, i) => {
        return (
          <>
            <div >
              <input type="text" id="input" onChange={(event) => setUpdateState({ index: i, value: event.target.value })} key={i} value={data} />
              <select key={i + 100} onChange={(event) => setBool({ index: i, value: event.target.value })} >
                <option value={true}>true</option>
                <option value={false}>false</option>
              </select>
            </div>
          </>
        )
      })}

      <button onClick={Handler}>+ Add Arg</button>
      <div style={{ margin: '20px' }}>
        <Head onChangeValues={ResultValues} />
      </div>

      {/* <SelectDataType valueData={inputData} /> */}
      <div >{"Result: " + resultfunction()}</div>

    </inputContext.Provider>
    // </ResultProvider.Provider>
  );
}

export default App;
export { inputContext, ResultProvider }