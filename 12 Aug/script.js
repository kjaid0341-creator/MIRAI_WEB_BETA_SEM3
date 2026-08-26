// // async function dataFetching(){
// //     try{
// //         console.log("welcome");
// //         let url="https://fakestore.com/products";
// //         let response = await fetch(url,{});
// //         console.log(data);
// //         renderdata (data);
// //     }catch (error){
// //         console.log(error);
// //         console.log("thik karo kuch problen h");
// //     }
// //     console.log("transfer");
// // }

// async function dataFetching() {
//     try {
//         console.log("welcome");

//         let url = "https://fakestoreapi.com/products";

//         let response = await fetch(url);

//         let data = await response.json();

//         console.log(data);

//         renderdata(data);

//     } catch (error) {
//         console.log(error);
//         console.log("thik karo kuch problem h");
//     }

//     console.log("transfer");
// }


// function renderdata(data) {

//     let container = document.getElementById("products");

//     container.innerHTML = "";

//     data.forEach(function(product) {

//         let card = document.createElement("div");

//         card.className = "card";

//         card.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">

//             <h2>${product.title}</h2>

//             <p>${product.description}</p>

//             <h3>₹ ${product.price}</h3>

//             <p class="rating">
//                 ⭐ ${product.rating.rate}
//             </p>
//         `;

//         container.appendChild(card);
//     });
// }


// dataFetching();


async function dataFetching() {
    try {
        console.log("welcome");

        let url = "https://fakestoreapi.com/products";

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);

        renderdata(data);

    } catch (error) {
        console.log(error);
        console.log("thik karo kuch problem h");
    }

    console.log("transfer");
}


function renderdata(data) {

    let container = document.getElementById("products");

    container.innerHTML = "";

    data.forEach(function(product) {

        let card = document.createElement("article");

        card.className = "card";

        // Updated HTML structure with '$' dollar sign and matching enhanced UI elements
        card.innerHTML = `
            <div class="card-img-wrapper">
                <span class="rating">★ ${product.rating.rate}</span>
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            
            <div class="card-content">
                <h2>${product.title}</h2>

                <p>${product.description}</p>

                <div class="card-footer">
                    <div class="price-container">
                        <span class="price-label">Price</span>
                        <h3>$ ${product.price}</h3>
                    </div>
                    <button class="btn-add" aria-label="Add to cart">
                        <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}


dataFetching();