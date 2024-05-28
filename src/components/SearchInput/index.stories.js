import SearchInput from ".";

export default {
  title: "@shared/SearchInput",
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

export const DefaultTemplate = Template.bind({});
DefaultTemplate.args = {
  placeholder: "TID 10 자리를 입력해주세요.",
};
