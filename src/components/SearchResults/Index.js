import PropTypes from "prop-types";
import React from "react";

const Card = ({data}) => {
  return (<div><p>{data.artistName}</p></div>)
}
const SearchResults = ({data}) => {
  console.log(data[0]);
  return (
    <>
    {data.map((item, index) => <Card key={index} data={item}/>)}
    </>
  );
};

SearchResults.propTypes = {
  data: PropTypes.array
};

export default SearchResults;