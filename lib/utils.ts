import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}



// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <title>Hero — sliding word animation</title>
// <style>
//   :root {
//     --bg: #333538;
//     --text-primary: #f5f5f4;
//     --text-muted: #8a8d91;
//     --accent-yellow: #f4c542;
//     --accent-blue: #6ea8e0;
//     --border: rgba(255,255,255,0.08);
//   }

//   * { box-sizing: border-box; }

//   html, body {
//     margin: 0;
//     height: 100%;
//     background: var(--bg);
//     font-family: -apple-system, "Inter", "Helvetica Neue", Arial, sans-serif;
//   }

//   .hero {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 40px 24px;
//   }

//   .card {
//     width: 100%;
//     max-width: 760px;
//     border: 1px solid var(--border);
//   }

//   .badge-row {
//     text-align: center;
//     padding: 28px 24px 20px;
//     border-bottom: 1px solid var(--border);
//   }

//   .badge {
//     display: inline-block;
//     background: var(--accent-yellow);
//     color: #1a1a1a;
//     font-size: 11px;
//     font-weight: 700;
//     letter-spacing: 0.06em;
//     padding: 6px 14px;
//     border-radius: 4px;
//     text-transform: uppercase;
//   }

//   .headline-row {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     border-bottom: 1px solid var(--border);
//   }

//   .headline-left,
//   .headline-right {
//     padding: 36px 32px;
//     display: flex;
//     align-items: center;
//   }

//   .headline-left {
//     border-right: 1px solid var(--border);
//   }

//   .headline-left h1 {
//     margin: 0;
//     font-size: clamp(28px, 4vw, 40px);
//     font-weight: 600;
//     color: var(--text-primary);
//     letter-spacing: -0.01em;
//     line-height: 1.1;
//   }

//   /* --- the sliding word component --- */
//   .word-slot {
//     height: 1.1em;
//     overflow: hidden;
//     line-height: 1.1;
//   }

//   .word-slot ul {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     animation: slide-words 4s infinite;
//   }

//   .word-slot li {
//     height: 1.1em;
//     display: flex;
//     align-items: center;
//     font-size: clamp(28px, 4vw, 40px);
//     font-weight: 600;
//     color: var(--text-muted);
//     letter-spacing: -0.01em;
//     white-space: nowrap;
//   }

//   @keyframes slide-words {
//     0%   { transform: translateY(0%); }
//     40%  { transform: translateY(0%); }
//     50%  { transform: translateY(-100%); }
//     90%  { transform: translateY(-100%); }
//     100% { transform: translateY(-200%); }
//   }

//   @media (prefers-reduced-motion: reduce) {
//     .word-slot ul {
//       animation: none;
//     }
//   }

//   .cta-row {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 20px;
//     padding: 28px 24px;
//   }

//   .btn-primary {
//     background: var(--accent-blue);
//     color: #14213d;
//     font-size: 14px;
//     font-weight: 600;
//     padding: 10px 20px;
//     border-radius: 6px;
//     border: none;
//     cursor: pointer;
//   }

//   .btn-secondary {
//     background: none;
//     border: none;
//     color: var(--text-primary);
//     font-size: 14px;
//     font-weight: 500;
//     cursor: pointer;
//   }

//   @media (max-width: 560px) {
//     .headline-row { grid-template-columns: 1fr; }
//     .headline-left { border-right: none; border-bottom: 1px solid var(--border); }
//   }
// </style>
// </head>
// <body>

//   <div class="hero">
//     <div class="card">
//       <div class="badge-row">
//         <span class="badge">Ready to start?</span>
//       </div>

//       <div class="headline-row">
//         <div class="headline-left">
//           <h1>Turn strategy into</h1>
//         </div>
//         <div class="headline-right">
//           <div class="word-slot">
//             <ul>
//               <li>Execution.</li>
//               <li>Alignment.</li>
//               <li>Execution.</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div class="cta-row">
//         <button class="btn-primary">Start free trial</button>
//         <button class="btn-secondary">Book demo →</button>
//       </div>
//     </div>
//   </div>

// </body>
// </html>
