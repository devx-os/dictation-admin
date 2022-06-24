import * as React from 'react';
import {useQuery} from "react-query";
import {readPostBySlug} from "../api";
import {ReadPostBySlugQParams} from "../types";

const UseReadPostBySlug = (slug = '') => useQuery(['readPostBySlug', {slug}], async () => {
    if (!slug) return null;
    return await readPostBySlug({slug})
}, {
    enabled: !!slug,
})

export default UseReadPostBySlug;