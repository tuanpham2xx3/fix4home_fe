import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface WorkflowItemProps {
  step: { id: number; title: string; desc: string };
  isActive: boolean;
  onClick: () => void;
}

const WorkflowItem: React.FC<WorkflowItemProps> = ({
  step,
  isActive,
  onClick,
}) => {
  const MinusIcon = FiMinus as React.ElementType;
  const PlusIcon = FiPlus as React.ElementType;

  return (
    <div
      className="border-b border-gray-200 py-3 cursor-pointer transition-all"
      onClick={onClick}
    >
      {/* Tiêu đề + Icon */}
      <div className="flex justify-between items-center">
        <p className="text-dark font-semibold">{step.title}</p>
        {isActive ? (
          <MinusIcon className="text-secondary" size={18} />
        ) : (
          <PlusIcon className="text-secondary" size={18} />
        )}
      </div>

      {/* Mô tả khi mở */}
      {isActive && (
        <p className="mt-2 text-sm text-muted transition-all duration-300">
          {step.desc}
        </p>
      )}
    </div>
  );
};

export default WorkflowItem;
