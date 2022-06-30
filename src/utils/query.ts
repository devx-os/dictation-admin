import {DefaultFilters} from "../types";

const handleFilters = (filters: DefaultFilters): string => {
    const defaultValues = {limit: -1, offset: -1, fields: {}, sort: {}}
    let stringFilters = '';
    if (filters && Object.keys(filters).length > 0) {
        const baseFilters = Object.assign({}, defaultValues, filters)
        const {limit, offset, fields, sort, ...rest} = baseFilters
        if (rest && Object.keys(rest).length > 0) {
            stringFilters = stringFilters + Object.entries(rest).map((e: [string, string]) => `&${e[0]}=${e[1]}`).join('')
        }
        if (limit !== undefined && limit > -1) {
            stringFilters = stringFilters + `&limit=${limit}`
        }
        if (offset !== undefined && offset > -1) stringFilters = stringFilters + `&offset=${offset}`
        stringFilters = stringFilters + '&fields='
        if (fields && Object.keys(fields).length > 0) {
            stringFilters = stringFilters + Object.keys(fields).map((f) => `${f}:${fields[f]}`).join(',')
        } else {
            stringFilters = stringFilters + '*'
        }
        if (sort && Object.keys(sort).length > 0) {
            stringFilters = stringFilters + `&sort=${Object.keys(sort).map((s) => `${[s]}:${sort[s]}`).join(',')}`
        }
        if (stringFilters) stringFilters = stringFilters.replace(/^&/, '?');
    }
    return stringFilters
}

export {handleFilters}