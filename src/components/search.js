import React from 'react';
import { Input, Divider } from 'antd';

const Search = ({ setSearchValue, searchValue }) => {
  const onSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return <>
  <Divider>Search</Divider>
  <label>Search</label>
  <Input value={searchValue} type="text" onChange={onSearchChange} />
</>
}

export default Search;