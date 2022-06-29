import * as React from 'react';
import {useQuery} from "react-query";
import {readPosts} from "../api";
import {ReadPostsFilters} from "../types";

const UseReadPosts = (filters: ReadPostsFilters = {}) => useQuery(['readPosts', {filters}], async () => await readPosts({filters}))

export default UseReadPosts;