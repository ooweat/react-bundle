import React, {ChangeEvent} from "react";
import * as Styled from "./style";
import SearchIcon from "@public/assets/icons/SearchIcon.svg";

function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {

  const handlerTidValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;
    if(!regex.test(e.currentTarget.value)) {
      alert("숫자만 입력해주세요");
      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
    }
  }


  const handlerTidSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      if(e.currentTarget.value.length !== 10) {
        alert("TID는 10자리 입니다.");
        return;
      }

      //API 호출 구현

    }
  }

  return (
      <Styled.Container>
        <SearchIcon width="20px" height="20px" fill="#8B8B8B"/>
        <Styled.Input {...props} maxLength={10} onChange={handlerTidValidation}
        onKeyDown={handlerTidSearch} />
      </Styled.Container>
  );
}

export default SearchInput;
