import * as Styled from "./style";
import Button from "@src/components/@shared/Button";

const channels = [
  { id: 1, name: "[#]시스템사업부-공지사항", isSubscribed: true },
  { id: 2, name: "[#]인프라-매뉴얼", isSubscribed: true },
  { id: 3, name: "[#]인프라-서버정보", isSubscribed: true },
  { id: 4, name: "[#]배포-매뉴얼", isSubscribed: true },
  { id: 5, name: "[#]학습해보자", isSubscribed: true },
  { id: 6, name: "[#]FE-내용정리", isSubscribed: true },
];

function AddChannel() {
  return (
    <Styled.Container>
      <h1>메뉴 추가</h1>
      <p>추가하고 싶으신 메뉴를 선택해주세요</p>
      <Styled.ChannelListContainer>
        {channels.map(({ id, name, isSubscribed }) => (
          <Button key={id} size="medium" isActive={isSubscribed}>
            <>#{name}</>
          </Button>
        ))}
      </Styled.ChannelListContainer>
    </Styled.Container>
  );
}

export default AddChannel;
