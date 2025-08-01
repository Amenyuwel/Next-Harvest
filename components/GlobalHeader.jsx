import React from "react";
import { Icon } from "@iconify/react";

const GlobalHeader = ({
  title,
  showAddButton = true,
  addButtonText = "Add Farmer",
  onAddClick,
  showProfile = true,
}) => {
  return (
    <div className="flex w-full items-center justify-between px-6 py-4">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-black">{title}</h1>

      {/* Right side - Add Button + Profile */}
      <div className="flex items-center gap-4">
        {showAddButton && (
          <button
            onClick={onAddClick}
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            {addButtonText}
            <Icon icon="mdi:plus" width="20" height="20" />
          </button>
        )}

        {showProfile && (
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-300">
            <img
              src="/api/placeholder/48/48"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalHeader;
