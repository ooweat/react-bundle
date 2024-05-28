import { Link } from "react-router-dom";
import * as Styled from "./style";

interface Props {
  date: string;
}

const ISOConverter = (date: string) => {
  const today = new Date();

  if (date === "오늘") {
    return today.toISOString().replace(/[.]\d+/, "");
  }

  const yesterday = new Date(today.setDate(today.getDate() - 1));
  return yesterday.toISOString().replace(/[.]\d+/, "");
};

function DropdownMenu({ date }: Props) {
  const renderDateOption = () => {
    if (date === "오늘") {
      return (
        <Styled.Option>
          <Link to={`/feed/${ISOConverter("어제")}`}>
            <Styled.Button type="button">어제</Styled.Button>
          </Link>
        </Styled.Option>
      );
    }

    if (date === "어제") {
      return (
        <Styled.Option>
          <Link to={`/feed/${ISOConverter("오늘")}`}>
            <Styled.Button type="button">오늘</Styled.Button>
          </Link>
        </Styled.Option>
      );
    }

    return (
      <>
        <Styled.Option>
          <Link to={`/feed/${ISOConverter("오늘")}`}>
            <Styled.Button type="button">오늘</Styled.Button>
          </Link>
        </Styled.Option>
        <Styled.Option>
          <Link to={`/feed/${ISOConverter("어제")}`}>
            <Styled.Button type="button">어제</Styled.Button>
          </Link>
        </Styled.Option>
      </>
    );
  };

  return (
    <Styled.Container>
      {renderDateOption()}
      <hr />
      <Styled.Option>
        <Styled.Button type="button">날짜 선택</Styled.Button>
      </Styled.Option>
    </Styled.Container>
  );
}

export default DropdownMenu;
