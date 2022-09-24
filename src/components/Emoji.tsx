import EmojiPicker, { IEmojiData } from 'emoji-picker-react';
import { useState } from 'react';

export const Emoji = ({ emojiSize = 'text-xl' }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('🚀');
  const [showEmojiPicker, setEmojiPicker] = useState<boolean>(false);
  const onEmojiClick = (event: React.MouseEvent, emojiData: IEmojiData) => {
    setSelectedEmoji(emojiData.emoji);
    setEmojiPicker(false);
  };
  const handleClick = () => {
    setEmojiPicker(true);
  };

  return (
    <>
      <span
        className={`hover:cursor-pointer ${emojiSize} pl-0 w-0`}
        onClick={handleClick}
      >
        {selectedEmoji}
      </span>
      {showEmojiPicker && (
        <div className="w-0">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </>
  );
};
