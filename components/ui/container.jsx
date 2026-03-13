export function Container({ as: Component = "div", className = "", children }) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}

