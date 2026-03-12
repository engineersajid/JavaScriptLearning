const storeAPI = async () => {
  const url = "https://fakestoreapi.com/products";

  try {
    const res = await fetch(url);
    const data = await res.json();
    const container = document.getElementById("productInfo");

    container.innerHTML = "";

    data.forEach((product) => {
      const card = document.createElement("div");

      // কার্ডের ছোট সাইজ এবং ডিজাইন
      card.style.cssText = `
                background: white;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 10px;
                text-align: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            `;

      // ইমেজ ছোট করা (১০০ পিক্সেল)
      const img = document.createElement("img");
      img.src = product.image;
      img.style.cssText = "width: 80px; height: 80px; object-fit: contain;";

      // টাইটেল ছোট করা
      const title = document.createElement("h4");
      title.innerText = product.title.slice(0, 50) + "..."; // নাম বেশি বড় হলে কেটে ছোট করা
      title.style.fontSize = "14px";

      const price = document.createElement("p");
      price.innerText = `$${product.price}`;
      price.style.color = "green";
      price.style.fontWeight = "bold";

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);

      container.appendChild(card);
    });
  } catch (e) {
    console.log(e);
  }
};

storeAPI();
