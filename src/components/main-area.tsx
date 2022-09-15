import { TbDotsCircleHorizontal } from 'react-icons/all';
export const MainArea = () => {
  return (
    <>
      <nav className="flex content-center items-center justify-between flex-wrap p-6 h-[5vh] w-full">
        <div>Implement Navbar</div>
        <div className="hover:bg-slate-300">
          <TbDotsCircleHorizontal />
        </div>
      </nav>
    </>
  );
};
