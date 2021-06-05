import React, { useState } from "react";
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItem from "../Components/MenuItem";
import portfolios from "../Data/allPortfolios";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

function PortfolioPage() {
  const [categories] = useState(allCategories);
  const [menuItem, setMenuItem] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      return setMenuItem(portfolios);
    }

    const filteredData = portfolios.filter(
      (item) => item.category === category
    );

    setMenuItem(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <Title title={"Portfolios"} span={"Portfolios"} />
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItem menuItem={menuItem} />
      </div>
    </div>
  );
}

export default PortfolioPage;
