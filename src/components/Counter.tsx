import { useDispatch, useSelector } from "react-redux";
import Buttons from "./UI/Buttons";
import {decrement, increment } from "../feature/counter/counterSlice";
import type { RootState } from "../store/store";

const Counter =()=>{
    const {value} = useSelector((state:RootState)=> state.counter);
    const dispatch = useDispatch();
return (
<div className="space-y-5">
    <h2 className="text-center text-3xl mt-10">Counter : {value}</h2>
  <div className="flex items-center justify-center m-auto space-x-4">
      <Buttons className="bg-stone-600" children={"Increment"} onClick={()=> dispatch(increment(1))}/>
      <Buttons className="bg-orange-800" children={"Decrement"} onClick={()=> dispatch(decrement(5))}/>
    
  </div>
</div>

)
}

export default Counter ;