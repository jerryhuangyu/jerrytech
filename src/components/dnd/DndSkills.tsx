"use client"

import { techSkills } from "@/src/constants"
import { usePrefersDarkMode } from "@/src/hooks/dark-mode"
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable"
import { useEffect, useState } from "react"
import DndHint from "./DndHint"
import DndSkill from "./DndSkill"

const DndSkills = () => {
  const isDark = usePrefersDarkMode()
  const filteredTechSkills = techSkills.filter(skill => skill.dark === isDark)

  const [skills, setSkills] = useState(filteredTechSkills)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const getSkillPosition = (id: string) => {
    return skills.findIndex(skill => skill.id === id)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    // console.log("🚀 ~ handleDragEnd:", over?.id, active.id);
    if (over?.id === active.id || !over?.id) return
    const dragPos = getSkillPosition(active.id as string)
    const dropPos = getSkillPosition(over?.id as string)
    const updatedSkills = arrayMove(skills, dragPos, dropPos)
    setSkills(updatedSkills)
  }

  useEffect(() => {
    setSkills(filteredTechSkills)
  }, [isDark])

  return (
    <div className="relative">
      <DndHint />
      <DndContext collisionDetection={closestCorners} sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={skills} strategy={horizontalListSortingStrategy}>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <DndSkill key={skill.id} id={skill.id} label={skill.label} src={skill.icon} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}
export default DndSkills
