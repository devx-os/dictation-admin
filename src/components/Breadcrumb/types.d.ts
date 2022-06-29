type BreadcrumbItem = {
    title: string
    url: string
    icon?: () => JSX.Element
}

type BreadcrumbProps = {
    className?: string
}