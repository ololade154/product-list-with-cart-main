import data from './data';
export const Products = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.img.mobile} className="block md:hidden w-full" />

            <img src={item.img.desktop} className="hidden md:block w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
