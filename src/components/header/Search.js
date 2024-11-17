import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Search() {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    if (category === "rice") {
      navigate("/RiceWithMeat");
    } else if (category === "other") {
      navigate("/OtherDishes");
    } else {
if( category === "all") {
    navigate("/")
}
    }
  }
  return (
    <div>
      <form className="d-flex" onSubmit={(e) => e.preventDefault()} 
 >
        <select
        style={{cursor:"pointer"}} 
          className="form-select me-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">همه دسته بندی ها</option>
          <option value="rice">غذاهای پلویی</option>
          <option value="other">سایر غذاها</option>
        </select>
        <button onClick={handleClick} className="btn btn-outline-success" type="button">
          Search
        </button>
      </form>
    </div>
  );
}

