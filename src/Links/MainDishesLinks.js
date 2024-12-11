import { Link } from "react-router-dom"
import "../components/other/CardListFood.css"
export default function MainDishesLinks() {
  const MainLink =[
    { to: "/RiceFood1", name: "پسته پلو" },
    { to: "/RiceFood2", name: " جوجه رستورانی" },
    { to: "/RiceFood3", name: "ته چین و برنج فالبی" },
    { to: "/RiceFood4", name: "ماهی سرخ شده رستورانی" },
    { to: "/RiceFood5", name: "دم پختک دمی باقالی اصفهانی" },
    { to: "/RiceFood6", name: "میگو سرخ شده" },
  ]
    return (
      <div className="card-text">
       
            <span className="text-end d-flex">لیست انواع پلوها</span> 
            <ul>
             
              {MainLink.map((item, index) => (
                <li className="text-end list-unstyled" key={index}>
                  <Link to={item.to} className="no-decoration">
                    <span className="rice-size" data-bs-toggle="tooltip" data-bs-placement="bottom" title={item.name}>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
      </div>
    );
  }

