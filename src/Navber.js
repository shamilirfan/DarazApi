function Navigation({ name }) {
    const tulip = "hover:text-blue-600 ml-[2%]";
    return (
        <span className={tulip}>{name}</span>
    );
}

const names = [
    'SAVE MORE ON APP',
    'SELL ON DARAZ ',
    'CUSTOMER CARE',
    'TRACK MY ORDER',
    'SIGNUP / LOGIN',
    'DARAZ AFFILIATE PROGRAM',
    'ভাষা'
];

const Nav = names.map(y => <Navigation name={y} />);


function Navber() {
    return (
        <div className='flex flex-row w-full h-[5%] justify-center bg-gray-100'>
            {Nav}
        </div>
    );
}

export default Navber;
