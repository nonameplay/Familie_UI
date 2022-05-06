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
            <div className="sm:w-3/5 sm:h-32 2xl:w-1/3 2xl:h-32 xl:w-1/3 xl:h-24 hud rounded-full absolute">
                <div className="grid">

                    <div className="speed">
                        <div className='flex justify-center items-end'><p className='text-4xl text-white'>100</p></div>
                        <div><p className='text-white text-xs mb-2'>KM/H</p></div>
                    </div>

                    <div className="car-ui ml-5">
                        <div className='border-2 border-black bg-black absolute -mt-20 p-1 -ml-64 rounded-full'>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972082444259950612/low.png" className='w-5' alt="" />
                        </div>
                        <div className='border-2 border-cyan-800 bg-cyan-800 absolute -mt-20 p-1 ml-64 rounded-full'>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972082461439823892/belt.png" className='w-5' alt="" />
                        </div>
                        <div className="grid grid-rows-3 grid-flow-col gap-4 flex items-center mt-4">
                            <div className="col-span-2 bg-zinc-800 w-12 text-xs -mt-14 ml-2 text-center text-white absolute">2.2</div>
                            <div className="col-span-2 w-12 text-xs text-center -mt-4 -ml-1 text-white absolute">Bar</div>
                            <div className="col-span-2 bg-zinc-800 w-12 text-xs mt-8 -ml-2 text-center text-white absolute">2.2</div>
                            <div className="row-span-3 z-40">
                                <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-24 ml-9' alt="" />
                            </div>
                            <div className="col-span-2 bg-zinc-800 w-12 text-xs -mt-14 ml-28 text-center text-white absolute">2.2</div>
                            <div className="col-span-2 w-12 text-xs text-center pl-4 -mt-4 ml-28 text-white absolute">Bar</div>
                            <div className="col-span-2 bg-zinc-800 w-12 text-xs mt-8 ml-32 text-center text-white absolute">2.2</div>
                        </div>
                    </div>

                    <div className="gear">
                        <div className='flex justify-center items-end'><p className='text-4xl text-white'>2</p></div>
                        <div className='flex justify-center items-start'>
                            <p className='text-white text-xs mb-2'>GEAR</p>
                        </div>
                    </div>
                </div>
                <div className='grid -mt-24'>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='grid w-32'>
                            <div className='flex justify-center items-center text-white'>
                                <p className='text-xs'>F</p>
                            </div>
                            <div className='flex justify-center items-center'>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972091432884138094/fuel.png" className='w-4' alt="" />
                            </div>
                            <div className='flex justify-center items-center text-white'>
                                <p className='text-xs'>E</p>
                            </div>
                            <div className='border-b-4 border-neutral-700 w-28 rounded-lg mt-16 ml-2 absolute'></div>
                            <div className='border-b-4 border-emerald-400 w-16 rounded-lg mt-16 ml-2 absolute'></div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='grid w-32'>
                            <div className='flex justify-center items-center text-white'>
                                <p className='text-xs'>H</p>
                            </div>
                            <div className='flex justify-center items-center'>
                            <img src="https://media.discordapp.net/attachments/811222595151986710/972091432645046312/tool.png" className='w-4' alt="" />
                            </div>
                            <div className='flex justify-center items-center text-white'>
                                <p className='text-xs'>C</p>
                            </div>
                            <div className='border-b-4 border-neutral-700 w-28 rounded-lg mt-16 ml-2 absolute'></div>
                            <div className='border-b-4 border-emerald-400 w-16 rounded-lg mt-16 ml-2 absolute'></div>
                        </div>
                    </div>
                </div>
            </div>

        <div className='rounded-3xl bg-neutral-800/75 text-white p-5 set-right absolute'>
            <div className='flex justify-center items-center text-center'>
                หากรถได้รับความเสียหาย
                <br />
                ส่วนที่เสียหายจะเปลี่ยนเป็นสีแดง
            </div>
            <div className="grid mt-5">
                <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-20 mx-5' alt="" />
                <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-20 mx-5' alt="" />
                <img src="https://cdn.discordapp.com/attachments/811222595151986710/972060069413941309/car.svg" className='w-20 mx-5' alt="" />
            </div>
        </div>
        </div>
    );
}

export default App;
