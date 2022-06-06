import { Grow } from "@mui/material";
import React from "react";

enum transformOriginMap {
  "top" = "center top",
  "bottom" = "center bottom",
  "center" = "center",
}

export const Motion = ({ children, time }: { children: any; time: number | undefined }) => {
  return (
    <Grow
      in={true}
      style={{ transformOrigin: transformOriginMap.center }}
      timeout={time ?? 2000}
    >
      {children}
    </Grow>
  );
};
