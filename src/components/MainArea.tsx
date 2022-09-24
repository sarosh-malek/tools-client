import { TbDotsCircleHorizontal } from 'react-icons/all';
import { Page } from './Page';
import { selectPageIds, addNewPage } from '../features/pageSlice';
import { useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
export const MainArea = () => {
  const pageiIds = useAppSelector(selectPageIds);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pageiIds.length == 0) {
      dispatch(
        addNewPage({ title: 'Getting started', emoji: '🚀', subPages: [] })
      );
    }
  }, []);
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
