import { TbDotsCircleHorizontal } from 'react-icons/all';
import { Page } from './Page';
import {
  selectPageIds,
  addNewPage,
  getPageStatus,
} from '../features/pageSlice';
import { useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { Table } from './reactTable';
export const MainArea = () => {
  const dispatch = useDispatch();
  const ids = useAppSelector(selectPageIds);
  const status = useAppSelector(getPageStatus);

  useEffect(() => {
    if (ids.length === 0 && status === 'success') {
      console.log(ids);
      dispatch(
        addNewPage({
          title: 'getting started',
          subPages: [],
          emoji: '',
        })
      );
    }
  });

  return (
    <div className="flex-col w-full">
      <nav className="flex content-center items-center justify-between flex-wrap p-6 h-[5vh]">
        <div>Implement Navbar</div>
        <div className="hover:cursor-pointer">
          <TbDotsCircleHorizontal />
        </div>
      </nav>
      <Table />
    </div>
  );
};
