export default function FilterBar({ filters, setFilters, categories }) {
  return (
    <div>
      <input placeholder="Search" value={filters.q} onChange={e => setFilters(f => ({...f, q: e.target.value}))}/>
      <select value={filters.category} onChange={e => setFilters(f => ({...f, category: e.target.value}))}>
        <option value="">All</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <input type="range" min="0" max="50000" step="500" value={filters.price} onChange={e => setFilters(f => ({...f, price: +e.target.value}))} />
      <span>Up to ₹{filters.price}</span>
    </div>
  );
}
