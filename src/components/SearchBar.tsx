import { IconSearch } from "./icons";

interface SearchBarProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function SearchBar({ id, value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="search-bar">
      <IconSearch width={18} height={18} />
      <label htmlFor={id} className="visually-hidden">
        {placeholder}
      </label>
      <input
        id={id}
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
