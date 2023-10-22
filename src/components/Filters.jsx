import React from "react";
import FilterName from "./FilterName";
import FilterYear from "./FilterYear";

const Filters = ({ nameFilter, handleChange }) => {

   
    

return (
<>
<form className="filters">
<h3 className="filter__title">Busca la película</h3>
<FilterName nameFilter={nameFilter} handleChange={handleChange}/>
<h3 className="filter__year">Año</h3>
<FilterYear></FilterYear>
</form>

</>

);

}
export default Filters;