import { NewsContainerStyled, MoreNewsContent } from "./NewsContainer.styled";
import NewsCard from "../components/NewsCard";
import { getDataNews } from "../../../shared/services/MixNews";
import { useState } from "react";
import { useSelector } from "../../../shared/hooks/useSelector";
import ButtonOutlined from "../../../shared/components/ButtonOutlined";
import Grow from "@mui/material/Grow";
import { useRenderTypeName } from "shared/hooks/useRenderTypeName";
import { useMediaQuery } from "react-responsive";
import { breakpoint } from "styles/breakpoint";
import { MobileCard } from "../components/MobileCard";

export const NewsContainer = ({ newsData, nextPage }: any) => {
  const appMode = useSelector((state) => state.home.appMode);
  const [data, setData] = useState(newsData);
  let [nextPageUrl, setNextPageUrl] = useState(nextPage);
  const tagName = useRenderTypeName();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: breakpoint.laptop });

  const onPage = async () => {
    if (!nextPageUrl) {
      return;
    }

    let res = await getDataNews(null, nextPageUrl?.split("api")[1]);

    if (res) {
      setData([...data, ...res.data.results]);
      setNextPageUrl(res.data.next);
    }
  };

  return (
    <NewsContainerStyled>
      {data?.map((item, index) => {
        if (index === 0) {
          return (
            <NewsCard
              key={`mixnews-id-${index}`}
              col={12}
              height={isDesktopOrLaptop ? "500" : "250"}
              {...item}
            />
          );
        }

        if (
          index === 1 ||
          index === 2 ||
          index === 6 ||
          index === 7 ||
          index === 11 ||
          index === 12 ||
          index === 16 ||
          index === 17
        ) {
          return isDesktopOrLaptop ? (
            <NewsCard
              key={`mixnews-id-${index}`}
              col={6}
              height="300"
              {...item}
            />
          ) : (
            <MobileCard
              key={`mobile-mixnews-id-${index}`}
              col={12}
              {...item}
              height="120"
            />
          );
        }
        return isDesktopOrLaptop ? (
          <NewsCard
            key={`mixnews-id-${index}`}
            col={4}
            {...item}
            height="320"
          />
        ) : (
          <MobileCard
            key={`mobile-mixnews-id-${index}`}
            col={12}
            {...item}
            height="120"
          />
        );
      })}

      <Grow in={true} style={{ transformOrigin: "0 0 10" }} timeout={2000}>
        <MoreNewsContent>
          <ButtonOutlined
            disabled={nextPageUrl ? false : true}
            mode={appMode ? "true" : ""}
            onClick={onPage}
          >
            {nextPageUrl ? `daha 30 ${tagName}` : `daha ${tagName} yoxdur`}
          </ButtonOutlined>
        </MoreNewsContent>
      </Grow>
    </NewsContainerStyled>
  );
};
