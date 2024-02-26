import React, { useContext } from "react";
import { myContext } from "../App";

const ContextAPI = () => {
  const [data, setData] = useContext(myContext);
  const totalPrice = data.reduce((total, data) => total + data.price * (data.quantity || 1), 0);
  const totalQuantity = data.reduce((total, data)=>total + (data.quantity || 1),0);
  const handleIncrerase = (id, quantity) => {
    setData(preData => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: (item.quantity + 1 || quantity + 1) };
        }
        return item
      })
    })
  }
  const handleDecrerase = (id, quantity) => {
     setData((preData) => {
       return preData.map((item) => {
         if (item.id === id && (item.quantity || quantity) > 0) {
           return {...item, quantity: (item.quantity - 1 || quantity - 1) };
         }
         return item;
       });
     });
     
   };
  return (
    <div>
      <h1> Total Quantity:{totalQuantity}</h1>
      <h1> Total Price:{totalPrice}</h1>
      {data.map((item, index) => {
        // if (index >= 1) {
          return (
            
              <div key={index}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div id={"carouselExample"+item.id} class="carousel slide">
                        <div class="carousel-inner">
                          {item.images.map((image, index) => {
                            // console.log(image);

                            return (
                              
                                <div key={item.images+index}>
                                  <div class="carousel-item active">
                                    <img
                                      src={image}
                                      class="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              
                            );
                          })}
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                        data-bs-target={"#carouselExample" + item.id}
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                        data-bs-target={"#carouselExample" + item.id}
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3 className="card-text"> {item.title}</h3>
                        <h5 className="card-title">id: {item.id}</h5>
                        <p className="card-text">
                          Descrption: {item.description}
                        </p>
                        <p class="card-text">Rs: {item.price}</p>
                        <p class="card-text">
                          Discount: {item.discountPercentage}
                        </p>

                        <p class="card-text">rating: {item.rating}</p>
                        <p class="card-text">stock: {item.stock}</p>
                        <p class="card-text">Brand: {item.brand}</p>
                        <p class="card-text">Category: {item.category}</p>
                        <p class="card-text">Thumbnail: {item.thumbnail}</p>
                        <div>
                        <button onClick={() => handleIncrerase(item.id, item.quantity || 1)}> + </button> 
                          <button onClick={() => handleDecrerase(item.id, item.quantity || 1)}> - </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          );
        
      })}
    </div>
  );
};

export default ContextAPI;
