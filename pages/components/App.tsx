import Modal from "./Modal";

export default function App() {

    // function to toggle modal
    function toggleModal() {
        const modal = document.getElementById('infoModal') as HTMLDivElement;
        modal.classList.toggle('hidden');
    }

    // storing the needed amount in a variable to update it later
    let neededAmount = 167;

    // function to perform the sum between the donated amount and the needed amount
    function subtractAmount() {
        // selecting the html input value
    }

    return (
        <>
            {/* main div */}
            <div className='flex flex-col justify-center items-center h-screen'>

                {/* tooltip box */}
                <div className='w-96 mb-3'>
                    <div>
                        <div className="mx-auto container px-4 py-4 bg-[#424242] rounded relative">
                            <p className=" text-xs font-bold text-white pt-2 pb-2">${neededAmount} still needed for this project</p>
                            <svg className="absolute z-10  bottom-[-10px] " width={16} height={10} viewBox="0 0 16 10" fill="#424242" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="#424242" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* all the elements are stored in this div */}
                <div className='detail-container h-[17rem] w-96 border flex flex-col'>

                    {/* progress bar here */}
                    <div className='progress-bar-container w-96 h-5 border'>
                        <div className='progress-bar bg-[#f15e33] w-80 h-5'></div>
                    </div>

                    {/* text blocks here */}
                    <div className='content flex flex-col ml-5 mt-10 h-40 justify-evenly'>

                        <h1 className='text-[#828282]'><span className='text-[#f15e33] font-bold'>Only 3 days left </span>to fund this project.</h1>

                        <p className='pt-4 text-[#828282]'>Join the 42 other donors who have
                            already supported this project. Every
                            dollar helps.</p>

                        {/* button and input */}
                        <div className='buttonInput mt-5 flex flex-row items-center'>

                            <div className='h-10 w-24'>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                    </div>
                                    <form action="#" className="flex w-96">
                                        <input type="text" name="amount" id="amount" className="rounded border-gray-300 pl-7 pr-12 focus:border- focus:ring-indigo-500 sm:text-sm h-10 w-24 border rounded" />
                                        <button className='btn-primary border h-10 text-center mx-2 w-24 bg-[#00be1c] text-white rounded'>Give Now</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                        <p className='pt-[1.5rem] italic text-[#44b3de] cursor-pointer' onClick={toggleModal}>Why Give 50$?</p>

                    </div>

                </div>

                {/* buttons */}
                <div className='flex mt-5'>
                    <button className='pl-10 pr-10 pt-2 pb-2 bg-[#fafafa] text-[#777777] mx-1 border rounded'>Save for later</button>
                    <button className='pl-10 pr-10 pt-2 pb-2 bg-[#fafafa] text-[#777777] mx-1 border rounded'>Tell your friends</button>
                </div>

            </div>

            {/* modal here */}
            <Modal />


        </>
    )
}
