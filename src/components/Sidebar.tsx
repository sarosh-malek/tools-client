import { FaAngleDoubleLeft } from 'react-icons/fa';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';
import { getPageStatus, selectAllPages } from '../features/pageSlice';

export const Sidebar = () => {
  const user = useAppSelector(selectUser);
  const pages = useAppSelector(selectAllPages);
  const pageStatus = useAppSelector(getPageStatus);

  let content;
  if (pageStatus === 'pending') {
    content = <div>Pending....</div>;
  } else {
    content = pages.map((page) => {
      return (
        <div key={page._id}>
          <h1>{page.title}</h1>
          {page.subPages.map((sub, i) => {
            return (
              <div className="pl-3" key={i}>
                {sub}
              </div>
            );
          })}
        </div>
      );
    });
  }

  return (
    <div className="bg-slate-200 min-h-screen w-72">
      <div className="flex justify-between p-3">
        <div>{user}</div>
        <span className="fill-current mt-1.5">
          <FaAngleDoubleLeft />
        </span>
      </div>
      <div className="flex-col p-3">{content}</div>
    </div>
  );
};
