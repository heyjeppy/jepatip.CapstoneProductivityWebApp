import { forwardRef, useRef } from "react";

export default forwardRef(function SelectInput(
  { className = "", children, ...props },
  ref
) {
  const input = ref ? ref : useRef();

  return (
    <select
      {...props}
      className={
        "border-white dark:border-blue-800 dark:bg-blue-800 dark:text-white focus:border-blue-800 dark:focus:border-blue-800 focus:ring-blue-800 dark:focus:ring-blue-600 rounded-md shadow-sm " +
        className
      }
      ref={input}
    >
      {children}
    </select>
  );
});
