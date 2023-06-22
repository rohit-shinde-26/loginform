import React from 'react'
import '../Componentscss/style.css'
const Shoes = () => {
    let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// menu.onclick =() =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
  return (
    <div>
       <header>
            <div id="menu-bar" class="fa fa-bars"></div>
            {/* <!-- logo --> */}
            <a href="#" class="ADIDAS"><img src="" alt="logo" /></a>
           
            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#product">Product</a>
                <a href="#news">news</a>
            </nav>
            <div class="icons">
                <a href="#"><i class="fa fa-heart"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#"><i class="fa fa-shopping-cart"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#"><i class="fa fa-user"></i></a>
            </div>
        </header>
        {/* <!--end header--> */}
        <section class="home" id="home">
            <div class="slide-container active">
                <div class="slide">
                    <div class="content">
                        <span>ADIDAS MENS SHOES</span>
                        <h3>SLIP-ON CANVAS SHOES </h3>
                        <p>
                            VULC RAID3R LIFESTYLE SKATEBOARDING SLIP-ON CANVAS SHOES
                            MRP in Indian currency:
                            ₹5,599.00 - 
                            ₹3,359.50
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 1.webp" class="shoe"/>
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>ADIDAS MENS SHOES</span>
                        <h3>GALAXY 6 SHOES</h3>
                        <p>
                            VULC RAID3R LIFESTYLE SKATEBOARDING SLIP-ON CANVAS SHOES
                            MRP in Indian currency:
                            ₹5,599.00 -
                            ₹3,359.50
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 2.webp" class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>ADIDAS MENS SHOES</span>
                        <h3>RUNCRYPT M SHOES</h3>
                        <p>
                            RUNCRYPT M
                            MRP in Indian currency:
                            ₹4,999.00 -
                            ₹3,499.50
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 3.jpeg" class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>ADIDAS MENS SHOES</span>
                        <h3>RUNFALCON 3.0 SHOES</h3>
                        <p>
                            RUNFALCON 3.0 SHOES
                            MRP in Indian currency:
                            ₹5,999.00
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src=""class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>PUMA MENS SHOES</span>
                        <h3>Explore NITRO Mid Men's Hiking Shoes</h3>
                        <p>
                            RUNFALCON 3.0 SHOES
                            MRP in Indian currency:
                            ₹5,999.00
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 5.avif" class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>PUMA MENS SHOES</span>
                        <h3>Explore NITRO Mid Men's Hiking Shoes</h3>
                        <p>
                            RUNFALCON 3.0 SHOES
                            MRP in Indian currency:
                            ₹5,999.00
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 6.webp" class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>PUMA MENS SHOES</span>
                        <h3>Deviate NITRO 2 Men's Running Shoes</h3>
                        <p>
                            RUNFALCON 3.0 SHOES
                            MRP in Indian currency:
                            ₹5,999.00
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 7.webp" class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>PUMA MENS SHOES</span>
                        <h3>Voyage NITRO 2 GORE-TEX® Men's Running Shoes</h3>
                        <p>
                            RUNFALCON 3.0 SHOES
                            MRP in Indian currency:
                            ₹5,999.00
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 8.jpeg" class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>AIR JORDAN SHOES</span>
                        <h3>Air Jordan 1 Low SE</h3>
                        <p>
                            RUNFALCON 3.0 SHOES
                            MRP in Indian currency:
                            ₹5,999.00
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 9.webp" class="shoe" />
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>AIR JORDAN SHOES</span>
                        <h3>Air Jordan 1 Mid</h3>
                        <p>
                            RUNFALCON 3.0 SHOES
                            MRP in Indian currency:
                            ₹5,999.00
                            per pair
                            (Inclusive of all taxes)
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="slide/img 10.avif" class="shoe" />
                    </div>
                </div>
            </div>
           
            <div id="prev" class="fa fa-angle-left" onclick="prev();"></div>
            <div id="next" class="fa fa-angle-right" onclick="next();"></div>
        </section>
        {/* <!--end home--> */}
        <section class="product" id="product">
            <h1 class="heading">latest <span>Products</span></h1>
            <div class="box-container">
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="images/product 4/img 1.png" alt="" />
                        <h3>NMD_V3 SHOES</h3>
                        <div class="price">₹2,459.00<span> ₹4,299.00 </span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="images/product 4/img 2.png" alt="" />
                        <h3>SOLDERRUN M</h3>
                        <div class="price">₹4,199.50<span>₹5,999.00</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="images/product 4/img 3.png" alt="" />
                        <h3>RUNFALCON 3.0 SHOES</h3>
                        <div class="price"> ₹4,619.50 <span>₹6,599.00</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="images/product 4/img 4.png" alt="" />
                        <h3>NUBUCK SHOES</h3>
                        <div class="price">  ₹2,999.50<span>₹4,999.00</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="images/product 4/img 5.png" alt="" />
                        <h3>RESILO M</h3>
                        <div class="price"> ₹4,199.50<span>₹5,999.00</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="images/product 4/img 6.png" alt="" />
                        <h3>SEIZE THE STREET M</h3>
                        <div class="price"> ₹4,199.50 <span>₹5,999.00</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--end product--> */}
        <section class="featured" id="fearured">
            <h1 class="heading">New <span>Product</span></h1>
            <div class="row">
                <div class="image-container">
                    <div class="small-image">
                        <img src="images/product 1/img 1.webp" alt="" class="featured-image-1" />
                        <img src="images/product 1/img 2.webp" alt="" class="featured-image-1" />
                        <img src="images/product 1/img 3.webp" alt="" class="featured-image-1" />
                        <img src="images/product 1/img 4.webp" alt="" class="featured-image-1" />
                    </div>
                    <div class="big-image">
                        <img src="images/product 1/img 1.webp" alt="" class="big-image-1" />
                    </div>
                </div>
                <div class="content">
                    <h3>OZWEEGO SHOES</h3>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p>
                        
                    </p>
                    <div class="price">₹10,999.00<span></span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
            <div class="row">
                <div class="image-container">
                    <div class="small-image">
                        <img src="images/product 2/img 1.webp" alt="" class="featured-image-2" />
                        <img src="images/product 2/img 2.webp" alt="" class="featured-image-2" />
                        <img src="images/product 2/img 3.webp" alt="" class="featured-image-2" />
                        <img src="images/product 2/img 4.webp" alt="" class="featured-image-2" />
                    </div>
                    <div class="big-image">
                        <img src="images/product 2/img 1.webp" alt="" class="big-image-2" />
                    </div>
                </div>
                <div class="content">
                    <h3>OWNTHEGAME SHOES</h3>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p>
                        
                    </p>
                    <div class="price">₹6,999.00<span></span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
            <div class="row">
                <div class="image-container">
                    <div class="small-image">
                        <img src="images/product 3/img 1.webp" alt="" class="featured-image-3" />
                        <img src="images/product 3/img 2.webp" alt="" class="featured-image-3" />
                        <img src="images/product 3/img 3.webp" alt="" class="featured-image-3" />
                        <img src="images/product 3/img 4.webp" alt="" class="featured-image-3" />
                    </div>
                    <div class="big-image">
                        <img src="images/product 3/img 1.webp" alt="" class="big-image-3" />
                    </div>
                </div>
                <div class="content">
                    <h3>SOLDERRUN M
                    </h3>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p>
                        
                    </p>
                    <div class="price">₹4,199.50 <span></span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Shoes;
