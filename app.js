class ProductManager{

    constructor(){
        this.products = [];
    };

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock){
        for (let index = 0; index < this.products.length; index++) {
            if (this.products[index].code === code) {
                console.log(`El código ${code} está repetido`);
                break
            };
        };

        const newProduct  = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++;
            this.products.push({
                ... newProduct,
                id: ProductManager.id
            });
        }else{
            console.log('Todos los campos son requeridos');
        };
    };

    getProduct(){
        return this.products;
    };

    getProductById(id){
        if(!this.products.find((product)=> product.id === id)){
            console.log('Not found');
        }else{
            console.log(this.products.find((product)=> product.id === id));
        };
    };

};

const guns = new ProductManager();

//First Call -- empty array
console.log(guns.getProduct());

guns.addProduct('Pistola', 'Bersa cal. 9mm', 345000, 'https://www.armeriacanigo.com.ar/wp-content/uploads/2160_1.jpg', 'AAA001', 4);
guns.addProduct('Revolver', 'Taurus cal. 38', 238000, 'https://www.armeriacanigo.com.ar/wp-content/uploads/5115_1.jpg', 'AAA002', 2);
guns.addProduct('Escopeta', 'Akkar cal 12/70', 418000, 'https://www.armeriacanigo.com.ar/wp-content/uploads/5722_2.jpg', 'AAA003', 1);


//Second Call -- add guns
console.log(guns.getProduct());

//Test repeated code  
guns.addProduct('Escopeta', 'Akkar cal 12/70', 418000, 'https://www.armeriacanigo.com.ar/wp-content/uploads/5722_2.jpg', 'AAA003', 1);


//ID Not found
guns.getProductById(6);

//ID found
guns.getProductById(2);


