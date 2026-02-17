import { Cart } from './Cart';
import { Products } from './Products';

// import data from './data';
export const Home = () => {
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.img.mobile} className="block md:hidden w-full" />

            <img src={item.img.desktop} className="hidden md:block w-full" />
          </div>
        ))}
      </div> */}
      <div className="flex flex-col md:flex-row gap-2">
        <Products className="flex-1 bg-yellow-500 border-2 border-b-emerald-700" />
        <Cart className="bg-blue-700 border-2 border-red-500 w-full md:w-80 md:h-50 " />
      </div>
    </>
  );
};
