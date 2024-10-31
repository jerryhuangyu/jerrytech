"use client";

import { techSkills } from "@/src/constants";
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import DndSkill from "./DndSkill";

const DndSkills = () => {
  const [skills, setSkills] = useState(techSkills);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const getSkillPosition = (id: string) => {
    return skills.findIndex((skill) => skill.id === id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    // console.log("🚀 ~ handleDragEnd:", over?.id, active.id);
    if (over?.id === active.id || !over?.id) return;
    const dragPos = getSkillPosition(active.id as string);
    const dropPos = getSkillPosition(over?.id as string);
    const updatedSkills = arrayMove(skills, dragPos, dropPos);
    setSkills(updatedSkills);
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={skills} strategy={horizontalListSortingStrategy}>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <DndSkill
              key={skill.id}
              id={skill.id}
              label={skill.label}
              src={skill.icon}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
export default DndSkills;
