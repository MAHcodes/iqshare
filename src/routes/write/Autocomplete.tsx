import { Autocomplete, Chip, TextField } from "@mui/material";
import { FormikValues } from "formik";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";
import { DEFAULT_CONFIG } from "../../config/axios";

interface IAutocompleteFormProps {
  formik: FormikValues;
}

interface Tag {
  name: string;
  id: number;
}

const AutocompleteForm: FC<IAutocompleteFormProps> = ({ formik }) => {
  const userId = useSelector((state: RootState) => state.user.id);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.request({
        ...DEFAULT_CONFIG,
        url: `/Users/${userId}`,
      });
      console.log(response);
      const posts = response?.data?.posts;
      const tagIds = new Set();
      console.log({ posts });
      posts?.forEach((post: { tagIds: number[] }) => {
        post.tagIds.forEach((tag) => {
          tagIds.add(tag);
        });
      });
      console.log({ tagIds });
      tagIds.forEach((tagId) => {
        (async () => {
          const response = await axios.request({
            ...DEFAULT_CONFIG,
            url: `/Tags/${tagId}`,
          });
          console.log({ response });
          setTags((current: Tag[]) => [
            ...current,
            {
              name: response.data.name,
              id: response.data.id,
            },
          ]);
        })();
      });
    })();
  }, [userId, setTags]);

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  // const handleNewTag = (newTag: string) => {
  //   sendItBaby({
  //     url: "/Tags",
  //     method: "POST",
  //     data: {
  //       name: newTag,
  //     },
  //   });
  // };
  //
  return (
    <Autocomplete
      sx={{ width: "100%" }}
      options={[]}
      freeSolo
      multiple
      value={formik.values.tags}
      onChange={(e, newValue) => {
        // handleNewTag(e.target.value);
        formik.setFieldValue("tags", newValue);
      }}
      renderTags={(value, props) =>
        value.map((option, index) => (
          <Chip label={option} {...props({ index })} key={index} />
        ))
      }
      renderInput={(params) => <TextField label="Add Tags" {...params} />}
    />
  );
};

export default AutocompleteForm;
