import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue, _, { page }) => {
    try {
      const apiKey = "c434f1d12c0a7b76fa520b421caaa209";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${inputValue}&type=like&appid=${apiKey}&page=${page}&limit=10`
      );
      const data = await response.json();

      return {
        options: data.list.map((city) => {
          return {
            value: `${city.coord.lat} ${city.coord.lon}`,
            label: `${city.name}, ${city.sys.country}`,
          };
        }),
        hasMore: data.list.length >= 10,
        additional: {
          page: page + 1,
        },
      };
    } catch (err) {
      console.error(err);
      return {
        options: [],
      };
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      additional={{
        page: 1,
      }}
    />
  );
};

export default Search;
