


$(function (){
    let productlist = $('#product-list')

    fetchproducts(function (products){
        productlist.empty()
        for(product of products){
            productlist.append(createproductcard(product))
        }
    })
})