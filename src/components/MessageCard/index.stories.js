import MessageCard from ".";
import MockImage from "@public/assets/images/MockImage.png";

export default {
  title: "@shared/MessageCard",
  component: MessageCard,
};

const Template = (args) => <MessageCard {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  username: "사용자1",
  date: "오후 2:23",
  text: `내용 테스트 
  2번째 줄이 이렇게되면
  3번째 줄은 어떨까`,
  thumbnail: MockImage,
};
