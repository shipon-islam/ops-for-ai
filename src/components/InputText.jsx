
export default function InputText({ label,...rest }) {
  return (
    <div>
        <label className="md:text-lg" htmlFor={rest.id}>{label}</label>
        <input  {...rest} className="border-b border-gray-300  p-2 w-full focus:outline-none md:text-lg" />
    </div>
  )
}
