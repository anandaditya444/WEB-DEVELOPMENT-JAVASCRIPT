let menu = ["Paneer tikka","Chicken tandoori","momos","egg curry"]

function isveg(item)
{
    if(item.toLowerCase().indexOf("chicken") != -1)
    return false;
    if(item.toLowerCase().indexOf("egg") != -1)
    return false;

    return true;
}

let arrmenu = menu.filter(function(item){
    return isveg(item);
})

console.log(arrmenu)