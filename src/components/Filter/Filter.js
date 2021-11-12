import React from 'react';
import { FilteredName, FilteredInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <FilteredName>
          Find contacts by name
          <FilteredInput
            type="text"
            name="filter"
            value={filter}
            onChange={e => dispatch(filterContact(e.target.value))}
          />
        </FilteredName>
      </form>
    </>
  );
}

export default Filter;
