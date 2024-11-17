import React,{useEffect} from 'react';
import "../pages/dashboard.css"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS for tooltips
import {RiceMeat} from "../data/RiceFood"
import FooterRazim from '../components/FooterRazim';
export default function RiceWithMeat() {
 
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
   <>
    <div className="container ">
     <div className="row row-cols-1 row-cols-md-3 g-4">
   {RiceMeat.map((food,index)=>(
      <div className='col' key={index}>
      <div  className='card h-100 position-relative'>
        <div className="img-container" >
          <img 
          src={food.image}
          alt={food.name}
          className="card-img-top img-fluid"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={food.tiTip}  
          style={{ height: '300px', width: '500px', objectFit: 'cover' }}

          />
                    <div className='gray-bg'>{food.national}</div>
                    <div className='card-body'>
                      <Link to={food.path} className='text-dark text-decoration-none'>
                      <h5 className='card-title fw-normal text-decor'>{food.name}</h5>
                      </Link>
                    </div>
        </div>
      </div>
            </div>
   ))}
    </div>
    </div>
    
        <footer>
        <div className="container">
          <div className="row bg-white">
            <FooterRazim />
          </div>
        </div>
      </footer>
   
   </>
     
  )

}