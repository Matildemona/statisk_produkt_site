fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  //IMG
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //Titel
  copy.querySelector("h2").textContent = product.productdisplayname;
  //Beskrivelse
  copy.querySelector("p").textContent = product.articletype;
  //PRICE
  copy.querySelector(".price").textContent = product.price;
  //SOLDOUT
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }
  //DISCOUNT
  if (product.discount) {
    copy.querySelector("article").classList.add("discount");
    copy.querySelector(".discountprocent").textContent = product.discount + " %";
    copy.querySelector(".showDiscount").classList.add("discountp");
  }
  //ændre discount text
  //Append til DOM
  document.querySelector("main").appendChild(copy);
}

/*
id:	1163
gender:	"Men"
category:	"Apparel"
subcategory:	"Topwear"
articletype:	"Tshirts"
season:	"Summer"
productionyear:	2011
usagetype:	"Sports"
productdisplayname:	"Sahara Team India Fanwear Round Neck Jersey"
price:	895
discount:	null
brandname:	"Nike"
soldout:	0

<div class="article">
                <a href="product.html">
                    <div>
                        <img src="tshirt.webp" alt="tshirt">
                        <p class="soldouttext"></p>
                        <h2>tshirts</h2>
                        <p>en unik kategori.</p>
                    </div>
                </a>
            </div>
*/
