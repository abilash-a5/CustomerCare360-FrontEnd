// import Navbar from "../components/layout/Navbar";
//import Footer from "../components/layout/Footer";
import SearchBar from "../components/serviceorder/SearchBar";
import ServiceCard from "../components/serviceorder/ServiceCard";

import {
  Zap,
  Flame,
  Droplets,
  Wifi,
  Sun,
  Cable,
} from "lucide-react";

function ServiceOrderManagement() {

  const services = [
    {
      title: "Electricity Service",
      description:
        "Apply for new connections and maintenance requests.", icon: <Zap className="text-[#DE638A]" />,
    },

    {
      title: "Gas Service",
      description:
        "Manage gas supply and installation requests.", icon: <Flame className="text-[#DE638A]" />,
    },

    {
      title: "Water Service",
      description:
        "Request water connection and service support.", icon: <Droplets className="text-[#DE638A]" />,
    }
    
  ];

  return (
    <div className="min-h-screen bg-[#F3D9E5]">

      {/* <Navbar /> */}

      <section className="bg-gradient-to-r from-[#4A3267] to-[#DE638A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-white">

        <p className="uppercase tracking-[4px] text-sm text-[#F7B9C4]">
        Service Order Management
        </p>

        <h1 className="mt-3 text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
        Book & Track Utility Services
        </h1>

        <p className="mt-5 text-lg text-white/85 max-w-3xl">
        Create and manage service orders from a centralized customer
        portal with real-time tracking and status monitoring.
        </p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">

        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
                <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                />
            ))}
        </div>
      </div>

      {/* <Footer /> */}

    </div>
  );
}

export default ServiceOrderManagement;