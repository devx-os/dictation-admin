import React from 'react';
import {useMutation} from "react-query";
import {updatePost} from "../api";

const UseUpdatePost = () => useMutation(updatePost)

export default UseUpdatePost