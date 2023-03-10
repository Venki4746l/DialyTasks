import React from "react";
const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
];

const foodapi = {
  items: [
    {
      category: "Pizza",
      id: "19-Q9JSH3ZvC40lOlUttxf4wtPVm9ctIU",
      name: "American Cheesy Pizza",
      prize: 300,
      url:
        "http://docs.google.com/uc?export=open&id=19-Q9JSH3ZvC40lOlUttxf4wtPVm9ctIU",
    },
    {
      category: "Pizza",
      id: "1QB2q13sop1x86CbOf5c5NBY0geWhk2hZ",
      name: "Bacon Pizza",
      prize: 450,
      url:
        "http://docs.google.com/uc?export=open&id=1QB2q13sop1x86CbOf5c5NBY0geWhk2hZ",
    },
    {
      category: "Pizza",
      id: "1ARbwqW_uOLb4eCeWsyCJVZSYUIreXsrD",
      name: "Double Cheese Pizza",
      prize: 500,
      url:
        "http://docs.google.com/uc?export=open&id=1ARbwqW_uOLb4eCeWsyCJVZSYUIreXsrD",
    },
    {
      category: "Pizza",
      id: "1a5kM2bkvvvG9x12V_KkuZ1HRor2xgU20",
      name: "Italian Cheesy Pizza",
      prize: 450,
      url:
        "http://docs.google.com/uc?export=open&id=1a5kM2bkvvvG9x12V_KkuZ1HRor2xgU20",
    },
    {
      category: "Pizza",
      id: "12fiRkYTdFZWr3qaczRBUu-c6ciQ1FY2V",
      name: "Keema Pizza",
      prize: 350,
      url:
        "http://docs.google.com/uc?export=open&id=12fiRkYTdFZWr3qaczRBUu-c6ciQ1FY2V",
    },
    {
      category: "Pizza",
      id: "1RtJQB2pxhHWFGSH2vdOJxgSI4b1vEdTm",
      name: "Non Veg Pizza",
      prize: 500,
      url:
        "http://docs.google.com/uc?export=open&id=1RtJQB2pxhHWFGSH2vdOJxgSI4b1vEdTm",
    },
    {
      category: "Pizza",
      id: "1gWKqlaXkO7h-w3--WygpgUPy28a21QHp",
      name: "Olives Pizza",
      prize: 200,
      url:
        "http://docs.google.com/uc?export=open&id=1gWKqlaXkO7h-w3--WygpgUPy28a21QHp",
    },
    {
      category: "Pizza",
      id: "1hUGxEC95jEwnlXVh08isFuoxivT5-HwB",
      name: "Onion Pizza",
      prize: 250,
      url:
        "http://docs.google.com/uc?export=open&id=1hUGxEC95jEwnlXVh08isFuoxivT5-HwB",
    },
    {
      category: "Pizza",
      id: "1u8NjRiICc3J4U9WBgarM7gFvkyTEOtz-",
      name: "Oven Pizza",
      prize: 300,
      url:
        "http://docs.google.com/uc?export=open&id=1u8NjRiICc3J4U9WBgarM7gFvkyTEOtz-",
    },
    {
      category: "Pizza",
      id: "1RQ1mCBZPYA486Oox1wjIAKDoW-JlBNdp",
      name: "Tomato Pizza",
      prize: 350,
      url:
        "http://docs.google.com/uc?export=open&id=1RQ1mCBZPYA486Oox1wjIAKDoW-JlBNdp",
    },
    {
      category: "Pizza",
      id: "1w-VuYFP68NaI3QTUic3teSxSA1e90QYT",
      name: "Veg Pizza",
      prize: 240,
      url:
        "http://docs.google.com/uc?export=open&id=1w-VuYFP68NaI3QTUic3teSxSA1e90QYT",
    },
    {
      category: "Pizza",
      id: "1q6JXHunKjE6ew0WSPRZ0wnCGqxkpoTjX",
      name: "Italian Pizza",
      prize: 380,
      url:
        "http://docs.google.com/uc?export=open&id=1q6JXHunKjE6ew0WSPRZ0wnCGqxkpoTjX",
    },
    {
      category: "Rice Items",
      id: "1hshLhPmvU8MGU0dJL3QAD9sfwLfrZudE",
      name: "Camel Meat Biriyani",
      prize: 250,
      url:
        "http://docs.google.com/uc?export=open&id=1hshLhPmvU8MGU0dJL3QAD9sfwLfrZudE",
    },
    {
      category: "Rice Items",
      id: "1DcmVft5AozS0TCCKyige1j4RVTiycfRB",
      name: "Chicken Biriyani",
      prize: 300,
      url:
        "http://docs.google.com/uc?export=open&id=1DcmVft5AozS0TCCKyige1j4RVTiycfRB",
    },
    {
      category: "Rice Items",
      id: "1JKKnUJ50gFHESkLl_1uvYzNq0U7lliVc",
      name: "Veg Biriyani",
      prize: 220,
      url:
        "http://docs.google.com/uc?export=open&id=1JKKnUJ50gFHESkLl_1uvYzNq0U7lliVc",
    },
    {
      category: "Rice Items",
      id: "1whqo8bnsDFZlQgeE8dLckVH-q1CvDQmJ",
      name: "Dum Biriyani",
      prize: 320,
      url:
        "http://docs.google.com/uc?export=open&id=1whqo8bnsDFZlQgeE8dLckVH-q1CvDQmJ",
    },
    {
      category: "Rice Items",
      id: "1TMqorI3sEtWu8tGnR92fbj2HMbqFghqG",
      name: "Egg Biriyani",
      prize: 240,
      url:
        "http://docs.google.com/uc?export=open&id=1TMqorI3sEtWu8tGnR92fbj2HMbqFghqG",
    },
    {
      category: "Rice Items",
      id: "1mc2F0bagZxRuTFGAzZ934Vs4IUT3tf8-",
      name: "Fried Rice",
      prize: 260,
      url:
        "http://docs.google.com/uc?export=open&id=1mc2F0bagZxRuTFGAzZ934Vs4IUT3tf8-",
    },
    {
      category: "Rice Items",
      id: "1PkbIazPAZNcYBicZoIg808Mz6Q4Ff1zQ",
      name: "Full Meals",
      prize: 180,
      url:
        "http://docs.google.com/uc?export=open&id=1PkbIazPAZNcYBicZoIg808Mz6Q4Ff1zQ",
    },
    {
      category: "Rice Items",
      id: "1SGTRIPCFs2S5DDa5EX6I8ck8J5FkOZJa",
      name: "Grilled Chicken Biriyani",
      prize: 350,
      url:
        "http://docs.google.com/uc?export=open&id=1SGTRIPCFs2S5DDa5EX6I8ck8J5FkOZJa",
    },
    {
      category: "Rice Items",
      id: "1y_V1D-n5ifzBodqUwL3cMn6wnBHW0HfF",
      name: "Cuisine Biriyani Dish",
      prize: 320,
      url:
        "http://docs.google.com/uc?export=open&id=1y_V1D-n5ifzBodqUwL3cMn6wnBHW0HfF",
    },
    {
      category: "Cold Drinks",
      id: "1zTPFO3DVl96hq-AtLAvUAI8GV4cMmOR3",
      name: "Cold Coffee",
      prize: 50,
      url:
        "http://docs.google.com/uc?export=open&id=1zTPFO3DVl96hq-AtLAvUAI8GV4cMmOR3",
    },
    {
      category: "Cold Drinks",
      id: "1iInoRGdGPefRrsZQMbeHF0KkuPmU01Yu",
      name: "Strawberry Milk Shake",
      prize: 80,
      url:
        "http://docs.google.com/uc?export=open&id=1iInoRGdGPefRrsZQMbeHF0KkuPmU01Yu",
    },
    {
      category: "Cold Drinks",
      id: "1BlPB70Cma4KtUDfAqQq90AlElD9-29MR",
      name: "Cherry Milk Shake",
      prize: 90,
      url:
        "http://docs.google.com/uc?export=open&id=1BlPB70Cma4KtUDfAqQq90AlElD9-29MR",
    },
    {
      category: "Cold Drinks",
      id: "13KuZtpbCinD8R41biG6psQJSSQ5u9Ej2",
      name: "Cold Hazelnut",
      prize: 110,
      url:
        "http://docs.google.com/uc?export=open&id=13KuZtpbCinD8R41biG6psQJSSQ5u9Ej2",
    },
    {
      category: "Cold Drinks",
      id: "12nNcmfmX8C9Mca_CWoMsBmNPbA6Msqnf",
      name: "Cold Chocolate",
      prize: 100,
      url:
        "http://docs.google.com/uc?export=open&id=12nNcmfmX8C9Mca_CWoMsBmNPbA6Msqnf",
    },
    {
      category: "Cold Drinks",
      id: "1-Xl7Ilzrw3egBF2cl4rbqo6YhPoOngy4",
      name: "Raspberry Milk Shake",
      prize: 90,
      url:
        "http://docs.google.com/uc?export=open&id=1-Xl7Ilzrw3egBF2cl4rbqo6YhPoOngy4",
    },
    {
      category: "Cold Drinks",
      id: "1N3PflFuRAf5Wt5wXvcmK0Mq4DEfwOABc",
      name: "Fruit Milk Shake",
      prize: 80,
      url:
        "http://docs.google.com/uc?export=open&id=1N3PflFuRAf5Wt5wXvcmK0Mq4DEfwOABc",
    },
    {
      category: "Cold Drinks",
      id: "115Mtm-zHd3mE6g33VBO9GztfBLiv2geO",
      name: "Milk Shake Combo",
      prize: 150,
      url:
        "http://docs.google.com/uc?export=open&id=115Mtm-zHd3mE6g33VBO9GztfBLiv2geO",
    },
    {
      category: "Cold Drinks",
      id: "1RfcdvzvCIbaOglZPPp4oZanMC6Jdgk-x",
      name: "Strawberry Cappuccino",
      prize: 100,
      url:
        "http://docs.google.com/uc?export=open&id=1RfcdvzvCIbaOglZPPp4oZanMC6Jdgk-x",
    },
    {
      category: "Hot Drinks",
      id: "11OcppqrIJ2bn2P_akQdl2-cwCNxAo1eR",
      name: "Black Coffee",
      prize: 30,
      url:
        "http://docs.google.com/uc?export=open&id=11OcppqrIJ2bn2P_akQdl2-cwCNxAo1eR",
    },
    {
      category: "Hot Drinks",
      id: "1Fnk8IeV9ecicqvIhsRBYiK3zY3glCl8b",
      name: "Hot Tea",
      prize: 40,
      url:
        "http://docs.google.com/uc?export=open&id=1Fnk8IeV9ecicqvIhsRBYiK3zY3glCl8b",
    },
    {
      category: "Hot Drinks",
      id: "1Nv9RfgoQrSwEgAdFwIBSxj9wSEh4oCtT",
      name: "Hot Coffee",
      prize: 40,
      url:
        "http://docs.google.com/uc?export=open&id=1Nv9RfgoQrSwEgAdFwIBSxj9wSEh4oCtT",
    },
    {
      category: "Hot Drinks",
      id: "1ipTABJXebiFAgfDYDZjYBSAGXygSF-pO",
      name: "Hot Cappuccino",
      prize: 80,
      url:
        "http://docs.google.com/uc?export=open&id=1ipTABJXebiFAgfDYDZjYBSAGXygSF-pO",
    },
    {
      category: "Hot Drinks",
      id: "1Oo5yON_Rhv3c6Tc4WgycB3IYZgRvVdTJ",
      name: "Hot Chocolate",
      prize: 90,
      url:
        "http://docs.google.com/uc?export=open&id=1Oo5yON_Rhv3c6Tc4WgycB3IYZgRvVdTJ",
    },
    {
      category: "Hot Drinks",
      id: "1eYIOFAdSpIvTwXULXR7j-Ivw7uZ6U_dI",
      name: "Hot Hazelnut",
      prize: 100,
      url:
        "http://docs.google.com/uc?export=open&id=1eYIOFAdSpIvTwXULXR7j-Ivw7uZ6U_dI",
    },
  ],
};

const Krupa = () => {
  return <div></div>;
};

export default Krupa;
