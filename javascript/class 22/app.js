var arr = [
    {
        p_id: "01",
        p_name: "iphone 14",
        p_color: "black",
        p_price: 200000,
        p_img: "https://zmobiles.pk/wp-content/uploads/2025/12/Iphone-18-pro-max.jpg"
    },
    {
        p_id: "02",
        p_name: "iphone 17",
        p_color: "orange",
        p_price: 600000,
        p_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-1EWydQF8PbjsRYFykFzSaZRDjyK8pEPEA&s"
    },
    {
        p_id: "03",
        p_name: "iphone 13",
        p_color: "grey",
        p_price: 150000,
        p_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJZ2vQdaCF7SKRYZvl2e2YtPqPVud2DehBg&s"
    }
]

var getProducts = document.querySelector("#products")

for (var i = 0; i < arr.length; i++) {
    getProducts.innerHTML += `<div class='card'>
    <img src=${arr[i].p_img} >
    <p>${arr[i].p_id}</p>
    <p>${arr[i].p_name}</p>
    <p>${arr[i].p_color}</p>
    <p>${arr[i].p_price}</p>
    </div>`
}