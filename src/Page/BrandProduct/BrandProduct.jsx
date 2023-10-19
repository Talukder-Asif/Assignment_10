import { useLoaderData } from "react-router-dom";

const BrandProduct = () => {
    const data = useLoaderData()
    return (
        <div>
        {data.length}
        </div>
    );
};
// Test
export default BrandProduct;