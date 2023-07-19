import { useState } from "react";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

export const Forms = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  // const [err, setErr]= useState()
  const [tipselected, setTipselected] = useState(0);


  const handleBillinput = (e) => {
    setBill(e.target.value);
    console.log('bill', e.target.value);
  };
  const handlePeoplecount = (e) => {
    setPeople(e.target.value);
    console.log('people', e.target.value)
  };
  const handleTipSelected = (e) => {
    setTipselected(e.target.value);
    console.log(tipselected)
  };



  const tipPerPerson = () => {
    const tip = (bill / people) * tipselected;
    // console.log(tip);
    return tip;
  };

  function totalTip() {
    const tip = ((bill * people) + bill) / people
    // console.log(tip)
    return tip;
  }

  function restAll (){
  window.location.reload()
  }


  return (
    <div  className="mainContainer">
      {/* //forms */}
      <div className="form-display">
        <div>
          <label className="header">Bill</label>

          <div className="wrapper">
            <input
              type="number"
              min="0"
              value={bill === 0 ? "" : bill}
              onChange={handleBillinput}
              placeholder="--"
            />
            <img src={dollar} alt="$" aria-hidden="true" className="icon" />
          </div>
        </div>

        {/* //tip selector  */}
        <div>
          <label className="header">Select Tip %</label>
          <div className="tip-select-wrapper">
            <input type="radio" name="tip-percentage" id="r1" value=".05" onClick={handleTipSelected} />
            <label htmlFor="r1" className="tip-btn">
              5%
            </label>

            <input type="radio" name="tip-percentage" id="r2" value=".1" onClick={handleTipSelected}/>
            <label htmlFor="r2" className="tip-btn">
              10%
            </label>

            <input type="radio" name="tip-percentage" id="r3" value=".15" onClick={handleTipSelected} />
            <label htmlFor="r3" className="tip-btn">
              15%
            </label>

            <input type="radio" name="tip-percentage" id="r4" value=".25" onClick={handleTipSelected} />
            <label htmlFor="r4" className="tip-btn">
              25%
            </label>

            <input type="radio" name="tip-percentage" id="r5" value=".5" onClick={handleTipSelected} />
            <label htmlFor="r5" className="tip-btn">
              50%
            </label>
            <input type="radio" name="tip-percentage" id="r5" value=".5" />
            <input
             className="tip-selector"
              id="tip-custom"
            type="number"
              min="0"
              onChange={(e)=>{setTipselected(e.target.value)}}
              placeholder="--"
            />
          </div>
        </div>

        {/* //number of people */}

        <div>
          <div className="lebel-wrapper header">
            <label>Number of People</label>
            <span className="error">Invalid bill</span>
            
          </div>

          <div className="wrapper">
            <input
              type="number"
              min="0"
              value={people || "1"}
              onInput={handlePeoplecount}
              placeholder="--"
            />
            <img src={person} alt="$" aria-hidden="true" className="icon" />
          </div>
        </div>
      </div>






      {/* ///display  */}
      <div className="display">
        {/* tip Amount */}
        <div className="display-wrapper">
          <div className="wrapper">
            <div className="label">
              <p className="header">Tip Amount</p>
              <p className="units">/ Person</p>
            </div>
            <div className="amount">
              <p className="value">
                {tipPerPerson() === Infinity || isNaN(tipPerPerson())
                  ? "$0.00"
                  : `$${tipPerPerson().toFixed(2)}`}
              </p>
            </div>
          </div>

          {/* total */}
          <div className="wrapper">
            <div className="label">
              <p className="header">Total</p>
              <p className="units">/ Person</p>
            </div>
            <div className="amount">
              <p className="value">
              {totalTip() === Infinity || totalTip() <= 0 || totalTip() === isNaN
                  ? "$0.00"
                  : `$${totalTip().toFixed(2)}`}
                </p>
            </div>
          </div>
        </div>

        {/* reset-btn */}
        <button onClick={restAll} id="restAll" className={!(totalTip()*1 > 2 || tipPerPerson() *1> 2)?"disabled":''} >Reset</button>
      </div>
    </div>
  );
};
