import { FC, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Chip } from "@mui/material";

interface ITagsProps {
  ids: number[];
}

interface ITags {
  [id: string]: string;
}

const Tags: FC<ITagsProps> = ({ ids }) => {
  const [tags, setTags] = useState<ITags>({});
  const { sendItBaby, response } = useAxios();

  useEffect(() => {
    (async () => {
      ids.forEach((id) => {
        sendItBaby({
          url: `/Tags/byId?Id=${id}`,
        });
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  useEffect(() => {
    if (!response?.data.name) return;
    setTags((current) => ({
      ...current,
      [response?.data.id]: response?.data.name,
    }));
  }, [response]);

  return Object.entries(tags).map(([k, v]) => (
    <Chip key={k} label={v} sx={{ mr: 1 }} />
  ));
};

export default Tags;
