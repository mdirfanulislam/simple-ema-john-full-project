import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setProducts(data);
            });
    }, []);
    // return neccessary thing
    return [products, setProducts];
};

export default useProduct;