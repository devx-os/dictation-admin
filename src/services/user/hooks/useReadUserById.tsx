import * as React from 'react';
import {useQuery} from "react-query";
import {readUserById} from "../api";

const UseReadUserById = (id = '') => useQuery(['readUserById', {id}], async () => {
    if (!id) return undefined;
    return await readUserById({id})
}, {
    enabled: !!id,
})

export default UseReadUserById;