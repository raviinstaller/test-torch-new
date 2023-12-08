interface TextFieldProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
  type: string;
  className?: string;
}

const TextField = ({
  label,
  placeholder,
  disabled = false,
  type,
  className,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="text-xs 2xl:text-sm text-slate-700">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        disabled={disabled}
        className={`text-sm 2xl:text-base px-5 py-3 border border-slate-200 rounded-md focus:outline-0 w-full bg-slate-50 placeholder:text-slate-400 text-slate-800 ${className} ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default TextField;
