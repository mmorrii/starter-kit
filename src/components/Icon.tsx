import Icons from "/icons/icons.svg"

type IconNames = "arrowRight" | "sun" | "moon"

interface IconProps {
    name: IconNames,
    color?: string,
    size?: number | string
}

const Icon = ({ name, color = "#ffffff", size = 24 }: IconProps) => {
    return (
        <svg color={color} width={size} height={size} aria-hidden="true">
            <use xlinkHref={`${Icons}#icon-${name}`} />
        </svg>
    )
}

export default Icon