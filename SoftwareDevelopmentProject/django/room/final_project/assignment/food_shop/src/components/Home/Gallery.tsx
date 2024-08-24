const GalleryComponent = () => {
  return (
    <div className="w-full">
      <p className="mt-10 mb-6 text-center text-[#3a3a3a] text-[30px] font-bold">
        Our Gallery
      </p>
      <div className="flex">
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/home-01.jpg?v=1628143320&width=1500"
          alt=""
        />
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/1.jpg?v=1614335085&width=1500"
          alt=""
        />
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/2.jpg?v=1614335086&width=1500"
          alt=""
        />
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-4.jpg?v=1614334580&width=1500"
          alt=""
        />
      </div>
      <div className="flex">
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-1.jpg?v=1614334580&width=1500"
          alt=""
        />
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-3.jpg?v=1614334580&width=1500"
          alt=""
        />
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-2.jpg?v=1614334580&width=1500"
          alt=""
        />
        <img
          className="p-5 w-1/4"
          src="https://yummi-theme.myshopify.com/cdn/shop/files/gallery-6.jpg?v=1614334580&width=1500"
          alt=""
        />
      </div>
    </div>
  );
};

export default GalleryComponent;
