// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";

// export default function SplashScreen() {
//   const [visible, setVisible] = useState(false);
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     if (!(window as any).__splash_once__) {
//       (window as any).__splash_once__ = true;

//       setVisible(true);

//       const show = setTimeout(() => setShowText(true), 300);
//       const hide = setTimeout(() => {
//         setShowText(false);
//         setVisible(false);
//       }, 2600);

//       return () => {
//         clearTimeout(show);
//         clearTimeout(hide);
//       };
//     }
//   }, []);

//   const company = "PT. Kreatif System Indonesia";
//   const tagline = "Security Technology Solutions";

//   const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

//   const charVariants: Variants = {
//     hidden: { opacity: 0, y: 12 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.4 + i * 0.03,
//         duration: 0.45,
//         ease: EASE,
//       },
//     }),
//   };

//   const wordVariants: Variants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 1.1 + i * 0.08,
//         duration: 0.35,
//         ease: EASE,
//       },
//     }),
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {visible && (
//         <motion.div
//           className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
//           exit={{ opacity: 0, transition: { duration: 0.6 } }}
//         >
//           {/* Grid background */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[3rem_3rem]" />

//           <div className="relative z-10 px-6 text-center">
//             <AnimatePresence>
//               {showText && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="space-y-4"
//                 >
//                   {/* Company Name */}
//                   <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//                     {company.split("").map((char, i) => (
//                       <motion.span
//                         key={i}
//                         custom={i}
//                         variants={charVariants}
//                         initial="hidden"
//                         animate="visible"
//                         className="inline-block"
//                       >
//                         {char === " " ? "\u00A0" : char}
//                       </motion.span>
//                     ))}
//                   </h1>

//                   {/* Subtitle with lines */}
//                   <div className="flex items-center justify-center gap-3">
//                     <motion.span
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ delay: 1, duration: 0.3, ease: EASE }}
//                       className="h-px w-10 sm:w-14 bg-white/30 origin-right"
//                     />

//                     <div className="flex gap-2 text-white/60 text-[10px] sm:text-xs tracking-widest uppercase">
//                       {tagline.split(" ").map((word, i) => (
//                         <motion.span
//                           key={i}
//                           custom={i}
//                           variants={wordVariants}
//                           initial="hidden"
//                           animate="visible"
//                         >
//                           {word}
//                         </motion.span>
//                       ))}
//                     </div>

//                     <motion.span
//                       initial={{ scaleX: 0 }}
//                       animate={{ scaleX: 1 }}
//                       transition={{ delay: 1, duration: 0.3, ease: EASE }}
//                       className="h-px w-10 sm:w-14 bg-white/30 origin-left"
//                     />
//                   </div>

//                   {/* Loading */}
//                   <div className="flex justify-center gap-2 pt-4">
//                     {[0, 1, 2].map((i) => (
//                       <motion.div
//                         key={i}
//                         className="w-2 h-2 rounded-full bg-white"
//                         animate={{
//                           scale: [1, 1.3, 1],
//                           opacity: [0.4, 1, 0.4],
//                         }}
//                         transition={{
//                           duration: 1.2,
//                           repeat: Infinity,
//                           delay: i * 0.15,
//                           ease: "easeInOut",
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
