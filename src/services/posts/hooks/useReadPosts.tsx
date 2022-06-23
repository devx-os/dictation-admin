import * as React from 'react';
import {useQuery} from "react-query";
import {readPosts} from "../api";

const UseReadPosts = () => useQuery('readPosts', readPosts)

export default UseReadPosts;