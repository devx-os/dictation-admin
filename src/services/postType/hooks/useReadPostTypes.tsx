import * as React from 'react';
import {useQuery} from "react-query";
import {readPostTypes} from "../api";

const UseReadPostTypes = () => useQuery('readPostTypes', readPostTypes)

export default UseReadPostTypes;