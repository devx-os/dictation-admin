import * as React from 'react';
import {useQuery} from "react-query";
import {readPostBySlug} from "../api";

const UseReadPostBySlug = (slug = '') => useQuery(['readPostBySlug', {slug}], async () => {
    if (!slug) return undefined;
    return await readPostBySlug({slug})
}, {
    enabled: !!slug,
})

export default UseReadPostBySlug;