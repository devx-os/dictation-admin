import React from 'react';
import {Select} from "../Form";
import {PostStatus} from "../../types";

type EditStateCellProps = {
    value: string,
    onEditState: () => void
}
const EditStateCell = ({value, onEditState}: EditStateCellProps) => {
    return (
        <div className='flex'>
            <Select placeholder='Status' value={value} onChange={onEditState} options={Object.values(PostStatus)} />
        </div>
    );
};

export default EditStateCell;