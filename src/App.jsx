import React, {useState} from 'react'

const numbers = [1,2,3,'/',4,5,6,'*',7,8,9,'-',0,'.','=','+','CLEAR'];



const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e)=>{
    setResult(result.concat(e.target.name));
  }

  const handleSubmit = ()=>{
    try{
      setResult(eval(result).toString());
    }catch(ex){
      alert(ex);
    }
  }

  const clearInput = ()=>{
    setResult('');
  }

  const Button = ({data, index})=>{
    return (
      <div className="item">
        <button className={`bg-purple-500 w-[90%] mx-auto p-2 m-3 rounded-[8px] text-2xl shadow-sm shadow-purple-800 hover:bg-purple-900 ease-in-out duration-300 ${(index%4 === 3) ? 'w-[3.5rem] ml-5 place-content-center' : 'w-[6rem]'} ${data === 'CLEAR' && 'w-[26rem]'}`} onClick={data === '=' ? handleSubmit : data === 'CLEAR' ? clearInput : handleClick} name={data}> {data} </button>
      </div>
    )
  }

  const handleBackSpace = ()=>{
    setResult(result.slice(0, -1));
  }

  return (
    <>
      <div className="container grid place-items-center mt-[5rem] max-w-[30rem] mx-auto bg-[#161B26] shadow-lg shadow-purple-400 rounded-md">
        <div className='h-[32rem] text-white w-full p-5'>
          <div className="container grid grid-cols-4 gap-3">
            <div className="item1 col-span-3 bg-white">
              <input type="text" name="number" id="number" className="w-full inline-block p-3 text-black text-3xl font-semibold" autoComplete='off' value={result}/>
            </div>
            <div className="item2 grid place-items-center bg-red-600 w-[60%] mx-auto text-center rounded-[5px] cursor-pointer">
               <button className='text-2xl' onClick={handleBackSpace}> C </button> 
            </div>
            {
              numbers.map((number, index) => (
                <div key={index}>
                  <Button data={number} index={index} />
                </div>
                
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App