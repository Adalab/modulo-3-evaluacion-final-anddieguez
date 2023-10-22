import React from "react";


const FilterYear = ({yearFilter, handleChangeYear, years}) => {

    const handleSelect = (ev) => {
        handleChangeYear(ev.target.value);
    };

const renderYearsOption = () => {
    return years.map((year, index) => <option key={index} value={year}>{year}</option>)
}
   
    

return (
<>
{""}
<label className="form__label" htmlFor="search_year">
    Year:
<select
className="form__input--year"
name="search__year"
id="search__year"
value={yearFilter}
onChange={handleSelect}>

    <option value="">Todos los años</option>
    {renderYearsOption()}
    
</select>



</label>


</>

);

}
export default FilterYear;