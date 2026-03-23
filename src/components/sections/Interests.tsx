import {
  Cpu,
  Wifi,
  CircuitBoard,
  Car,
  Gamepad2,
  Mountain,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const INTERESTS = [
  { icon: Cpu, label: "Embedded Systems", description: "Firmware, RTOS, and bare-metal programming" },
  { icon: Wifi, label: "IoT & Connected Devices", description: "AWS IoT, MQTT, and smart hardware" },
  { icon: CircuitBoard, label: "PCB Design", description: "KiCad, custom boards, and prototyping" },
  { icon: Car, label: "Automotive", description: "CAN bus, solar car, and vehicle systems" },
  { icon: Gamepad2, label: "Robotics", description: "ROS, computer vision, and autonomy" },
  { icon: Mountain, label: "Outdoors", description: "Hiking, camping, and exploring" },
];

export default function Interests() {
  return (
    <section id="interests" className="py-20">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        <SectionHeading title="Interests" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {INTERESTS.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="border border-border rounded-lg p-5 hover:border-primary transition-colors text-center"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-sm mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
