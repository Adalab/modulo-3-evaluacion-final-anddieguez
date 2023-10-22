import React from "react";


const FilterName = ({nameFilter, handleChange}) => {

    const HandleInput = (ev) => {
        handleChange(ev.target.value)
    }
   
    

return (
<>
<label className="form__label" htmlFor="search_name">
    Nombre:
<input
className="form__label__input"
type="text"
name="search_name"
id="search_name" 
placeholder="Buscar por título..."
value={nameFilter}
onChange={HandleInput}
/>
</label>



</>

);

}
export default FilterName;