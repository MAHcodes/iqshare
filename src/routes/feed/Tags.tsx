import { FC } from "react";

interface ITagsProps {
  ids: number[];
}

const Tags: FC<ITagsProps> = ({ ids }) => {
  return ids.map((id) => <span key={id}>{id}, </span>);
};

export default Tags;
