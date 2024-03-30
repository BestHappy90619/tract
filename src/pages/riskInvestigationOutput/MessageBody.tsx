import { useState, useRef, useEffect } from "react";

import { Spinner } from "@material-tailwind/react";
import { MSG_BY_BOT, MSG_BY_USER } from "@/utils/Constants";

const MessageBody = (props: any) => {
  const chatRef = useRef<HTMLDivElement>(null);

  const { newMsg, onGettingReply } = props;

  const [messages, setMessages] = useState([]);
  const [gettingReply, setGettingReply] = useState(false);
  const [addmsg, setAddMsg] = useState(false);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current?.scrollHeight });
  }, [addmsg]);

  useEffect(() => {
    if (!newMsg.length) return;
    var tempMsgs: any = messages;
    tempMsgs.push({
      type: MSG_BY_USER,
      content: newMsg,
    });
    setMessages(tempMsgs);
    setAddMsg(!addmsg);

    setGettingReply(true);
    onGettingReply(true);

    // To do get reply
    tempMsgs.push({
      type: MSG_BY_BOT,
      content:
        "Hello. This is Ryan. If you have any questions, please feel free to mail me(besthappy619@gmail.com)",
    });
    setMessages(tempMsgs);
    setAddMsg(!addmsg);
    setGettingReply(false);
    onGettingReply(false);
  }, [newMsg]);

  return (
    <>
      <div
        className={`my-4 ${
          messages.length ? "" : "hidden"
        } h-[calc(100%-122px)] w-full overflow-auto p-8`}
        ref={chatRef}
      >
        {messages.map((message: any, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              message.type == MSG_BY_BOT
                ? " max-w-[80%] justify-start md:max-w-[55%]"
                : "justify-end"
            }`}
          >
            <div
              className={`${
                message.type == MSG_BY_BOT
                  ? "bg-[#5EB2F1] text-custom-txt-clr"
                  : " max-w-[80%] bg-[#BFCF60] text-white  md:max-w-[55%] "
              }  rounded-lg p-2`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {gettingReply && (
          <div className={`mb-2 flex justify-start`}>
            <div className={`rounded-lg bg-white bg-opacity-50 p-2 text-black`}>
              <Spinner
                color="cyan"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className={` ${
          messages.length ? "hidden" : ""
        } z-50 flex flex-col items-center h-[calc(100%-122px)] w-full justify-center bg-white bg-opacity-20 text-3xl text-black`}
      >
        <div className="mb-4 border border-gray-200 rounded-full w-24 h-24 flex justify-center items-center">
          <img src="/favicon.ico" className="w-12" alt="" />
        </div>
        <p className="text-center">How can I help you today?</p>
      </div>
    </>
  );
};

export default MessageBody;
