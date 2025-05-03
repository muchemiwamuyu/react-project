import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, increamentByAmount } from '../redux/counterSlice';

export const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmout] = useState(0);
    return (
        <div className='p-4 text-center'>
            <h1 className='text-3xl '>Counter app with redux</h1>
            <div className='text-2xl mb-4'>
                count: {count}
            </div>
            <div className='mb-4 bg-blue-500 text-white px-2 py-2'>
                <button onClick={() => dispatch(increment())}>increament</button>
            </div>
            <div className='mb-4 bg-blue-500 text-red-700 px-2 py-2'>
                <button onClick={() => dispatch(decrement())}>decreament</button>
            </div>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmout(Number(e.target.value))}
                    placeholder='enter amount'
                    className='border px-2 py-1 mr-2 m-2'
                />
                <div className='mb-4 bg-blue-500 text-red-700 px-2 py-2'>
                    <button onClick={() => dispatch(increamentByAmount())}>increament by amount</button>
                </div>
            </div>
        </div>
    )
}
