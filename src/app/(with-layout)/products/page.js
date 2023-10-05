import getAllProducts from "@/utils/getAllProducts";
import Products from "./Products";


const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.categoryId);
    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((product) => <Products key={product.is} product={product} />)
            }
        </div>
    );
};

export default ProductsPage;