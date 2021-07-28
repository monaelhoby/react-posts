 import {db} from './firebase';


 export const addNewProduct = (date,title,content,image,quantity)=>{
    // console.log(quantity)
    db.collection("products").add({
        date,
        title: title,
        content: content,
        image: image,
        quantity: quantity
    })
    .then(() => {
        db.collection("products").get().then(snapshot=>{
            let products = [];
            snapshot.docs.forEach(product=>{
                product.checked = false;
                products.push(product)
            })
            // setProducts([...products]);
            // console.log(products)
        })
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

export const handleEditProduct = (id,date,title,content,image,quantity,setProducts,callback)=> {
    // console.log(id,date,title,content,image,quantity)
    db.collection("products").doc(id).update({
        date,
        title: title,
        content: content,
        image: image,
        quantity: quantity
    }).then(()=>{
        db.collection("products").get()
        .then(snapshot=>{
            // console.log(snapshot.docs[0].data())
            setProducts([...snapshot.docs]);
        })
        callback()
    })
    .catch((err) => {
        console.log(err)
    })
}