export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark:bg-white border-white dark:border-gray-700 text-white shadow-sm focus:ring-white dark:focus:ring-white dark:focus:ring-offset-white ' +
                className
            }
        />
    );
}
