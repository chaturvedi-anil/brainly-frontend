export interface IconProps{
    size: "sm" | "md" | "lg" | "xl",
    onClick?: () => void
}

export const IconSizeVariant ={
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6",
    "xl": "size-8"
}