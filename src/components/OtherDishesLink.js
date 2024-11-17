import { Link } from "react-router-dom"
import '../../src/pages/CardListFood.css'

export default function OtherDishesLinks(){
const DishesLink = [
    {to:"/Recipe1",name:"یتیمچه"},
    {to:"/Recipe2",name:"مرغ تنوری"},
    {to:"/Recipe3",name:"پیتزا تابه ای"},
    {to:"/Recipe4",name:"خوراک بادمجان"},
    {to:"/Recipe5",name:"بادمجان تابه ای"},
    {to:"/Recipe5",name:"دو پیازه آلو شیرازی"},
    {to:"/Recipe6",name:"سالاد گرم اسفناج"},
    {to:"/Recipe7",name:"اسکالوپ مرغ"},
    {to:"/Recipe8",name:"پولانی افغان"}
]
    return(
    <div className="card-text">
        
                <span className="text-end d-flex">لیست سایر غذاها</span>
                   <ul>
                {DishesLink.map((item,index)=>(
                <li className="text-end list-unstyled" key={index}>
                        <Link className="no-decoration" to={item.to}>
                        <span className="rice-size" data-bs-toggle="tooltip" data-bs-placement="bottom" title={item.name}>{item.name}</span></Link>
                        </li>
                ))}    
                
                    </ul>            

    
    </div>
)
}

