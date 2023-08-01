import React, {useState} from 'react'

export const Dropdown = ({ order, handleSelection }) => {
    const [selectedOption, setSelectedOption] = useState(''); // 'selectedOption' is dependent on the state of the dropdown

    function handleDropdownChange(event){
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        handleSelection(order, selectedValue); // Passing 'order' & 'selectedValue' as props
    }

    return (
        <select name = 'option' onChange={handleDropdownChange}>
            <option value="Select">Select...</option>
            <option value="Uber">Uber</option>
            <option value="Bliss">Bliss</option>
            <option value="Monday">Monday</option>
        </select>
     );
};