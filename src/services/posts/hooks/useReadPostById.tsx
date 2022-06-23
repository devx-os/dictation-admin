import * as React from 'react';
import {useQuery} from "react-query";
import {readPostById} from "../api";
import {ReadPostByIdQParams} from "../types";

const UseReadPostById = (id: ReadPostByIdQParams) => useQuery(['readPostById', {id}], async () => await readPostById(id))

export default UseReadPostById;