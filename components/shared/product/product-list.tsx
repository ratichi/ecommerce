import { Product } from "@/types";
import ProductCard from "./product-card";

type TProps = {
  title: string;
  data: Product[];
};

const ProductList = ({ data, title }: TProps) => {
  return (
    <section className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </section>
  );
};

export default ProductList;
