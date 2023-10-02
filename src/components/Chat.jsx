import React, { useContext } from 'react';
import {BiSolidVideo} from 'react-icons/bi';
import {BsPersonFillAdd} from 'react-icons/bs';
import {FiMoreHorizontal} from 'react-icons/fi';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
   const {data} = useContext(ChatContext);

   return (
      <div className='chat'>
         <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
               <BiSolidVideo size={20}/>
               <BsPersonFillAdd size={20}/>
               <FiMoreHorizontal size={20}/>
            </div>
         </div>
         <Messages/>
         <Input/>
      </div>
   )
};

export default Chat;