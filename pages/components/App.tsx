import Modal from "./Modal";

export default function App() {

    // function to toggle modal
    function toggleModal() {
        const modal = document.getElementById('infoModal') as HTMLDivElement;
        modal.classList.toggle('hidden');
    }

    // collected amount here
    let collectedAmount: number = 0;

    // needed amount here
    let neededAmount: number = 167;

    // total amount here 
    let totalAmount: number = 167;

    // donor count here
    let donors: number = 42;

    // assigning value to the collectedAmount
    collectedAmount = totalAmount - neededAmount;

    // function to update the amount 
    function updateAmount(event: React.FormEvent<HTMLFormElement>) {

        // preventing form from reloading the page after submit
        event.preventDefault();

        // selecting the html input value
        const amount = document.getElementById('amount') as HTMLInputElement;

        // selecting the element to update the value
        const elem = document.getElementById('neededAmount') as HTMLSpanElement;

        // moving the progression bar
        const progressBar = document.getElementById('progress-bar') as HTMLDivElement;

        // selecting the tooltip box
        const tooltip = document.getElementById('tooltipBox') as HTMLDivElement;

        // selecting the button
        const btn = document.getElementById('giveButton') as HTMLDivElement;

        // selecting the donor count
        const donorCount = document.getElementById('donors') as HTMLSpanElement;

        // limiting the amount
        if (amount.valueAsNumber > neededAmount) {
            alert('You cannot donate more than $' + neededAmount);
            return;
        }

        // updating the donor count
        if (amount.valueAsNumber == 0) {
            alert('No amount detected');
            return;
        } else {
            donors += 1;
        }

        // taking the sum of collected and donated amount
        collectedAmount += amount.valueAsNumber;

        // progressBar width
        progressBar.style.width = collectedAmount / totalAmount * 100 + '%';

        // updating the needed amount 
        neededAmount -= amount.valueAsNumber;

        // displaying the needed amount
        elem.innerHTML = neededAmount.toString();

        // displaying the donor count
        donorCount.innerHTML = donors.toString();

        // tooltip will be set to display none when the amount is reached the limit
        if (neededAmount <= 0) {
            progressBar.style.backgroundColor = '#00be1c';
            tooltip.style.display = 'none';
            btn.style.display = 'none';
        }

    }

    return (
        <>
            {/* main div */}
            <div className='flex flex-col justify-center items-center h-screen'>

                {/* tooltip box */}
                <div className='w-96 mb-3' id='tooltipBox'>
                    <div>
                        <div className="mx-auto container px-4 py-4 bg-[#424242] rounded relative">
                            <p className=" text-sm text-white pt-2 pb-2">$<span id='neededAmount' className="font-bold">{neededAmount}</span> still needed for this project</p>
                            <svg className="absolute z-10  bottom-[-10px] " width={16} height={10} viewBox="0 0 16 10" fill="#424242" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="#424242" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* progress bar here */}
                <div className='progress-bar-container w-96 h-5 border'>
                    <div className='progress-bar bg-[#f15e33] w-0 h-[1.1rem] transition-all' id='progress-bar'></div>
                </div>

                {/* all the elements are stored in this div */}
                <div className='detail-container h-[15.5rem] w-96 border-x flex flex-col border-b'>

                    {/* text blocks here */}
                    <div className='content flex flex-col ml-5 mt-10 h-40 justify-evenly'>

                        <h1 className='text-[#828282]'><span className='text-[#f15e33] font-bold'>Only 3 days left </span>to fund this project.</h1>

                        <p className='pt-4 text-[#828282]'>Join the <span id="donors" className="font-bold">{donors}</span> other donors who have
                            already supported this project. Every
                            dollar helps.</p>

                        {/* button and input */}
                        <div className='buttonInput mt-5 flex flex-row items-center'>

                            <div className='h-10 w-24'>
                                <div className="relative rounded-md shadow-sm">
                                    <form onSubmit={updateAmount} className="flex w-96">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="text-gray-500 sm:text-sm font-bold">$</span>
                                        </div>
                                        <input type="number" name="amount" id="amount" className="rounded border-gray-300 pl-7 focus:border- focus:ring-indigo-500 sm:text-sm h-10 w-24 border apperance font-bold" required />
                                        <button className='btn-primary border h-10 text-center mx-2 w-24 bg-[#00be1c] text-white rounded' id='giveButton'>Give Now</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                        <p className='pt-[1.5rem] italic text-[#44b3de] cursor-pointer' onClick={toggleModal}>Why Give 50$?</p>

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