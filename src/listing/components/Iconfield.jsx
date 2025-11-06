import {
  FaClipboardList,
  FaCar,
  FaTag,
  FaDollarSign,
  FaMoneyBillAlt,
  FaCheckCircle,
  FaIndustry,
  FaCarSide,
  FaCalendarAlt,
  FaRoad,
  FaCogs,
  FaGasPump,
  FaTachometerAlt,
  FaWrench,
  FaCircle,
  FaPalette,
  FaDoorClosed,
  FaIdCard,
  FaTags,
  FaFileAlt
} from "react-icons/fa";
const iconMap = {
  FaClipboardList: <FaClipboardList/>,
  FaCar: <FaCar/>,
  FaTag: <FaTag/>,
  FaDollarSign: <FaDollarSign/>,
  FaMoneyBillAlt: <FaMoneyBillAlt/>,
  FaCheckCircle: <FaCheckCircle/>,
  FaIndustry: <FaIndustry/>,
  FaCarSide: <FaCarSide/>,
  FaCalendarAlt: <FaCalendarAlt/>,
  FaRoad: <FaRoad/>,
  FaCogs: <FaCogs/>,
  FaGasPump: <FaGasPump/>,
  FaTachometerAlt: <FaTachometerAlt/>,
  FaWrench: <FaWrench/>,
  FaCircle: <FaCircle/>,
  FaPalette: <FaPalette/>,
  FaDoorClosed: <FaDoorClosed/>,
  FaIdCard: <FaIdCard/>,
  FaTags: <FaTags/>,
  FaFileAlt: <FaFileAlt/>
};


function Iconfield({icon}) {
  return (
    <div className="rounded-full bg-blue-100 text-blue-600 p-1.5">
      {iconMap[icon]}
    </div>
  )
}

export default Iconfield
