import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-[#525FE1] font-medium">{name}</span>
        <span className="text-[#525FE1] font-medium">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div  
          className="skill-progress"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;