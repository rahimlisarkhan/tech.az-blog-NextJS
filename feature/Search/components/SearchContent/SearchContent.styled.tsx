import { Search } from "@mui/icons-material";
import { useRef, useState } from "react";
import {
  SearchContentStyled,
  SearchInputBox,
  SearchInput,
  SearchButton,
  SearchList,
} from "./SearchContent.styled";
import { SearchCard } from "../SearchCard";
import { NewsType } from "types/news";
import { Typograph } from "shared/components/Typograph/Typograph";

interface SearchProps {
  search: (text: string) => void;
  setFilterData: (data: null) => void;
  searchData: NewsType[];
}

export const SearchContent = ({
  search,
  searchData,
  setFilterData,
}: SearchProps) => {
  const [inputPosition, setInputPosition] = useState(false);
  const inputRef = useRef(null);

  return (
    <SearchContentStyled>
      <SearchInputBox inputPosition={inputPosition}>
        <SearchInput
          ref={inputRef}
          onFocus={() => {
            setFilterData(null);
            setInputPosition(true);
          }}
          onKeyPress={({ key }) =>
            key === "Enter" && search(inputRef.current.value)
          }
        />
        <SearchButton onClick={() => search(inputRef.current.value)}>
          <Search />
        </SearchButton>
      </SearchInputBox>
      <SearchList inputPosition={inputPosition}>
        {Array.isArray(searchData) && !searchData.length && (
          <Typograph color="white" font="25">
            Axtarılan nəticə tapılmadı...
          </Typograph>
        )}
        {searchData?.map((news) => (
          <SearchCard key={`search-news-${news.id}`} news={news} searchWord={inputRef.current.value} />
        ))}
      </SearchList>
    </SearchContentStyled>
  );
};