import React, { Component } from 'react';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <div>
               <nav>
                   <div className="title">
                       <h4>Store</h4>
                   </div>
                   <ul>
                       <li>Home</li>
                       <li>@emil.name</li>
                   </ul>
               </nav>
           </div>
         );
    }
}
 
export default Nav;