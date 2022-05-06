import React from 'react';
import './App.css'
import {debugData} from "../utils/debugData";

// This will set the NUI to visible if we are
// developing in browser
debugData([
    {
        action: 'setVisible',
        data: true,
    }
])
const App: React.FC = () => {
    return (
        <div className='flex justify-center'>
            <div className="hud">
                <div className="grid">

                    <div className="speed">
                        <div className="progress-bar">
                            <svg width="60%" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                <circle className="progress-bg" fill="none" stroke-width="2" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                            </svg>
                        </div>
                        <div className="progress-bar">
                            <svg width="60%" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                <circle className="progress" fill="none" stroke-width="2" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                            </svg>
                        </div>
                        <div className='flex justify-center items-end mt-14'><p className='text-5xl text-white'>100</p></div>
                        <div><p className='text-white text-sm'>KM/H</p></div>
                        <div className='grid flex justify-center w-24 ml-12'>
                            <div className='text-white -ml-6'>
                                <p className='text-xs'>H</p>
                            </div>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972091432884138094/fuel.png" className='w-4 ml-3' alt="" />
                            <div className='text-white ml-10'>
                                <p className='text-xs'>C</p>
                            </div>
                            <div className="fuel_bar mt-5 -ml-2 absolute">
                                <div className='bg-neutral-600 w-full h-1 rounded absolute'></div>
                                <div className='bg-emerald-400 w-6/12 h-1 rounded absolute'></div>
                            </div>
                        </div>
                    </div>

                    <div className="car-ui ml-5">
                        <div className='border-2 border-black bg-black absolute -mt-28 p-1 -ml-52 rounded-full'>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972082444259950612/low.png" className='w-4' alt="" />
                        </div>
                        <div className='border-2 border-cyan-800 bg-cyan-800 absolute -mt-28 p-1 ml-40 rounded-full'>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972082461439823892/belt.png" className='w-4' alt="" />
                        </div>
                        <div className="grid grid-rows-3 grid-flow-col gap-4 flex items-center mt-4">
                            <div className="col-span-2 bg-zinc-800 w-12 text-xs -mt-8 -ml-1 pl-3 text-white absolute">2.2</div>
                            <div className="col-span-2 w-12 text-xs text-center mt-3 -ml-4 text-white absolute">Bar</div>
                            <div className="col-span-2 bg-zinc-800 w-8 text-xs mt-16 -ml-4 text-center text-white absolute">2.2</div>
                            <div className="row-span-3 z-40">
                                <div className="road"></div>
                                <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-28 mt-7 ml-4' alt="" />
                            </div>
                            <div className="col-span-2 bg-zinc-800 w-12 text-xs -mt-8 ml-24 text-center pl-4 text-white absolute">2.2</div>
                            <div className="col-span-2 w-12 text-xs text-center mt-3 ml-28 text-white absolute">Bar</div>
                            <div className="col-span-2 bg-zinc-800 w-8 text-xs mt-16 ml-32 text-center text-white absolute">2.2</div>
                        </div>
                    </div>

                    <div className="gear -ml-1">
                        <div className="progress-bar">
                            <svg width="100%" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                <circle className="progress-bg" fill="none" stroke-width="2" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                            </svg>
                        </div>
                        <div className="progress-bar">
                            <svg width="100%" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                <circle className="progress" fill="none" stroke-width="2" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                            </svg>
                        </div>
                        <div className='flex justify-center items-end mt-14'><p className='text-5xl text-white'>2</p></div>
                        <div><p className='text-white text-sm'>GEAR</p></div>
                        <div className='grid flex justify-center w-24 ml-12'>
                            <div className='text-white -ml-6'>
                                <p className='text-xs'>H</p>
                            </div>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972091432645046312/tool.png" className='w-4 ml-3' alt="" />
                            <div className='text-white ml-10'>
                                <p className='text-xs'>C</p>
                            </div>
                            <div className="engin_bar mt-5 -ml-2 absolute">
                                <div className='bg-neutral-700 w-full h-1 rounded absolute'></div>
                                <div className='bg-emerald-400 w-6/12 h-1 rounded absolute'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-3xl bg-neutral-800/75 text-white pt-3 pb-4 set-right absolute'>
                <div className='flex justify-center items-center text-center'>
                    หากรถได้รับความเสียหาย
                    <br />
                    ส่วนที่เสียหายจะเปลี่ยนเป็นสีแดง
                </div>
                <div className="grid mt-5">
                    <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-1-12 mx-4' alt="" />
                    <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-1-12 mx-4' alt="" />
                    <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-1-12 mx-4' alt="" />
                </div>
            </div>
        </div>
    );
}

export default App;
