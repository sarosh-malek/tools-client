import { FaAngleDoubleLeft } from 'react-icons/fa';
import { useAppSelector } from '../app/hooks';

export const Sidebar = () => {
  const user = useAppSelector((state) => state.users.email);
  return (
    <div className="bg-slate-200 min-h-screen w-72">
      <div className="flex justify-between p-3">
        <div>{user}</div>
        <span className="fill-current mt-1.5">
          <FaAngleDoubleLeft />
        </span>
      </div>
    </div>
  );
};
