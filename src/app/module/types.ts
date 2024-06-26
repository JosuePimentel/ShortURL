import { Url } from "url"

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

export type shortURL = {
    long_url?: string,
    link?: string
}

export type card = {
    title?: string,
    text?: string,
    svg?: string
}