import { FaChalkboardTeacher, FaUserGraduate, FaUserShield } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";

const AboutUs = () => {
  return (
    <section className="bg-[#171829] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-gray-400 text-2xl md:text-4xl font-bold mb-6">
          About the Platform
        </h2>
        <p className="md:w-3/5 text-gray-500 text-xs mx-auto mb-12">
          This platform is a secure, role-based learning management system built for students, tutors, and admins. It enables tutors to create and manage sessions, admins to review and approve content, and students to book focused learning sessions — all in one place.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <FaChalkboardTeacher className="text-4xl text-[#1CAB55] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tutor Tools</h3>
            <p className="text-gray-600 text-sm">
              Tutors can create study sessions, upload learning materials, and manage their sessions efficiently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <FaUserShield className="text-4xl text-[#1CAB55] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Admin Controls</h3>
            <p className="text-gray-600 text-sm">
              Admins can review and approve sessions to maintain quality and monitor platform activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <FaUserGraduate className="text-4xl text-[#1CAB55] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Access</h3>
            <p className="text-gray-600 text-sm">
              Students can search, book, and attend sessions tailored to their learning needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <MdOutlineSecurity className="text-4xl text-[#1CAB55] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Login</h3>
            <p className="text-gray-600 text-sm">
              Uses JWT and role-based authentication to protect user data and access.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <AiOutlineSchedule className="text-4xl text-[#1CAB55] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Session Booking</h3>
            <p className="text-gray-600 text-sm">
              Students can book sessions anytime based on their preferences and availability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <MdOutlineLibraryBooks className="text-4xl text-[#1CAB55] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Learning Materials</h3>
            <p className="text-gray-600 text-sm">
              Tutors can upload study content, and students get instant access after booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
