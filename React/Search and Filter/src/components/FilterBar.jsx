const FilterBar = ({ category, setCategory, categories }) => {
  return (
    <select
      className="filter"
      value={category}
      onChange={e => setCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map(cat => (
        <option key={cat}>{cat}</option>
      ))}
    </select>
  );
};

export default FilterBar;