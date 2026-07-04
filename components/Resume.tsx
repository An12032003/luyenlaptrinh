"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", percent: 85 },
  { name: "JavaScript", percent: 70 },
  { name: "React / Next.js", percent: 65 },
  { name: "Git/GitHub", percent: 75 },
];

export default function Resume() {
  return (
    <div className="max-w-2xl w-full px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            📄 Hồ sơ năng lực
          </h2>

          <a
            href="/CV.pdf"
            download
            className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors shadow-md"
          >
            ⬇ Tải CV
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500">
                  {skill.percent}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}