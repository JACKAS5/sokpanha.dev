import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavItem } from "../../types/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  item: NavItem;
  onClick?: () => void;
};

export default function MobileMenuItem({ item, onClick }: Props) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const Icon = item.icon;

  const [openChildren, setOpenChildren] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  
  return (
    <li>
      <div className="flex flex-col">
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setOpenChildren(!openChildren)}
            className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-lg text-left transition ${
              isActive
                ? "bg-blue-50 text-blue-600 dark:bg-blue-800 dark:text-blue-400"
                : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              {Icon && <Icon className="h-5 w-5" />}
              {item.label}
            </div>
            <ChevronDownIcon
              className={`h-4 w-4 transform transition-transform duration-300 ${
                openChildren ? "rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <Link
            to={item.path}
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-50 text-blue-600 dark:bg-blue-800 dark:text-blue-400"
                : "text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {Icon && <Icon className="h-5 w-5" />}
            {item.label}
          </Link>
        )}

        {hasChildren && (
          <ul
            className={`ml-6 mt-2 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${
              openChildren ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.children?.map((child) => (
              <MobileMenuItem key={child.path} item={child} onClick={onClick} />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}