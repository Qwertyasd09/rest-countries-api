import { Filter, Input } from "../components";

export const Search = () => {
  return (
    <div className="my-16 flex justify-between px-16 md:my-12 md:flex-col md:gap-8 md:px-7">
      <Input />
      <Filter />
    </div>
  );
};
