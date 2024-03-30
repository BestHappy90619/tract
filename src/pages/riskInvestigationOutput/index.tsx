import { useState } from "react";

import MessageBody from "./MessageBody";
import ChatInput from "./ChatInput";
import Summary from "./Summary";

const RiskInvestigationOutput = () => {
  const [msg, setMsg] = useState("");
  const [gettingReply, setGettingReply] = useState(false);

  const onClickSent = (msg: string) => setMsg(msg);

  const onGettingReply = (flag: boolean) => setGettingReply(flag);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <div className="col-span-1 order-last xl:-order-last h-screen p-4 relative">
        <MessageBody
          newMsg={msg}
          onGettingReply={onGettingReply}
        />
        <ChatInput
          gettingReply={gettingReply}
          onClickSent={onClickSent}
        />
      </div>
      <Summary />
    </div>
  );
};

export default RiskInvestigationOutput;
