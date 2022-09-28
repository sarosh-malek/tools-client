import { useEffect } from 'react';
import { MainArea } from './MainArea';
import { Sidebar } from './Sidebar';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPages } from '../features/pageSlice';
import React from 'react';

export const Home = React.memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPages());
  }, []);
  return (
    <section className="flex">
      <Sidebar />
      <MainArea />
    </section>
  );
});
