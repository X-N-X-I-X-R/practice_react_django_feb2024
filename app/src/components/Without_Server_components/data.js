
const products = [
    { id : 1 ,price: 100, name: 'Shoes', description: 'Running shoes.' },
    { id : 2 ,price: 150, name: 'Shirt', description: 'Cotton shirt.'},
    { id : 3 ,price: 200, name: 'Pants', description: 'Khaki pants.'},
    { id : 4 ,price: 250, name: 'Jacket', description: 'Leather jacket.'},
    { id : 5 ,price: 300, name: 'Socks', description: 'Woolen socks.'}
];

export const getAllProducts =()=>{
    return products;

}

export const getProductById = (id) => {
    return products.filter(product => product.id === id);
}