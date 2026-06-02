"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Link from "next/link";

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col gap-4 z-50 pointer-events-none"
    >
      <div className="flex flex-col gap-4 pointer-events-auto">
        {/* WhatsApp Button (Top) */}
        <Link
          href="https://wa.me/918128695587"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center h-14 w-14 hover:w-44 bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 ease-out overflow-hidden"
          title="Chat with us on WhatsApp"
        >
          {/* Glossy 3D Reflection overlay */}
          <div className="absolute top-[3px] left-[3px] right-[3px] h-[35%] bg-gradient-to-b from-white/45 to-transparent rounded-t-full pointer-events-none z-20" />
          
          {/* Circular Icon Container */}
          <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.172-.008-.369-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.001 0C5.37 0 .001 5.368.001 11.999c0 2.115.553 4.18 1.606 5.997L0 24l6.195-1.625a11.78 11.78 0 005.806 1.559h.005c6.63 0 11.999-5.368 12.001-12.001a11.78 11.78 0 00-3.483-8.336z" />
            </svg>
          </div>
          
          {/* Slide-out Text */}
          <span className="text-white font-sans font-bold tracking-wider text-[14px] whitespace-nowrap pl-1 pr-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-x-2 group-hover:translate-x-0 z-10">
            CHAT WITH US
          </span>
        </Link>

        {/* Instagram Button (Bottom) */}
        {/* <Link
          href="https://www.instagram.com/khadija_exim"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(45deg, #f9c54b 0%, #f75240 30%, #db2997 65%, #9026bf 100%)"
          }}
          className="group relative flex items-center h-14 w-14 hover:w-44 text-white rounded-full shadow-[0_8px_24px_rgba(225,48,108,0.4)] transition-all duration-300 ease-out overflow-hidden"
          title="Follow us on Instagram"
        >
          <div className="absolute top-[3px] left-[3px] right-[3px] h-[35%] bg-gradient-to-b from-white/45 to-transparent rounded-t-full pointer-events-none z-20" />
          
          <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
            <Instagram className="h-6 w-6 text-white" />
          </div>
          
          <span className="text-white font-sans font-bold tracking-wider text-[14px] whitespace-nowrap pl-1 pr-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-x-2 group-hover:translate-x-0 z-10">
            FOLLOW US
          </span>
        </Link> */}
      </div>
    </motion.div>
  );
};

export default SocialSidebar;
