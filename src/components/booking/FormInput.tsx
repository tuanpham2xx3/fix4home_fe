// src/components/booking/FormInput.tsx
interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

const FormInput = ({
  label,
  required = false,
  type = "text",
  placeholder,
}: FormInputProps) => {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-dark">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full rounded-lg border border-gray-200
          px-4 py-2.5 text-sm
          focus:border-primary focus:ring-2 focus:ring-primary/30
          outline-none transition
        "
      />
    </div>
  );
};

export default FormInput;
