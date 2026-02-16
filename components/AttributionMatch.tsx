'use client';
import { motion } from 'framer-motion';

export function AttributionMatch({ value = 64 }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xl w-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-bold text-gray-900">Attribution Match</h3>
      </div>
      
      {/* Progress Bar with Gradient */}
      <div className="relative h-3 w-full bg-gray-100 rounded-full mb-6 overflow-hidden">
        {/* Full Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-r from-red-500 via-yellow-400 to-green-500 rounded-full" />
        
        {/* Animated White Bubble Indicator */}
        <motion.div 
          initial={{ left: 0 }}
          animate={{ left: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-black text-gray-900 border-2 border-gray-50"
          >
            {value}
          </motion.div>
        </motion.div>

        {/* Scale Markers Below */}
        <div className="absolute -bottom-5 w-full flex justify-between text-[8px] font-semibold text-gray-300">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(n => (
            <span key={n} className="w-4 text-center">{n}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-0.5 mt-8">
        <p className="text-[11px] font-semibold text-gray-600">
          Coverage: <span className="text-gray-900 font-bold">75%</span>
        </p>
        <p className="text-[11px] font-semibold text-gray-600">
          Tagging completeness: <span className="text-gray-900 font-bold">62%</span>
        </p>
      </div>
    </div>
  );
}