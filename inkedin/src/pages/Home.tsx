// src/pages/Home.tsx
import { useState } from "react";
import { DateFilter } from "../component/DateFilter";

const Home = () => {
  const [filterRange, setFilterRange] = useState<{
    from: string;
    to: string;
  } | null>(null);

  const handleFilter = (from: string, to: string) => {
    setFilterRange({ from, to });
  };

  return (
    <div className="home-page-container">
      <DateFilter onFilter={handleFilter} />
      {filterRange && (
        <p className="home-page-results">
          Showing results from <strong>{filterRange.from}</strong> to{" "}
          <strong>{filterRange.to}:</strong>
        </p>
      )}
    </div>
  );
};

export default Home;
