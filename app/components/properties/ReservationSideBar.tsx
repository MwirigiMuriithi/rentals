const ReservationSideBar = () =>{
    return(
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl ">
            <h2 className="mb-5 text-2xl">500 per night</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor="" className="mb-2 block font-bold text-xs">Guests</label>
                <select name="" id="" className="w-full -ml-1 text-xm">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                </select>
            </div>
            <div className="w-full mb-6 py-6 text-center text-white bg-rentals rounded-xl hover:bg-rentalsDark">book</div>

            <div className="mb-4 flex justify-between align-center">
                <p>500*4 nights</p>
                <p>2000</p>
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>Vine Rentals fee</p>
                <p>100</p>
            </div>
            <hr />
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>total fee</p>
                <p>2100</p>
            </div>
        </aside>
    )
}

export default ReservationSideBar;