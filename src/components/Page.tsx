import { AiOutlinePlus } from 'react-icons/ai';
import { CgMenuRightAlt } from 'react-icons/cg';
import { Emoji } from './Emoji';

export const Page = () => {
  return (
    <div className="flex-col w-[60vw] mt-14 ml-[18vw]">
      <div>
        <div>
          <Emoji emojiSize="text-8xl" />
        </div>
        <input
          className="text-4xl font-bold outline-0 mt-8 h-12"
          placeholder="Get started"
        />
      </div>

      <div className="mt-2 -ml-10 flex">
        <div>
          <AiOutlinePlus className="h-5 w-5 hover:cursor-pointer hover:bg-slate-200" />
        </div>
        <div>
          <CgMenuRightAlt className="h-5 w-5 hover:cursor-pointer hover:bg-slate-200" />
        </div>
      </div>
    </div>
  );
};
