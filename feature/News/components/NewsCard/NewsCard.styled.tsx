import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import mediaQueries from "styles/media-queries";
import { ThemeProps } from "../../../../types/theme";

type Props = {
  col?: number | string;
  height?: number | string;
};

export const NewsCardStyled = styled(Grid).attrs(({ col = 12 }: Props) => ({
  item: true,
  xs: 12,
  // sm:6,
  lg: col,
}))`
  flex-direction: column;
  height: auto;
  padding-right: ${({ mobilemargin }) =>
    mobilemargin ? "16px !important" : "0 !important"};
  cursor: pointer !important;

  ${mediaQueries.greaterThan("sm")`
    padding-right: 16px !important;
  `}
`;

export const Card = styled(Box)`
  border-radius: 5px;
  height: ${({ height }: Props) =>
    height ? `${height}px` : "300px"} !important;
  margin-bottom: 16px;
  box-shadow: 0 0 5px 0.3px ${({ theme }) => theme.colors.blackGrey};
  overflow: hidden;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;

  & img {
    transition: all 1s;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const CardTitleContent = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#00000034 20%, #191919ea 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ col }: Props) => (col === 12 ? "30px" : "20px")};
`;

export const CardTitle = styled(Box)`
  border-left: 3px solid ${({ theme }) => theme.colors.green};
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`;
