import { Link } from "react-router-dom";
const MEASURES =
  "px-3 py-1.5 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm text-center mb-2";

// const COLORS = (color) => {
//   return `text-${color}-700 hover:text-white border-${color}-700 hover:bg-${color}-800 dark:border-${color}-500 dark:text-${color}-500 dark:hover:text-white dark:hover:bg-${color}-500 dark:focus:ring-${color}-800 focus:ring-${color}-300`;
// };

export const InfoButton = ({ children, clickHandler }) => {
  const colors = `text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 focus:ring-blue-300`;
  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, clickHandler }) => {
  const colors = `text-gray-700 hover:text-white border-gray-700 hover:bg-gray-800 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-800 focus:ring-gray-300`;
  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const SuccessButton = ({ children, clickHandler }) => {
  const colors = `text-green-700 hover:text-white border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800 focus:ring-green-300`;
  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const DangerButton = ({ children, clickHandler }) => {
  const colors = `text-red-700 hover:text-white border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 focus:ring-red-300`;
  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const WarningButton = ({ children, clickHandler }) => {
  const colors = `text-yellow-700 hover:text-white border-yellow-700 hover:bg-yellow-800 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-yellow-800 focus:ring-yellow-300`;

  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

export const PurpleButton = ({ children, clickHandler }) => {
  const colors = `text-purple-700 hover:text-white border-purple-700 hover:bg-purple-800 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800 focus:ring-purple-300`;

  return (
    <button onClick={clickHandler} className={MEASURES + colors}>
      {children}
    </button>
  );
};

// LinksButtons
export const LinkBaseButton = ({ children, to, classNames }) => {
  return (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );
};

export const LinkInfoButton = ({ children, to }) => {
  const colors = `text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 focus:ring-blue-300`;
  return (
    <Link className={MEASURES + colors} to={to}>
      {children}
    </Link>
  );
};

export const LinkSuccessButton = ({ children, to }) => {
  const colors = `text-green-700 hover:text-white border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800 focus:ring-green-300`;
  return (
    <Link className={MEASURES + colors} to={to}>
      {children}
    </Link>
  );
};

export const LinkDangerButton = ({ children, to }) => {
  const colors = `text-red-700 hover:text-white border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 focus:ring-red-300`;
  return (
    <Link className={MEASURES + colors} to={to}>
      {children}
    </Link>
  );
};

export const LinkBreadCrumbs = ({ children, to }) => {
  const styles = `text-blue-500`;
  return (
    <Link className={styles} to={to}>
      {children}
    </Link>
  );
};
