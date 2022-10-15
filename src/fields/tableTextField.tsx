export const TableTextField = (props: Props) => {
  const handleClick = () => {
    const box = document.querySelector('.input-box');
    box?.classList.remove('hidden');
  };
  return (
    <>
      <input
        className="w-[100%] hover:cursor-pointer overflow-hidden"
        onClick={handleClick}
        value={props.text}
        readOnly
      />
    </>
  );
};

interface Props {
  text: string;
}
