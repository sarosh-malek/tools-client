import { TbDotsCircleHorizontal } from 'react-icons/all';
import { Page } from './Page';
import { Table } from './Table';
export const MainArea = () => {
  return (
    <div className="flex-col w-full">
      <nav className="flex content-center items-center justify-between flex-wrap p-6 h-[5vh]">
        <div>Implement Navbar</div>
        <div className="hover:cursor-pointer">
          <TbDotsCircleHorizontal />
        </div>
      </nav>
      <Page />
    </div>
  );
};
