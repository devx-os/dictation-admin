import React from 'react';
import {useMutation} from "react-query";
import {createPost} from "../api";

const UseCreatePost = () => useMutation(createPost)

export default UseCreatePost