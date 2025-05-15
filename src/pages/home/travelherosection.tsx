import Image from "next/image";
import { motion } from "framer-motion";

export default function TravelHeroSection() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/home/travelhero.jpg"
              alt="Mountain View"
              width={600}
              height={400}
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/home/travelhero1.jpg"
              alt="Cave View"
              width={300}
              height={250}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-xl shadow-md border border-orange-200 text-center">
            <p className="text-green-600 text-3xl font-bold leading-none">28</p>
            <p className="text-xs text-gray-500">Years of experience</p>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
            About Company
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Great opportunity for <br /> adventure & travels
          </h1>

          <ul className="space-y-4">
            {[
              {
                title: "Safety first always",
                desc: "Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.",
              },
              {
                title: "Low price & friendly",
                desc: "Quis autem vel eum iure voluptate velit esse nihil consequantur.",
              },
              {
                title: "Trusted travel guide",
                desc: "At vero accusamus dignissimos ducimus blanditiis deleniti atque quos.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
