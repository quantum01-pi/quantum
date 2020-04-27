import React, {useState } from 'react';
import '../Search/styles.css';

import {
    Input,
    InputGroupText,
    InputGroup,
} from "reactstrap";

const Search = (props) => {
    const [value, setValue] = useState('');
    const {maxLength} = props;

    const updateValue = (event) => {
        const value = event.target.value;
        setValue(value);
        props.onChange(value);
    };

    return(
        <>
            <InputGroup className="search">
                <InputGroupText>
                    <Input className="search__input"
                        autoFocus
                        placeholder="Pesquisar..."
                        type="text"
                        maxLength={maxLength}
                        value={value}
                        onChange={updateValue} />
                    
                    <i className=""/>
                </InputGroupText>
            </InputGroup>
        </>
    )
}

export default Search;