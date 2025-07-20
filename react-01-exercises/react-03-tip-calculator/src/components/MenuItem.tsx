import { IMenuItem } from "../interfaces";

type IMenuItemProps = {
  item: IMenuItem;
  addItem: (item:IMenuItem) => void;
};

export default function MenuItem({ item, addItem }: IMenuItemProps) {
  return (
    <>
      <button
        className="border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg  rounded-lg flex justify-between w-full"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
}
