type IProps = {
    title: string
}

export default function Page(props: IProps) {
    const {title} = props

    return <h2>{title}</h2>
}