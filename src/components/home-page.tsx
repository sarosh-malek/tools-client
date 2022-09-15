import { MainArea } from './main-area';
import { Sidebar } from './Sidebar';

export const Home = () => {
  return (
    <section className="flex">
      <Sidebar />
      <MainArea />
    </section>
  );
};
