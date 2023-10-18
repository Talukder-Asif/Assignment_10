import { useParams } from "react-router-dom";

const BrandProduct = () => {
    const params = useParams().brandname;
    console.log(params)
    return (
        <div>
        {params}
        </div>
    );
};
// Test
export default BrandProduct;