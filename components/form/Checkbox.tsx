interface CheckboxProps {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
}

const Checkbox = ({
  label,
  disabled = false,
  checked,
  className,
}: CheckboxProps) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        id={label}
        type="checkbox"
        value=""
        disabled={disabled}
        checked={checked}
        className={`h-5 w-5 rounded-md cursor-pointer text-blue-600 hover:ring-2 ring-offset-2 !ring-blue-200 border-slate-200 ${className}`}
      />
      <label
        htmlFor={label}
        className="text-sm 2xl:text-base text-slate-500 cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
