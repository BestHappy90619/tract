import { useState } from "react";

import { AiOutlineSend } from "react-icons/ai";

import { ChatInputProps } from "@/types";

const ChatInput = (props: ChatInputProps) => {
  const { gettingReply, onClickSent } = props;

  const [msg, setMsg] = useState("");

  const onKeyUp = (e: any) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13 && !e.shiftKey) onSendMsg();
  };

  const onSendMsg = () => {
    if (gettingReply) return;
    onClickSent(msg.trim());
    setMsg("");
  };

  return (
    <>
      <div className="absolute bottom-8 flex rounded-2xl border border-custom-green bg-gray-900/5 p-4 w-[calc(100%-32px)]">
        <textarea
          rows={1}
          placeholder="Type message"
          className=" flex-grow bg-transparent outline-none disabled:bg-white disabled:bg-opacity-20"
          disabled={gettingReply}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyUp={onKeyUp}
        />
        <div
          className={`mx-2 self-center text-xl  text-black/40 ${
            gettingReply ? "text-opacity-20" : "text-opacity-80"
          }`}
        >
          <AiOutlineSend
            className={`${gettingReply ? "" : "cursor-pointer"} rounded-full`}
            onClick={onSendMsg}
          />
        </div>
      </div>
    </>
  );
};

export default ChatInput;
