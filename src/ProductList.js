const productList = [
  {
    id: 1,
    image: 'i-1.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 2,
    image: 'i-2.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 3,
    image: 'i-3.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 4,
    image: 'i-4.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 5,
    image: 'i-5.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 6,
    image: 'i-6.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 7,
    image: 'i-7.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 8,
    image: 'i-8.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 9,
    image: 'i-9.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 10,
    image: 'i-10.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 11,
    image: 'i-11.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 12,
    image: 'i-12.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 13,
    image: 'i-13.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 14,
    image: 'i-14.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  },
  {
    id: 15,
    image: 'i-15.jpg',
    p1: 'Samsung Galaxy Smartphone',
    p2: '৳ 30,405'
  }
];

function FullPage() {
  const pTags = productList.map((product) => (
    <div>
      <image src={product.image} className="w-11/12 h-2/6 mt-[34%] rounded-md shadow-lg overflow-hidden" />
      <p className="text-1xl hover:text-blue-600">{product.p1}</p>
      <p className="mt-2 text-orange-600">{product.p2}</p>
    </div>
  ));
  return (
    <div className='flex w-full h-full mt-11'>
      <div className='w-2/12 h-full'></div>
      <div className='flex flex-col w-8/12 h-full'>
        {pTags}
      </div>
      <div className='w-2/12 h-full'></div>
    </div>
  );
}
export default FullPage;




