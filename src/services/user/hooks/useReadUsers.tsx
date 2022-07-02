import * as React from 'react';
import {useQuery} from "react-query";
import {ReadUsersFilters} from "../types";
import {readUsers} from "../api";

const UseReadUsers = (filters: ReadUsersFilters = {}) => useQuery(['readUsers', {filters}], async () => await readUsers({filters}))

export default UseReadUsers;