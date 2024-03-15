import * as React from 'react';
import { createElement } from 'react';
import Chat, { Bubble, useMessages } from '@chatui/core';
import "@chatui/core/dist/index.css";



export interface chatProps {
  style?: object;
  initialMessages?: any;
  saveField?(useMessages: any): void;
}

const chatui: React.FC<chatProps> = function chatui({
style,
saveField,
initialMessages,
  ...otherProps
}) {
    
      const { messages,...ref} = useMessages(initialMessages);


  React.useEffect(() => {
    if (ref) {
      if (saveField) {
        saveField({
          ...ref
        });      
      }
    }
  }, []);

  
  return (
    <div style={style}>
    <Chat

    {  ...otherProps
    }
    messages={messages}
  />
    </div>



  );
};

chatui.displayName = 'chatui';
export default chatui;


