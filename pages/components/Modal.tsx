export default function Modal() {

    // function to toggle modal
    function toggleModal() {
        const modal = document.getElementById('infoModal') as HTMLDivElement;
        modal.classList.toggle('hidden');
    }

    return (
        <>
            <div className='fixed z-10 overflow-y-auto top-0 w-full left-0 hidden' id='infoModal'>
                <div className='flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <div className='fixed inset-0 transition-opacity'>
                        <div className='absolute inset-0 bg-gray-900 opacity-75' />
                    </div>
                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>&#8203;</span>
                    <div className='inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full' role='dialog' aria-modal='true' aria-labelledby='modal-headline'>
                        <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ut, nobis ex eius eaque maxime provident suscipit vero iure, autem aperiam sed magni maiores non, officiis ab porro modi doloribus.</p>
                        </div>
                        <div className='bg-gray-200 px-4 py-3 text-right'>
                            <button type='button' className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2' onClick={toggleModal}>
                                <i className='fas fa-times'></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
