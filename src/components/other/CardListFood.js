import "../../components/other/CardListFood.css"
import MainDishesLinks from "../../Links/MainDishesLinks"
import OtherDishesLinks from "../../Links/OtherDishesLink"
export default function CardListFood(){

    return(
    <div className="text-end d-flex">
        
               <div>
               <MainDishesLinks/>
               <OtherDishesLinks/>
               </div>
               

    
    </div>
)
}



