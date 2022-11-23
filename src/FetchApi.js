import { useEffect, useState } from 'react';

function FetchApi() {
    const [image, setImage] = useState();
    useEffect(() => {
        fetch('https://mocki.io/v1/8fecb227-0c0a-4e0b-9c23-ceda5cbce42e')
        //http://localhost:3500/productList
        //https://mocki.io/v1/8fecb227-0c0a-4e0b-9c23-ceda5cbce42e
            .then((response) => response.json())
            .then((data) => {
                const c = data.map((x) =>
                    <div className='w-[15%] h-[15%] mt-[5%] rounded-md shadow-lg overflow-hidden hover:bg-slate-50 p-2 m-2'>
                        <img src={"/" + x.image} />
                        <p className="hover:text-blue-600">{x.p1}</p>
                        <p className="mt-2 text-orange-600">{x.p2}</p>
                    </div>
                );
                setImage(c);
            });
    }, []);
    return (
        <div className='flex w-full h-full'>
            <div className='w-2/12 h-full'></div>
            <div className='flex flex-row flex-wrap w-8/12 h-full'>
                {image}
                {image}
                {image}
                {image}
            </div>
            <div className='w-2/12 h-full'></div>
        </div>
    );
}
export default FetchApi;
