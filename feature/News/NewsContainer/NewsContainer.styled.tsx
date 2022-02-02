import { Button, Grid } from "@mui/material";

const { default: styled } = require("styled-components");



export const NewsContainerStyled = styled(Grid).attrs(() => ({
    container: true
}))`
`

export const MoreNewsContent = styled(Grid).attrs(() => ({
    item: true,
    md: 12
}))`
display: flex;
justify-content: center;
margin: ${({ theme }) => theme.boxModel.margin.large} 0;
`


export const MoreButton = styled(Button).attrs(() => ({
    variant: "outlined",
    size: "small"
}))`
    width: 200px;
    text-transform: lowercase;
    font-size: 18px;
    border-color: ${({ theme }) => theme.colors.green} !important;
    color: ${({ theme }) => theme.colors.green} !important;

    &:hover{
        color: ${({ theme }) => theme.colors.dark} !important;
        background-color: ${({ theme }) => theme.colors.green} !important;
    }
`