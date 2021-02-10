import React, { useState, createRef } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './Dropdown.css';

const Dropdown = ({ options }) => {
    const [selectedList,setSelectedList]=useState([])
    const multiselectRef = createRef();
    const onSlectedItem = (selectedList, selectedItem) => {
        selectedItem.name === 'all'? setSelectedList([{id:0,name:'all'}]) : setSelectedList(selectedList.filter((item)=>item.id !==0))
    }
    const onRemoveItem = (selectedList, selectedItem) => {
        selectedItem.name === 'all' && setSelectedList(selectedList);
    }
    return (
        <Multiselect
            ref={multiselectRef}
            options={options}
            displayValue="name"
            selectedValues={selectedList}
            showCheckbox={true}
            closeOnSelect={false}
            showArrow={false}
            onSelect={(selectedList, selectedItem) => onSlectedItem(selectedList, selectedItem)}
            onRemove={(selectedList, selectedItem) => onRemoveItem(selectedList, selectedItem)}
        />
    )
}

export default Dropdown;