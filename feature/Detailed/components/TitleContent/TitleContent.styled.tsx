import { Box } from "@material-ui/core"
import styled from "styled-components"


export const  TitleContentStyled = styled(Box)`
`


export const TagContent = styled(Box)`
display: flex;
width:80%;
align-items: center;
margin-top:10px;
justify-content: space-between;
border-bottom:1px solid ${({theme})=>theme.colors.blackGrey}
`