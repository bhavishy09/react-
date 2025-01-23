import React,{useId} from 'react'


function InputBox({
  label,
  amount,
  onamountchange,
  oncurrencychange,
  currencyoptions=[],
  selectcurrency="usd",
  amountDisabled=false,
  currencyDisabled=false,

  //-> this is user se css 
  className = "",
}) {
      const amountid = useid()


  return (
    //css in javascript backtics lga k kyuki agr user ko apna kuch css dalna hoto
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
          <div className="w-1/2">
              <label htmlFor={amountid} className="text-black/40 mb-2 inline-block">
                {label}
              </label>
              <input
                  id={amountid}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisabled}
                  value={amount}
                  onChange={(e)=> onamountchange && onamountchange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectcurrency}
                  onChange={(e)=> selectcurrency && selectcurrency(e,taget.value)}
                  disabled={currencyDisabled}

              >
                   {currencyoptions.map((currency)=>
                   
                    //to get performance in lopp use key in loops
                   <option key={currency} value={currency}>
                          {currency}
                      </option>
                   
                   
                   )} 
                      
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;