import { Autocomplete, Chip, TextField } from "@mui/material";
import { FormikValues } from "formik";
import { FC, useEffect } from "react";
import useAxios from "../../hooks/useAxios";

interface IAutocompleteFormProps {
  formik: FormikValues;
}

const AutocompleteForm: FC<IAutocompleteFormProps> = ({ formik }) => {
  const { sendItBaby, response } = useAxios({
    url: "/Tags",
    method: "POST",
  });

  const handleNewTag = (newTag: string) => {
    sendItBaby({
      data: {
        name: newTag,
      },
    });
  };

  useEffect(() => {}, [response]);

  return (
    <Autocomplete
      sx={{ width: "100%" }}
      options={[]}
      freeSolo
      multiple
      value={formik.values.tags}
      onChange={(e, newValue) => {
        handleNewTag(e.target.value);
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
