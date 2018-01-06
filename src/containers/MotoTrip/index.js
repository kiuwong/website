import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header.component';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';

class MotoTrip extends Component {
  render() {
    const { width } = this.props.size;
    return (
      <div>
        <Header />
        <StackGrid
          columnWidth={width <= 800 ? '100%' : '50%'}
          monitorImagesLoaded={true} >
          <div>
            <img src="/images/26.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/1.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/25.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/2.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/3.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/4.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/5.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/6.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/7.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/text2.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/9.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/10.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/11.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/12.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/8.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/13.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/14.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/15.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/16.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/17.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/18.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/19.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/20.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/22.jpg" alt=""/>
          </div>
          <div>
            <img src="/images/23.jpg" alt=""/>
          </div>
          </StackGrid>
          <div>
            <img src="/images/24.jpg" alt=""/>
          </div>

        <div>
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </div>
      </div>
    );
  }
}

export default sizeMe()(MotoTrip);

