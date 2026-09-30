

import { Component } from "react";
import "./style.css"
export default class Moviecard extends Component {
   
  render() {
    const {title,plot,poster,price,rating,stars,fav,cart} = this.props.movies
    const {movies,addStars,handlefav,hadleAddToCart,decStars} = this.props
    // console.log(this.props)
    // const {movies:data} = this.props
    //   const {title,plot,price,rating,stars,fav,cart} = data
    //   console.log(data)
    return (
      <div className="main">
          <div className="movie-card">
            <div className="left">
                        <img alt="poster" src={poster}/>
                    </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs {price}</div>

              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                    <img className="str-btn" 
                                    alt="Decrease" 
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                    onClick={()=>{decStars(movies)}}
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    onClick={()=>{addStars(movies)}}
                                />

                                <span className="starCount">{stars}</span>
                </div>
                {/* {fav ?  <div className="unfavourite-btn" onClick={this.handlefav}>Un-Favourite</div>:<div className="favourite-btn" onClick={this.handlefav}>Favourite</div>} */}
                 <div onClick={()=>{handlefav(movies)}} className={fav ? "favourite-btn":"unfavourite-btn"}>{fav ? "Favourite":"Un-Favourite"}</div>

                 {/* <div className="unfavourite-btn">Un-Favourite</div> */}
                  
                  <div onClick={()=>{hadleAddToCart(movies)}} className={cart ? "cart-btn":"remove-cart"}>{cart ? "Add to Cart":"Remove to Cart"}</div>
                 {/* {cart ?  <div onClick={this.hadleAddToCart} className="cart-btn">Add to cart</div> :<div            className="remove-cart"  onClick={this.hadleAddToCart}>Remove to Cart</div>} */}
                 
                 
              </div>

            </div>
          </div>
        </div>
    );
  }
}
