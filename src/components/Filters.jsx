import React from "react";
import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

const Filters = ({ nameFilter, handleChange, yearFilter, handleChangeYear, years }) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

   
    

return (
<>
<form className="filters" onSubmit={handleSubmit}>
<h3 className="filter__title">Busca la película</h3>
<FilterName nameFilter={nameFilter} handleChange={handleChange}/>
<h3 className="filter__year">Año de la película</h3>
<FilterYear yearFilter={yearFilter} handleChangeYear={handleChangeYear} years={years} />
</form>

</>

);

}
export default Filters;