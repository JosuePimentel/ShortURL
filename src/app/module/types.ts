export type items = {
    go?: string,
    name?: string
}

export type itemRouter = {
    parentLink?: items,
    childrensLink?: items[]
}

export type itemLinkSVG = {
    SVG?: string,
    link?: string
}