let count = document.getElementById("count")
function desc() {
    if(count.value <=1) {
        count.value =1
    } else {
        count.value --
    }
}
function add() {
    count.value ++
}
