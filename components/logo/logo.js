import Link from "next/link";
import { motion } from "framer-motion";
import LogoWhite from "../../public/images/logo-white.png";
import styles from "./logo.module.scss";

export default function Logo({ variant }) {
  const pathVariant = {
    hidden: {
      // opacity: 0,
      pathLength: 0,
    },
    visible: {
      // opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  if (variant === "purple")
    return (
      <Link href="/">
        <a className={styles.container}>
          <motion.svg
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            // variants={pathVariant}
            // initial="hidden"
            // animate="visible"
            // strokeWidth={2}
            // stroke="var(--accent-color)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 694.73 197.87"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <motion.path
                  fill="#743b96"
                  d="M98.86,0A99,99,0,0,0,3.32,124.42L77.44,97.93,72.2,85.8c3.07,5.12,13.39,6,25.22,2.65A65.85,65.85,0,0,0,112,82.22c10.61-6.16,17-14.21,15.41-19.94l6.9,19.87,3.22,9.27h0a22,22,0,0,1-5.38,7.67c1.36,5.44-4.88,13-14.64,17.34-10.36,4.62-20.74,3.93-23.19-1.56a2.13,2.13,0,0,1-.11-.33c-6-.13-10.49-1.94-12-5.42l-.92-2.19L6.26,133.74A98.92,98.92,0,1,0,98.86,0ZM84.71,37.54c11.61-5,23.06-4.45,25.61,1.39s-4.84,14.59-16.45,19.65S70.81,63,68.28,57.24,73.1,42.6,84.71,37.54ZM122.92,63.4s-1.53,1.7-4,4.21c-5,5-13,14.88-31.14,16.3-3.59.28-6.31,0-11.88-1.23l-3-6.51c-5.69-2.44-10-6.57-11.7-12A18.22,18.22,0,0,1,60.67,62c2.3,3.13,6.4,5.28,11.55,6.26a36,36,0,0,0,4.86.57,49.72,49.72,0,0,0,17.24-2.46c8.62-2.74,15.74-7.29,20.15-12.33.3-.35.59-.71.88-1.07,3.38-4.3,4.78-8.9,3.47-13a10.78,10.78,0,0,0-1.07-2.31,17.89,17.89,0,0,1,4.37,7.14A19,19,0,0,1,121,58.6ZM89.86,120.72a5.33,5.33,0,0,0,.32.87,7,7,0,0,0,3.25,3.17c3.73,1.93,9.81,2,16.69.33a54.7,54.7,0,0,0,10.44-3.77,60,60,0,0,0,6.38-3.52c7.08-4.53,12-10,13.28-14.66a8,8,0,0,0,.19-3.92c-.07-.26-.15-.51-.24-.76h0l2,6.1,1.81,5.59.08.24h-.12c-1,6.17-8.82,14-19.9,19.24-13.75,6.53-27.35,6.65-30.38.27a6.06,6.06,0,0,1-.56-2.25l-3.51-6.83ZM59.32,135.05a8.93,8.93,0,0,0,2.21,5.67c5.5,6.8,20.6,11.68,38.37,11.68s32.87-4.88,38.37-11.68a9,9,0,0,0,2.22-5.67V146.4c0,9.58-18.17,17.35-40.59,17.35S59.32,156,59.32,146.4Z"
                />
                <motion.path
                  fill="#743b96"
                  d="M314.72,75.53l-35.5,39.9h36.57v14.84H255.65V116l35.67-40.86H258.1V60.49h56.62Z"
                />
                <motion.path
                  fill="#743b96"
                  d="M354.66,58.65a40,40,0,0,1,14.84,2.61,30.68,30.68,0,0,1,11.17,7.42,32.56,32.56,0,0,1,7,11.63,44.37,44.37,0,0,1,2.44,15.07,43.22,43.22,0,0,1-2.52,15.07,33.39,33.39,0,0,1-7.12,11.63,30.84,30.84,0,0,1-11.15,7.43,43.25,43.25,0,0,1-29.76-.08,31.19,31.19,0,0,1-11.24-7.5,32.42,32.42,0,0,1-7-11.63,43.53,43.53,0,0,1-2.45-14.92,41.94,41.94,0,0,1,2.53-15,33.46,33.46,0,0,1,7.11-11.56,31.58,31.58,0,0,1,11.25-7.5A39.7,39.7,0,0,1,354.66,58.65Zm0,15.61q-16.83,0-16.83,21.12t16.83,21.27q16.83,0,16.83-21.27T354.66,74.26Z"
                />
                <motion.path
                  fill="#743b96"
                  d="M452.6,75.53l-35.5,39.9h36.57v14.84H393.53V116l35.66-40.86H396V60.49H452.6Z"
                />
                <motion.path
                  fill="#743b96"
                  d="M492.54,58.65a40,40,0,0,1,14.84,2.61,30.8,30.8,0,0,1,11.18,7.42,32.79,32.79,0,0,1,7,11.63A44.87,44.87,0,0,1,528,95.38a43.23,43.23,0,0,1-2.53,15.07,33.63,33.63,0,0,1-7.12,11.63,30.71,30.71,0,0,1-11.17,7.43,43.25,43.25,0,0,1-29.76-.08,31.42,31.42,0,0,1-11.21-7.5,32.42,32.42,0,0,1-7-11.63,43.53,43.53,0,0,1-2.45-14.92,41.94,41.94,0,0,1,2.53-15,33.46,33.46,0,0,1,7.11-11.56,31.58,31.58,0,0,1,11.25-7.5A39.79,39.79,0,0,1,492.54,58.65Zm0,15.61q-16.83,0-16.83,21.12t16.83,21.27q16.83,0,16.83-21.27T492.54,74.26Z"
                />
                <motion.path
                  fill="#743b96"
                  d="M550.39,130.27H530.65V111.14h19.74Z"
                />
                <motion.path
                  fill="#743b96"
                  d="M574.72,70.74a22.73,22.73,0,0,1,8.61-8.95q5.4-3.13,13.81-3.14a27,27,0,0,1,9.22,1.53,20.73,20.73,0,0,1,7.25,4.44,20.5,20.5,0,0,1,4.8,7.27,26.87,26.87,0,0,1,1.76,10v48.36H601.8V88q0-8.12-2.67-11t-9.26-2.83q-14.39,0-14.39,16.07v39.94H557.12V60.49h17.6Z"
                />
                <motion.path
                  fill="#743b96"
                  d="M694.7,131A34.11,34.11,0,0,1,692,144.93a28.75,28.75,0,0,1-7.42,10.17,31.48,31.48,0,0,1-11,6.2,46.23,46.23,0,0,1-27.09.08,31.15,31.15,0,0,1-10.64-5.82,26.62,26.62,0,0,1-7-9.26,28.52,28.52,0,0,1-2.55-12.2h17.14q0,6.35,4.21,9.76t11.09,3.4a19.5,19.5,0,0,0,12.47-4,13.22,13.22,0,0,0,5.09-10.92V120.83a14.59,14.59,0,0,1-7.11,7.43,26.12,26.12,0,0,1-12,2.63,31,31,0,0,1-14.46-3.07,27.1,27.1,0,0,1-9.56-8,31.78,31.78,0,0,1-5.28-11.48,55.09,55.09,0,0,1-1.59-13.41,43.6,43.6,0,0,1,2.37-14.76,35.9,35.9,0,0,1,6.5-11.48,28.4,28.4,0,0,1,9.72-7.42,27.61,27.61,0,0,1,11.86-2.61q12.86,0,19.59,10.56V60.5h18.37ZM661.18,74.72q-15.76,0-15.76,21.19,0,9.32,4.44,14.8A14.6,14.6,0,0,0,670.39,113a15.27,15.27,0,0,0,2-2q4.35-5.19,4.36-14Q676.79,74.72,661.18,74.72Z"
                />
                <motion.path
                  fill="#ffffff"
                  d="M93.85,58.53c11.61-5.06,19-13.85,16.45-19.65s-14-6.39-25.59-1.34-19,13.85-16.45,19.65S82.24,63.58,93.85,58.53Z"
                />
                <motion.path
                  fill="#ffffff"
                  d="M122.11,44.77a17.89,17.89,0,0,0-4.37-7.14,10.78,10.78,0,0,1,1.07,2.31c1.31,4.12-.09,8.72-3.47,13-.29.36-.58.72-.88,1.07-4.41,5-11.53,9.59-20.15,12.33A49.74,49.74,0,0,1,77,68.78a36,36,0,0,1-4.86-.57c-5.15-1-9.25-3.13-11.55-6.26a18.22,18.22,0,0,0,.53,2.18c1.73,5.45,6,9.58,11.7,12l3,6.51c5.57,1.23,8.29,1.51,11.88,1.23,18.11-1.42,26.15-11.32,31.14-16.3,2.5-2.51,4-4.21,4-4.21l-2-4.82A19,19,0,0,0,122.11,44.77Z"
                />
                <motion.path
                  fill="#ffffff"
                  d="M81.32,106.93l.94,2.18c1.48,3.48,5.95,5.29,12,5.42a2.13,2.13,0,0,0,.11.33c2.45,5.49,12.83,6.18,23.19,1.56,9.76-4.37,16-11.9,14.64-17.34a22,22,0,0,0,5.38-7.67h0l-3.26-9.26-6.9-19.87c1.63,5.73-4.8,13.78-15.41,19.94A65.85,65.85,0,0,1,97.4,88.45c-11.83,3.39-22.15,2.47-25.22-2.65l5.26,12.13L3.32,124.42c1.49,5.62,3,9.1,3,9.33Z"
                />
                <motion.path
                  fill="#ffffff"
                  d="M142.17,104.56l-2-6.1h0c.09.25.17.5.24.76a8,8,0,0,1-.19,3.92c-1.31,4.69-6.2,10.13-13.28,14.66a60,60,0,0,1-6.38,3.52,54.7,54.7,0,0,1-10.44,3.77c-6.88,1.71-13,1.6-16.69-.33a7,7,0,0,1-3.25-3.17,5.33,5.33,0,0,1-.32-.87l-.27.13,3.51,6.83a6.06,6.06,0,0,0,.56,2.25c3,6.38,16.63,6.26,30.38-.27,11.08-5.25,18.88-13.07,19.9-19.24h.12l-.08-.24Z"
                />
                <motion.path
                  fill="#ffffff"
                  d="M99.85,152.4c-17.77,0-32.87-4.88-38.37-11.68a8.93,8.93,0,0,1-2.21-5.67V146.4c0,9.58,18.17,17.35,40.58,17.35s40.59-7.77,40.59-17.35V135.05a9,9,0,0,1-2.22,5.67C132.72,147.52,117.62,152.4,99.85,152.4Z"
                />
                <motion.polygon
                  fill="#ffffff"
                  points="137.56 91.42 137.55 91.42 137.56 91.42 137.56 91.42"
                />
              </g>
            </g>
          </motion.svg>
        </a>
      </Link>
    );
  return (
    <Link href="/">
      <a className={styles.container}>
        <motion.img src={LogoWhite.src} alt="zozo-logo" />
      </a>
    </Link>
  );
}
