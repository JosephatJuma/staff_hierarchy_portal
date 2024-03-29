import React from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";
import { useField } from "formik";

export default function SelectField({ ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "5px", marginTop: "10px" }}>
        <label>
          {props.label}
          <span style={{ color: "red" }}>{props.isRequired ? "*" : ""}</span>
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel id="select">{props.labelName}</InputLabel>
          <Select
            labelId="select"
            label={props.labelName}
            fullWidth
            name={props.name}
            id={props.id}
            {...field}
            helperText={errorText}
            error={!!errorText}
            variant="outlined"
            sx={{
              color: "#542A52",
              height: "40px",
            }}
          >
            {!!props.MenuItems?.length &&
              props.MenuItems.map((menuItem) => {
                return (
                  <MenuItem
                    value={menuItem.value}
                    key={menuItem.value}
                    disabled={menuItem.disabled}
                  >
                    {menuItem.label}({menuItem.name})
                    {/* Use label as the visible label */}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
