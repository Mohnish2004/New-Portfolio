import MessageContent from './MessageContent';

interface MessageProps {
  content: string;
  role: 'user' | 'assistant';
}

const Message: React.FC<MessageProps> = ({ content, role }) => {
  return (
    <div className={`message ${role}`}>
      <MessageContent content={content} />
    </div>
  );
};

export default Message; 