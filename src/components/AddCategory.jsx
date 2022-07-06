import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }
    
    const onSubmit =(event)=>{
        event.preventDefault();
        const newInputValue = inputValue.trim().toLowerCase();
        if (newInputValue.length <= 1) {
            return;
        }
        onNewCategory(newInputValue);
        setInputValue('');
        /* setCategories( categories => [inputValue,...categories]); */
    }
  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Bucar gif"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>   
  )
}
