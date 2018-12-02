
$(function () {
    
    let productname = $('#productname')
    let productmanufacturer = $('#productmanufacturer')
    let productprice = $('#productprice')

    $('#btnproductadd').click(function (){

        addproduct(
            productname.val(),
            productmanufacturer.val(),
            productprice.val(),
            function(addedproduct){
                window.alert("Added " + addedproduct.name + " to database.")
            }
        )

    })
    
})