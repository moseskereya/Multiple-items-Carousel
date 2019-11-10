import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            price1:"$450",
            price2:"$40",
            price3:"$20",
            price4:"$110",
            price5:"$201",
            price6:"$500",
            price7:"$20",
            price8:"$110",
            price9:"$201",
            price10:"$500",
            price11:"$201",
            price12:"$500",
            show:false
         }
    }
    showDetails = () =>{
        this.setState({
            show:!this.state.show
        })
    }
    render() { 
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };
        
        return (
            <div>
                <Carousel responsive={responsive}>
                    <div className="container2">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Mackbook Pro</div>
                       <div>
                            <p className="price">{this.state.price1}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div> 
                    <div className="container1">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/614077/pexels-photo-614077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="alt-name"/> 
                       </div>
                         <div>Camera</div>
                       <div>
                            <p className="price">{this.state.price5}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container3">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Surveilence Camera</div>
                       <div>
                            <p className="price">{this.state.price6}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container4">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>CupCake icecreem</div>
                       <div>
                            <p className="price">{this.state.price2}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container5">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/2424/food-restaurant-summer-nuts.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Icecreem</div>
                       <div>
                            <p className="price">{this.state.price3}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container6">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Iphone Pro</div>
                       <div>
                            <p className="price">{this.state.price1}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container7">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Sumsung phones</div>
                       <div>
                            <p className="price">{this.state.price10}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container8">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/1477851/pexels-photo-1477851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Coffee</div>
                       <div>
                            <p className="price">{this.state.price2}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container9">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Private office</div>
                       <div>
                            <p className="price">{this.state.price6}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container10">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Milk</div>
                       <div>
                            <p className="price">{this.state.price2}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/266840/pexels-photo-266840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Shoes</div>
                       <div>
                            <p className="price">{this.state.price2}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                    <div className="container">
                       <div className="photo">
                           <img src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mackbook-pro"/>
                       </div>
                         <div>Mackbook Pro Desktop</div>
                       <div>
                            <p className="price">{this.state.price1}</p>
                            <button onClick={this.showDetails} className="details">details</button>
                            {this.state.show && <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            }
                       </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}
 
export default App1;