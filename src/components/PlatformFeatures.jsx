import { FaBookOpen, FaSearch, FaChalkboardTeacher, FaUserShield, FaCalendarCheck, FaClipboardList } from "react-icons/fa";

const features = [
  {
    title: "Book Study Sessions",
    icon: <FaCalendarCheck className="text-3xl text-[#1CAB55]" />,
    description: "Students can easily book sessions based on their needs and availability.",
  },
  {
    title: "Search & Explore",
    icon: <FaSearch className="text-3xl text-[#1CAB55]" />,
    description: "Discover study sessions by topic, tutor, or schedule in a few clicks.",
  },
  {
    title: "Add Study Sessions",
    icon: <FaChalkboardTeacher className="text-3xl text-[#1CAB55]" />,
    description: "Tutors can create and manage sessions with relevant materials.",
  },
  {
    title: "Admin Approval",
    icon: <FaUserShield className="text-3xl text-[#1CAB55]" />,
    description: "Admins review and approve sessions to maintain quality standards.",
  },
  {
    title: "Manage Materials",
    icon: <FaBookOpen className="text-3xl text-[#1CAB55]" />,
    description: "Tutors can upload and manage study resources for each session.",
  },
  {
    title: "Track Bookings",
    icon: <FaClipboardList className="text-3xl text-[#1CAB55]" />,
    description: "Students and tutors can view and track upcoming sessions easily.",
  },
];

const PlatformFeatures = () => {
  return (
    <section className="bg-[#160929] py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
          What You Can Do Here
        </h2>
        <p className="text-gray-500 text-xs md:w-1/3 mx-auto ">
          Our platform is built to support learners, tutors, and admins with everything needed for a productive and secure study experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#010313] text-gray-500 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xs font-semibold text-gray-500 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-xs">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformFeatures;
