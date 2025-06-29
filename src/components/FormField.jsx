/* eslint-disable react/prop-types */
/**
 * FormField Component
 *
 * This component renders a form field with a label, supporting multiple input types including
 * text, textarea, and select. It can also display helper text below the form field.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text for the form field.
 * @param {string} [props.type="text"] - The type of the form field, can be "text", "textarea", or "select".
 * @param {string} props.value - The value of the form field.
 * @param {function} props.onChange - The function called when the form field value changes.
 * @param {Array} [props.options=[]] - The options for the select input, each option should be an object with `value` and `label`.
 * @param {boolean} [props.required=false] - Whether the form field is required or not.
 * @param {number|null} [props.maxLength=null] - The maximum length of the input value (for text and textarea).
 * @param {string} [props.helperText] - The helper text displayed below the form field.
 *
 * @returns {JSX.Element} The rendered FormField component.
 *
 * @example
 * // Render a text input field
 * <FormField
 *   label="Name"
 *   value={name}
 *   onChange={(e) => setName(e.target.value)}
 *   required={true}
 *   maxLength={255}
 *   helperText="Please enter your full name."
 * />
 *
 * JSDoc comments above were generated by ChatGPT
 */
const FormField = ({
  label,
  type = "text",
  value,
  onChange,
  options = [],
  required = false,
  maxLength = null,
  helperText,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-small">{label}</label>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
          className="w-full px-4 py-2 border border-gray rounded-md my-1/2"
        />
      ) : type === "select" ? (
        <select
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-2 border border-gray rounded-md my-1/2"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
          className="w-full px-4 py-2 border border-gray rounded-md my-1/2"
        />
      )}
      {helperText && <p className="text-sm text-gray-cool">{helperText}</p>}
    </div>
  );
};

export default FormField;
