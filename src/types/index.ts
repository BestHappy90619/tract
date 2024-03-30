export type postRequestPayload = {
  key: any;
};

export type TMainFunctionBoxProps = {
  iconUrl: string;
  title: string;
  description: string;
  [key: string]: any;
};

export type ChatInputProps = {
  gettingReply: boolean;
  onClickSent: Function;
};

export type MessageBodyProps = {
  newMsg: string;
  onGettingReply: Function;
};

export type MessageHistory = {
  type: string;
  content: string;
};