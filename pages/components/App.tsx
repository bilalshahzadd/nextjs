import { useState, useEffect } from 'react';
import Modal from './Modal';

export default function App() {

    // function to toggle modal
    function toggleModal() {
        const modal = document.getElementById('infoModal') as HTMLDivElement;
        modal.classList.toggle('hidden');
    }

    let [collectedAmount, setCollectedAmount] = useState(0);
    let [neededAmount, setNeededAmount] = useState(167);
    let [donors, setDonors] = useState(42);
    let [progressWidth, setProgressWidth] = useState(0);
    let [display, setDisplay] = useState('');
    let totalAmount: number = 167;
    const items = localStorage.getItem('items');

    useEffect(() => {
        if (items) {
            const parsedData = JSON.parse(items);
            setNeededAmount(parsedData.neededAmount);
            setCollectedAmount(parsedData.collectedAmount);
            setDonors(parsedData.donors);
            setProgressWidth(parsedData.ProgressBar);
        } else {
            return;
        }
    })

    // function to update the amount 
    function updateAmount(event: React.FormEvent<HTMLFormElement>) {

        // preventing page reload
        event.preventDefault();

        // selecting the html input value
        const amount = document.getElementById('amount') as HTMLInputElement;

        // function will not be exected if the amount is greater than the neededAmount
        if (amount.valueAsNumber > neededAmount) {
            alert("Sorry you cannot donate more than $" + neededAmount);
            return;
        }

        // function will not be exected if the amount is less than 0
        if (amount.valueAsNumber <= 0) {
            alert("Sorry No Amount Detected");
            return;
        }

        setNeededAmount(neededAmount -= amount.valueAsNumber);
        setCollectedAmount(collectedAmount += amount.valueAsNumber);
        setDonors(donors += 1);
        setProgressWidth(collectedAmount / totalAmount * 100);

        if (neededAmount <= 0) {
            setDisplay('hidden');
        }

        const data: object = {
            'neededAmount': neededAmount,
            'collectedAmount': collectedAmount,
            'donors': donors,
            'ProgressBar': progressWidth
        };

        // sending data into local storage
        localStorage.setItem('items', JSON.stringify(data));
    }

    return (
        <>
            {/* main div */}
            <div className='flex flex-col justify-center items-center h-screen'>

                {/* tooltip box */}
                <div className={`w-96 mb-3 ${display}`} id='tooltipBox'>
                    <div>
                        <div className='mx-auto container px-4 py-4 bg-[#424242] rounded relative'>
                            <p className=' text-sm text-white pt-2 pb-2'>$<span id='neededAmount' className='font-bold'>{neededAmount}</span> still needed for this project</p>
                            <svg className='absolute z-10  bottom-[-10px] ' width={16} height={10} viewBox='0 0 16 10' fill='#424242' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8 10L0 0L16 1.41326e-06L8 10Z' fill='#424242' />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* progress bar here */}
                <div className='progress-bar-container w-96 h-5 border'>
                    <div className={`progress-bar bg-[#f15e33] w-[${progressWidth + '%'}] h-[1.1rem] transition-all`} id='progress-bar'></div>
                </div>

                {/* all the elements are stored in this div */}
                <div className='detail-container h-[15.5rem] w-96 border-x flex flex-col border-b'>

                    {/* text blocks here */}
                    <div className='content flex flex-col ml-5 mt-10 h-40 justify-evenly'>

                        <h1 className='text-[#828282]'><span className='text-[#f15e33] font-bold'>Only 3 days left </span>to fund this project.</h1>

                        <p className='pt-4 text-[#828282]'>Join the <span id='donors' className='font-bold'>{donors}</span> other donors who have
                            already supported this project. Every
                            dollar helps.</p>

                        {/* button and input */}
                        <div className='buttonInput mt-5 flex flex-row items-center'>

                            <div className='h-10 w-24'>
                                <div className='relative rounded-md shadow-sm'>
                                    <form onSubmit={updateAmount} className='flex w-96'>
                                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                            <span className='text-gray-500 sm:text-sm font-bold'>$</span>
                                        </div>
                                        <input type='number' min={0} name='amount' id='amount' className='rounded border-gray-300 pl-7 focus:border- focus:ring-indigo-500 sm:text-sm h-10 w-24 border apperance font-bold' required />
                                        <button className={`btn-primary border h-10 text-center mx-2 w-24 bg-[#00be1c] text-white rounded ${display}`} id='giveButton'>Give Now</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                        <p className='pt-[1.5rem] italic text-[#44b3de] cursor-pointer' id='modal' onClick={toggleModal}>Why Give 50$?</p>

                    </div>

                </div>

                {/* buttons */}
                <div className='flex mt-4'>
                    <button className='pl-9 pr-9 pt-2 pb-2 bg-[#fafafa] text-[#777777] mx-1 border rounded font-bold'>Save for later</button>
                    <button className='pl-9 pr-9 pt-2 pb-2 bg-[#fafafa] text-[#777777] mx-1 border rounded font-bold'>Tell your friends</button>
                </div>

            </div>

            {/* modal here */}
            <Modal />
        </>
    )
}