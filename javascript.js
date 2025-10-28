const productGrid = document.querySelector("#displayresult");

async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    productGrid.innerHTML = products
      .map(
        (product) => `
        <div class="shadow-md rounded-2xl bg-blue-100 ">
        <div class="text-center p-5">
        <img src=${product.image} class="w-[200px] h-[180px] mx-auto" alt="no picture">
        <h6 class="font-semibold text-lg mb-2 truncate">${product.title}</h6>
        <p>$ ${product.price}</p>
        <button class= "bg-blue-600 text-white font-semibold text-sm px-4 py-2 hover:shadow-md transition w-fit md:ml-4 rounded-2xl">Add to card</button>
        </div>
        </div>
      `
      )
      .join(" ");
  } catch (error) {
    productGrid.innerHTML = `<p> class="text-center text-red-500">Failed to load products. Please try again.</p>`;
    console.error(error);
  }
}

loadProducts();
