import { Timeline } from "./Sub-Sections/Timeline"
import { experiences } from "./Constant/index"

const Experience = () => {
  return (
    <section className="w-full ">
      <Timeline data={experiences} />
    </section>
  )
}

export default Experience