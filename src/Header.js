function Header() {
    return (
        <div className='flex flex-row w-full h-[10%]'>
            <img
                className="w-[7%] mt-[1%] ml-[17%]"
                src="bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
            />
            <input
                type="input"
                placeholder="Search in Daraz"
                className=" h-[70%] w-4/12 mt-5 p-3 border bg-gray-100 ml-[8%]" />
            <img
                className="w-[2%] mt-[1%]"
                src="04searchicon.jpeg"
            />
            <img
                className="w-[7%] mt-[1%] ml-[8%]"
                src="e6fd2baf-e763-44e8-9c7a-6cb0da66a49f.png"
            />
        </div>
    );
}
export default Header;


