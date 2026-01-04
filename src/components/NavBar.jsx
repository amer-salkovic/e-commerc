import SearchBar from "./SearchBar";
import Category from "./Category";

const NavBar = ({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
  onClearFilters,
}) => {
  const hasFilters = search.trim() !== "" || category !== "";

  return (
    <header className="sticky top-0 z-40 mb-8 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-foreground/10" />
          <div className="leading-tight">
            <h1 className="text-base font-semibold tracking-tight">Product Explorer</h1>
            <p className="text-xs text-muted-foreground">Search & filter products</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <SearchBar value={search} onChange={onSearchChange} />

          <Category value={category} categories={categories} onChange={onCategoryChange} />

         
    
          
        </div>
      </div>
    </header>
  );
};

export default NavBar;
