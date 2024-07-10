interface FilterTagProps {
  tagName: string;
  tagCount: number;
}

const FilterTag = ({ tagName, tagCount }: FilterTagProps) => {
  return (
    <li className="my-3">
      <button>
        <h3 className="inline px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500">
          {tagName} ({tagCount})
        </h3>
      </button>
    </li>
  );
};

export default FilterTag;
