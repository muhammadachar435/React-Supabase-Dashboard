import React from "react";

function Pages() {
  const [coinsData, setCoindData] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [postperData, setpostperData] = useState(8);
  const lastpostIndex = currentpage * postperData;
  const firstpostData = lastpostIndex - postperData;
  return <div>Pages</div>;
}

export default Pages;
