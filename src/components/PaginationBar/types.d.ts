type PaginationBarProps = {
    page: number;
    limit: number;
    setPage: (page:number) => void;
    setLimit: (limit:number) => void;
    totalItems: number;
    className?: string
}