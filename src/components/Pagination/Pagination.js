import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Pagination = ({ listPerPage, totalList ,paginate }) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalList / listPerPage);i++){
        pageNumbers.push(i);
    }


    return (
    <>

        <ToggleButtonGroup
            spacing={2} 
            className='btnPag'
            exclusive
            aria-label='select-page'
            >
            {pageNumbers.map(number =>(
                <ToggleButton
                    key={number}
                    onClick={()=>paginate(number)}
                >
                    {number}
                </ToggleButton>
        ))}
        </ToggleButtonGroup>
    </>
  )
}
export default Pagination;

