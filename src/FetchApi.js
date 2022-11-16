import { useEffect, useState } from 'react';

function FetchApi() {
    const [image, setImage] = useState();
    const [p1, setP1] = useState();
    const [p2, setP2] = useState();
    useEffect(() => {
        fetch('https://mocki.io/v1/8fecb227-0c0a-4e0b-9c23-ceda5cbce42e')
            .then((response) => response.json())
            .then((data) => {
                const c = data.map((x) =>
                    <div className='w-full h-2/6 mt-[15%] rounded-md shadow-lg overflow-hidden pb-3 hover:bg-slate-100'>
                        <img src={"/" + x.image} />
                        <p className="hover:text-blue-600">{x.p1}</p>
                        <p className="mt-2 text-orange-600">{x.p2}</p>
                    </div>
                );
                setImage(c);
                setP1(c);
                setP2(c);
            });
    }, []);
    return (
        <div className='flex w-full h-full'>
            <div className='w-2/12 h-full'></div>
            <div className='flex flex-row w-8/12 h-full'>
                <div><image className='flex flex-col p-2'>{image}</image></div>
                <div><image className='flex flex-col p-2'>{image}</image></div>
                <div><image className='flex flex-col p-2'>{image}</image></div>
                <div><image className='flex flex-col p-2'>{image}</image></div>
                <div><image className='flex flex-col p-2'>{image}</image></div>
                <div><image className='flex flex-col p-2'>{image}</image></div>
            </div>
            <div className='w-2/12 h-full'></div>
        </div>
    );
}
export default FetchApi;

