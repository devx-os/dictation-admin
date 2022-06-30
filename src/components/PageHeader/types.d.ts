type PageHeaderProps = {
    children: React.ReactElement | React.ReactElement[]
    className?: string
}

type PageHeaderLeftProps = PageHeaderProps
type PageHeaderRightProps = PageHeaderLeftProps
type PageHeaderIconProps = PageHeaderLeftProps
type PageHeaderTitleProps = {
    children: string
    className?: string
}