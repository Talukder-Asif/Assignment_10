/* eslint-disable react/prop-types */
const BrandsLayout = ({brand}) => {
    return (
        <a href={`/brands/${brand.name}`}><div className="bg-gradient-to-r from-[#908d8d52] hover:from-[ffffff] to-[#ffffff] md:h-48 shadow-lg shadow-slate-300 rounded-md p-5 text-center hover:shadow-none">
          <img className="m-auto w-3/4 py-5" src={brand.image}></img>
        <p className="text-lg font-semibold">{brand.name}</p>
        </div></a>
    );
};

export default BrandsLayout;