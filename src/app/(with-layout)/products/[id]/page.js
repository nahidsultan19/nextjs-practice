import getSingleProduct from "@/utils/getSingleProduct";


const SingleProductPage = async ({ params }) => {
    const product = await getSingleProduct(params.id);
    return (
        <div className="flex">
            <h2>{product.title} -<span>{product.price}</span></h2>

        </div>
    );
};

export default SingleProductPage;