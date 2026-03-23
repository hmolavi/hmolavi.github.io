import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";
import resumeData from "@/data/resume.json";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        <SectionHeading title="Experience" />
        <div className="space-y-4">
          {resumeData.experience.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
