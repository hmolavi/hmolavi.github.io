import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import resumeData from "@/data/resume.json";

export default function Education() {
  const edu = resumeData.education;

  return (
    <section id="education" className="py-20">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        <SectionHeading title="Education" />

        <div className="border border-border rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-primary text-lg font-medium">{edu.degree}</p>
              <p className="text-base text-muted-foreground mb-4">
                {edu.startDate} - {edu.endDate} | {edu.location}
              </p>

              <h4 className="text-base font-semibold mb-3">Relevant Courses</h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    className="text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
