import * as Styled from "./style";
import PlusIcon from "@public/assets/icons/PlusIcon.svg";
import { FlexColumn, FlexRow } from "@src/@styles/shared";

const mockChannels = [
  { id: 1, name: "시스템사업부-공지사항", isPrivate: false },
  { id: 2, name: "인프라-매뉴얼", isPrivate: false },
  { id: 3, name: "인프라-서버정보", isPrivate: false },
  { id: 4, name: "배포-매뉴얼", isPrivate: false },
  { id: 5, name: "학습해보자", isPrivate: false },
  { id: 6, name: "FE-내용정리", isPrivate: false },
] as Channel[];

interface Channel {
  id: number;
  name: string;
  isPrivate: boolean;
}

interface Props {
  channels?: Channel[];
}

function Drawer({ channels = mockChannels }: Props) {
  return (
    <Styled.Container>
      <FlexRow
        justifyContent="space-between"
        alignItems="center"
        padding="0 20px"
      >
        <Styled.Title>메뉴</Styled.Title>
        <PlusIcon width="14px" height="14px" color="#000000" />
      </FlexRow>
      <Styled.Hr />
      <FlexColumn gap="11px" padding="0 20px">
        {channels.map((channel) => (
          <Styled.ChannelName key={channel.id}>
            {channel.isPrivate ? "🔒 " : "# "}
            {channel.name}
          </Styled.ChannelName>
        ))}
      </FlexColumn>
    </Styled.Container>
  );
}

export default Drawer;
