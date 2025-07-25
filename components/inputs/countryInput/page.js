"use client"

import { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function CountryInput({ countryTags, setCountryTags, alt }) {
  const [error, setError] = useState("");

  const handleChange = (event, value) => {
    if (value.length > 5) {
      setError("You can only add up to 5 tags.");
      return;
    }
    setCountryTags(value);

    if (value.length < 1) {
      setError("Please add at least 1 country.");
    } else {
      setError("");
    }
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      id="tags-standard"
      options={[]}
      value={countryTags}
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="filled"
            label={option}
            {...getTagProps({ index })}
            key={index}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          className="countrySelection"
          variant="outlined"
          placeholder={
            countryTags.length >= 5 ? "Maximum 20 Countries reached" : alt
          }
          error={!!error}
          helperText={error}
          disabled={countryTags.length >= 5}
          sx={{
            width: "600px",
            "@media (max-width: 1210px)": {
              width: "500px",
            },
            "@media (max-width: 1035px)": {
              width: "400px",
            },
            "@media (max-width: 875px)": {
              width: "300px",
            },
          }}
        />
      )}
    />
  );
}
