import { Cart } from './Cart';
import { Products } from './Products';

export const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:p-8 py-4 px-6 md:w-full">
        <Products className="flex-1 md:border-2 md:border-b-emerald-700" />
        <Cart className="bg-blue-700 border-2 border-red-500 md:w-1/4 md:h-50 " />
      </div>
    </>
  );
};
