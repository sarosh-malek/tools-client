import { useEffect, useRef } from 'react';
import {
  MdOutlineFormatColorText,
  BsPlusLg,
  FcTodoList,
} from 'react-icons/all';
import { Emoji } from './Emoji';

export const Table = () => {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDownClick);

    return () => {
      document.removeEventListener('mousedown', handleMouseDownClick);
    };
  }, [ref]);

  const handleMouseDownClick = (event: MouseEvent) => {
    if (ref && ref.current !== event.target) {
      const boxEl = document.querySelector('.property-box');
      boxEl?.classList.add('hidden');
    }
  };

  const addNewRow = () => {
    // TO-DO: clone the actual rows
    const elem = document.querySelector('.table-first-element');
    let newNode = elem?.cloneNode(true);
    let newButtonEl = document.querySelector('.table-add-row');
    newButtonEl?.before(newNode!);
  };

  const displayPropertyBox = () => {
    const boxEl = document.querySelector('.property-box');
    boxEl?.classList.remove('hidden');
  };

  return (
    <div ref={ref} className="table-container max-h-max pt-9">
      {/* title and save button */}
      <div className="title-row flex justify-between px-24">
        <div>
          <Emoji emojiSize="text-5xl" />
          <input
            className="outline-none text-3xl font-semibold "
            placeholder="Untitled"
          />
        </div>
      </div>

      {/* table headers */}
      <div className="table-header w-full flex justify-between px-24 mt-4">
        <div className="flex gap-1">
          <div className="flex gap-2 mt-2">
            <div className="mt-1">
              <FcTodoList />
            </div>
            <span>Table</span>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="mt-2">
            <button className="bg-blue-300 px-2 py-1 rounded hover:bg-blue-400">
              New
            </button>
          </div>
          <div className="mt-2">
            <button className="bg-blue-300 px-2 py-1 rounded hover:bg-blue-400">
              Save changes
            </button>
          </div>
        </div>
      </div>

      {/* table first  row */}
      <div className="table-first-element flex pl-24 mt-1">
        {/* first table column  */}
        <div className="table-first-col flex gap-1 w-80 h-9 border-t-2 border-r-2 border-slate-200">
          <div className="flex gap-1 mt-1">
            <div className="mt-1">
              <MdOutlineFormatColorText />
            </div>
            <span>Name</span>
          </div>
        </div>
        {/* Second add column  */}
        <div className="table-second-col w-full gap-1 h-9 border-t-2 border-slate-200 ">
          <div
            onClick={displayPropertyBox}
            className="flex gap-1 mt-1 ml-3 text-slate-300 hover:cursor-pointer"
          >
            <div className="mt-1">
              <BsPlusLg />
            </div>
            Add new column
          </div>
          <div className="property-box hidden mt-2 w-48 h-48 rounded border-y-2 border-x-2 shadow-md bg-white">
            Hello
          </div>
        </div>
      </div>

      <div className="table-first-element flex pl-24">
        <div className="table-first-col flex gap-1 w-80 h-9 border-t-2 border-r-2 border-slate-200">
          <div className="flex gap-1 mt-1">
            <div></div>
          </div>
        </div>
        <div className="table-second-col w-full h-9 border-t-2 border-slate-200">
          <div></div>
        </div>
      </div>

      {/* add new row */}
      <div className="table-add-row pl-24 text-slate-300">
        <div
          onClick={addNewRow}
          className="flex w-full border-t-2 border-slat-200  hover:cursor-pointer"
        >
          <div className="mt-1">
            <BsPlusLg />
          </div>
          <span>New</span>
        </div>
      </div>
    </div>
  );
};

//
