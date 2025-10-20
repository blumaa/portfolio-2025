"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppTheme } from "../../providers/AppThemeProvider";

gsap.registerPlugin(useGSAP);

export default function RustlingGrass() {
  const container = useRef<SVGSVGElement>(null);
  const stemPlantRef = useRef<SVGGElement>(null);
  const { colorScheme } = useAppTheme();
  const grassColor = colorScheme === 'dark' ? '#414A4C' : '#DDE6ED';
  const windColor = grassColor; // Wind should be the same color as grass
  const bgColor = colorScheme === 'dark' ? '#F2F3F4' : '#27374D';
  const grassOpacity = 0.9;

  useGSAP(
    () => {
      if (!container.current) return;

      // Get all individual path elements with the blade class
      const individualPaths = container.current.querySelectorAll(".blade");

      // Animate individual paths with rustling
      individualPaths.forEach((path) => {
        const randomRotation = gsap.utils.random(-10, 10);
        const randomDuration = gsap.utils.random(2, 4);
        const randomDelay = gsap.utils.random(0, 2);

        gsap.to(path, {
          rotation: randomRotation,
          transformOrigin: "50% 100%", // Rotate from bottom center
          duration: randomDuration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: randomDelay,
        });
      });

      // Animate the stem-plant group with rustling
      const randomRotation = gsap.utils.random(-10, 10);
      const randomDuration = gsap.utils.random(2, 4);
      const randomDelay = gsap.utils.random(0, 2);

      gsap.to(stemPlantRef.current, {
        rotation: randomRotation,
        transformOrigin: "50% 100%", // Rotate from bottom center
        duration: randomDuration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: randomDelay,
      });

      // Create wind streaks dynamically as paths (not lines) so we can morph their shape
      const numStreaks = 35;
      for (let i = 0; i < numStreaks; i++) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const randomY = gsap.utils.random(0, 450);
        const randomLength = gsap.utils.random(30, 200);

        // Start as a straight line
        path.setAttribute("d", `M 0,${randomY} L ${randomLength},${randomY}`);
        path.setAttribute("stroke", windColor);
        path.setAttribute("stroke-width", "2");
        path.setAttribute("stroke-linecap", "butt");
        path.setAttribute("fill", "none");
        path.classList.add("wind-streak");

        // Store the original data for animation
        path.setAttribute("data-start-y", randomY.toString());
        path.setAttribute("data-length", randomLength.toString());

        // Insert after the background circle (first child) so wind is visible
        const bgCircle = container.current.firstChild;
        if (bgCircle && bgCircle.nextSibling) {
          container.current.insertBefore(path, bgCircle.nextSibling);
        } else {
          container.current.appendChild(path);
        }
      }

      // Wind streak animations - simple short lines moving in circular paths
      const windStreaks = container.current.querySelectorAll(".wind-streak");

      windStreaks.forEach((streak) => {
        const randomDelay = gsap.utils.random(0, 5);
        const randomX = gsap.utils.random(-200, 800);
        const startY = parseFloat(streak.getAttribute("data-start-y") || "0");
        const loopRadius = gsap.utils.random(20, 35);
        const straightLength = gsap.utils.random(40, 90); // Length of straight parts

        // Create path: straight → circle → straight
        // Circle center is below the x-axis, so top of circle touches x-axis
        const startX = randomX;
        const loopStartX = startX + straightLength;

        // Circle center positioned below the line
        const centerX = loopStartX + loopRadius;
        const centerY = startY + loopRadius;

        // Only one point on the circle touches the x-axis: the top (centerX, startY)
        // Enter and exit at this point (with tiny offset for full circle)
        const circleStartX = centerX;
        const circleStartY = startY;

        const circleEndX = centerX - 0.01; // Tiny offset to complete the circle
        const circleEndY = startY;

        const endX = centerX + loopRadius + straightLength;

        // Build the full path
        // large-arc-flag=1 (full circle), sweep-flag=0 (goes down below axis)
        const fullPath = `
          M ${startX},${startY}
          L ${circleStartX},${circleStartY}
          A ${loopRadius},${loopRadius} 0 1,0 ${circleEndX},${circleEndY}
          L ${endX},${startY}
        `;

        // Calculate total path length
        const circleLength = 2 * Math.PI * loopRadius;
        const pathLength = straightLength + circleLength + straightLength;
        const visibleLength = gsap.utils.random(20, 30); // Length of visible wind streak

        // Set up the path with dasharray to show only a small segment
        gsap.set(streak, {
          attr: { d: fullPath },
          strokeDasharray: `${visibleLength} ${pathLength}`,
          strokeDashoffset: 0,
          opacity: 0
        });

        const tl = gsap.timeline({ repeat: -1, delay: randomDelay });

        // Fade in quickly
        tl.to(streak, {
          opacity: 0.6,
          duration: 0.1,
          ease: "power2.out"
        });

        // Animate the visible segment traveling along the entire path (left to right)
        // Fast at start (zoom in), slow at end (slowly go out)
        tl.to(streak, {
          strokeDashoffset: -pathLength,
          duration: 2.2,
          ease: "power2.out"
        });

        // Fade out quickly - start earlier since ease makes streak arrive early
        tl.to(streak, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        }, "-=1.4"); // Start 0.6s before movement ends

        // Pause before next cycle
        tl.to(streak, {
          duration: gsap.utils.random(0.5, 2)
        });
      });
    },
    { scope: container, dependencies: [grassColor, windColor, bgColor, grassOpacity] },
  );

  return (
    <svg
      ref={container}
      width="100%"
      height="100%"
      viewBox="-52.05 0 684.34 684.34"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <circle fill={bgColor} cx="290" cy="342" r="342" />
      <path className="blade" fill={grassColor} d="m 259.24983,450.40693 c 4.93665,-21.68821 9.28938,-43.48395 15.02229,-63.34388 19.81739,-68.64941 39.7232,-137.26298 60.443,-204.586 8.03313,-26.13337 18.31339,-48.89701 27.69127,-73.02289 0.97317,-2.47354 2.65409,-3.62066 4.58276,-3.40557 -22.68382,83.09626 -45.61537,165.83402 -67.96299,249.3963 -22.31225,83.41889 -37.21067,174.4376 -53.22381,268.36005 -5.18438,-38.28594 3.2557,-138.37428 13.44748,-173.39801 z" />
      <path className="blade" fill={grassColor} d="m 328.58318,543.48317 c 4.88129,-11.79185 9.18522,-23.64217 14.85381,-34.44 19.59514,-37.32463 39.27775,-74.62976 59.76517,-111.23323 7.94303,-14.20869 18.108,-26.58526 27.3807,-39.70247 0.96226,-1.34486 2.62435,-1.96857 4.53138,-1.85163 -22.42944,45.17937 -45.10381,90.16382 -67.20082,135.59656 -22.06203,45.35478 -36.79337,94.84158 -52.62694,145.90712 -5.12623,-20.81604 3.2192,-75.23397 13.2967,-94.27635 z" />
      <path className="blade" fill={grassColor} d="m 306.5345,513.31932 c 4.41255,-14.87609 8.30319,-29.82594 13.42744,-43.44801 17.71347,-47.08712 35.50601,-94.14965 54.02608,-140.32701 7.18028,-17.92506 16.36914,-33.53881 24.7514,-50.08692 0.86986,-1.69661 2.37234,-2.48344 4.09624,-2.33591 -20.27559,56.99631 -40.7726,113.74675 -60.7477,171.06271 -19.94347,57.21762 -33.2602,119.64801 -47.57332,184.07008 -4.63397,-26.26059 2.91007,-94.9119 12.01986,-118.93494 z" />
      <path className="blade" fill={grassColor} d="m 281.35409,565.99355 c 6.7711,-25.81491 12.74156,-51.78496 20.31328,-76.04824 13.72519,-44.04631 28.3997,-87.08406 42.65103,-130.56792 0.52613,-1.62918 0.86926,-3.45232 1.29246,-5.19789 -0.3317,-0.48488 -0.66339,-0.96975 -0.99509,-1.45463 -1.26957,2.17225 -2.61921,4.18934 -3.78586,6.51676 -20.25609,40.4582 -36.42893,86.32765 -51.00051,134.1366 -6.39366,20.96613 -12.3298,42.57227 -17.33949,64.7603 -2.5506,11.28795 -2.87086,24.45723 -3.64861,36.8895 -0.52614,8.41749 -0.10295,17.04831 -0.10295,27.01739 6.7711,-17.30043 7.83481,-37.82047 12.61574,-56.05187 z" />
      <path className="blade" fill={grassColor} d="m 226.56914,547.58249 c -6.15643,-38.11692 -11.58492,-76.46293 -18.46931,-112.28882 -12.47926,-65.03645 -25.82167,-128.58373 -38.77931,-192.78969 -0.47837,-2.40557 -0.79035,-5.09753 -1.17513,-7.67493 0.30159,-0.71594 0.60317,-1.43189 0.90475,-2.14784 1.15433,3.20745 2.38146,6.18578 3.4422,9.62231 18.41731,59.73846 33.12204,127.46686 46.37085,198.05904 5.81326,30.95747 11.21054,62.85997 15.76547,95.62162 2.31906,16.66721 2.61025,36.11226 3.31741,54.4691 0.47837,12.42881 0.0936,25.17264 0.0936,39.89246 -6.15644,-25.54492 -7.12358,-55.84371 -11.47052,-82.76325 z" />
      <path className="blade" fill={grassColor} d="m 222.25437,571.91698 c -7.25979,-28.35466 -13.66119,-56.87976 -21.77941,-83.53016 -14.71581,-48.37975 -30.44946,-95.65172 -45.72939,-143.41368 -0.56411,-1.78948 -0.932,-3.79199 -1.38574,-5.70929 0.35564,-0.53257 0.71127,-1.06516 1.0669,-1.59775 1.36121,2.38598 2.80827,4.60152 4.05912,7.15791 21.71808,44.43864 39.05822,94.82091 54.6815,147.33349 6.85512,23.02885 13.21971,46.7607 18.59098,71.13165 2.7347,12.39852 3.07806,26.86344 3.91196,40.51885 0.56412,9.24563 0.11038,18.72559 0.11038,29.67547 -7.25982,-19.00253 -8.40029,-41.5414 -13.5263,-61.56649 z" />
      <path className="blade" fill={grassColor} d="m 189.07899,592.97912 c -5.84117,-21.1649 -10.9917,-42.45701 -17.52357,-62.34979 -11.84024,-36.11232 -24.49943,-71.39776 -36.79355,-107.04893 -0.45389,-1.33573 -0.74989,-2.83047 -1.11496,-4.26161 0.28614,-0.39753 0.57228,-0.79507 0.85841,-1.19262 1.09523,1.78098 2.25952,3.43474 3.26594,5.34292 17.47424,33.17054 31.42599,70.77759 43.99638,109.97481 5.51558,17.18952 10.63649,34.90378 14.95818,53.09512 2.20032,9.25468 2.47658,20.0518 3.14754,30.24465 0.45388,6.90127 0.0888,13.97743 0.0888,22.1508 -5.84121,-14.18414 -6.75882,-31.00793 -10.88318,-45.95535 z" />
      <path className="blade" fill={grassColor} d="m 275.32835,547.82334 c -6.15643,-38.11693 -11.58492,-76.46294 -18.46931,-112.28882 -12.47926,-65.03646 -25.82166,-128.58374 -38.7793,-192.78969 -0.47837,-2.40557 -0.79035,-5.09753 -1.17514,-7.67494 0.30159,-0.71594 0.60317,-1.43188 0.90475,-2.14783 1.15433,3.20745 2.38146,6.18578 3.4422,9.62231 18.41731,59.73845 33.12204,127.46686 46.37085,198.05903 5.81326,30.95747 11.21054,62.85997 15.76547,95.62162 2.31906,16.66721 2.61025,36.11226 3.31741,54.4691 0.47837,12.42882 0.0936,25.17264 0.0936,39.89247 -6.15644,-25.54493 -7.12358,-55.84372 -11.47052,-82.76325 z" />
      <path className="blade" fill={grassColor} d="m 198.28575,580.75952 c -7.49623,-29.54198 -14.10611,-59.26151 -22.48872,-87.02784 -15.19508,-50.40557 -31.44113,-99.65697 -47.21871,-149.41887 -0.58246,-1.86441 -0.96235,-3.95077 -1.43087,-5.94836 0.36723,-0.55487 0.73444,-1.10975 1.10165,-1.66464 1.40554,2.48588 2.89973,4.79419 4.19132,7.45762 22.42539,46.29944 40.33026,98.79136 56.46235,153.50283 7.07838,23.99313 13.65025,48.7187 19.19645,74.11015 2.82375,12.91768 3.17831,27.9883 4.03937,42.2155 0.58247,9.63277 0.11397,19.50969 0.11397,30.91807 -7.49624,-19.79822 -8.67386,-43.28086 -13.96681,-64.14446 z" />
      <g
        ref={stemPlantRef}
        transform="matrix(1,0,0,0.90466101,-55.920173,13.331518)"
        id="stem-plant"
      >
        <path fill={grassColor} d="m 532.19,104.57 c 9.84,-5.39 19.34,-10.9 30.37,-13.45 -5.53,5.19 -11.11,10.32 -16.57,15.58 -9.34,9 -18.6,18.06 -27.89,27.12 -14.42,14.07 -26.25,30.28 -38.83,45.89 -18.63,23.1 -33.48,48.58 -47.81,74.35 -11.53,20.74 -22.41,41.84 -33.2,62.97 -5.35,10.48 -9.82,21.4 -14.71,32.1 -13.58,29.72 -24.79,60.35 -34.31,91.54 -4.61,15.1 -7.66,30.66 -11.28,45.46 0.02,0.16 -0.13,-0.4 -0.1,-0.96 1.21,-22.74 1.81,-45.53 3.85,-68.19 1.9,-21.09 7.25,-41.62 12.85,-62.06 10.42,-38.04 25.62,-74.11 45.07,-108.38 8.25,-14.54 17.2,-28.74 26.71,-42.51 9.56,-13.84 19.82,-27.24 32.07,-38.98 10.29,-9.86 20.21,-20.13 30.79,-29.67 13.08,-11.79 27.33,-22.07 42.99,-30.81 z" />
        <path fill={grassColor} d="m 288.31,221 c 3.3,8.83 6.87,17.27 9.77,25.94 6.28,18.77 11.55,37.85 14.5,57.44 2.84,18.87 4.58,37.87 4.5,56.98 -0.02,3.99 0,7.99 0,12.78 -0.69,-2.35 -1.13,-4.15 -1.74,-5.89 -7.36,-21.01 -14.6,-42.07 -22.17,-63 -9.62,-26.59 -19.32,-53.14 -29.33,-79.58 -12.44,-32.82 -25.71,-65.3 -42.67,-96.16 -10.27,-18.7 -22.99,-35.75 -35.96,-52.64 -0.35,-0.46 -0.63,-0.97 -1.51,-2.35 1.63,0.82 2.42,1.13 3.12,1.59 12.01,7.89 22.39,17.56 31.94,28.25 22.88,25.58 40.7,54.51 57.37,84.22 5.66,10.07 9.86,20.76 12.18,32.42 z" />
        <path fill={grassColor} d="m 335.35,201.23 c -1.03,4.16 -2.55,8.28 -3.01,12.5 -1.28,11.77 -2.62,23.58 -3.02,35.4 -0.52,15.53 -0.34,31.09 -0.16,46.64 0.52,44.65 1.08,89.3 1.83,133.95 0.44,26 1.25,51.99 1.93,77.99 0.49,18.87 0.92,37.74 1.6,56.6 1.05,28.82 2.26,57.63 3.49,86.44 0.28,6.63 0.95,13.24 1.46,20.22 -4.42,0 -8.5,0 -12.84,0 -0.31,-7.03 -0.73,-13.99 -0.9,-20.97 -1.09,-44.04 -2.25,-88.08 -3.15,-132.12 -0.62,-30.39 -0.93,-60.79 -1.25,-91.19 -0.29,-27.79 -0.75,-55.58 -0.5,-83.36 0.24,-26.36 0.79,-52.73 2.17,-79.05 1.09,-20.8 3.65,-41.53 5.6,-62.29 0.12,-1.25 0.61,-2.46 0.95,-3.77 1.86,0.99 3.6,1.92 5.58,2.94 0.26,0.1 0.22,0.07 0.22,0.07 z" />
        <path fill={grassColor} d="m 355.83,131.8 c -0.28,5.54 -0.26,10.77 -0.99,15.91 -0.3,2.11 -1.92,4.27 -3.46,5.95 -6.81,7.46 -13.82,14.75 -20.73,22.13 -1.34,1.43 -2.54,2.99 -4.44,5.25 0.42,-9.38 0.61,-17.87 1.21,-26.33 1.22,-17.39 2.53,-34.77 4.05,-52.13 1.34,-15.34 2.71,-30.69 4.65,-45.96 1.87,-14.75 4.45,-29.42 6.82,-44.1 0.34,-2.11 1.24,-4.13 1.88,-6.2 0.44,-0.05 0.88,-0.11 1.32,-0.16 1.07,3.3 2.63,6.54 3.12,9.92 1.91,13.2 4.23,26.41 5.02,39.7 1.25,20.93 1.44,41.92 1.97,62.89 0.11,4.25 -0.27,8.53 -0.42,13.13 z" />
        <path fill={grassColor} d="m 290.48,108.49 c 0.4,-3.78 1.95,-6.04 6.58,-5.87 0.85,1.88 2.09,3.87 2.69,6.04 6.49,23.39 13.22,46.73 19.09,70.28 1.69,6.77 0.86,14.16 1.03,21.27 0.02,0.97 -0.83,1.96 -1.27,2.95 -0.33,-0.07 -0.67,-0.14 -1,-0.2 0,-4.23 0,-8.47 0,-12.72 -1.09,0.3 -2.33,0.65 -4.48,1.24 -1.08,-3.97 -2.18,-7.61 -3.06,-11.3 -3.31,-13.91 -6.21,-27.92 -9.93,-41.71 -2.37,-8.79 -5.94,-17.27 -8.92,-25.9 -0.4,-1.22 -0.49,-2.53 -0.73,-4.08 z" />
        <path fill={grassColor} d="m 291.97,221.54 c -2.04,-7.23 -4.05,-14.18 -6.16,-21.47 2.99,4.01 5.58,8.07 8.76,11.63 6.4,7.17 13.25,13.94 19.62,21.14 2.36,2.67 4.24,5.91 5.68,9.17 1.16,2.64 0.43,5.44 -2.43,7.04 -2.92,1.64 -6.22,2.21 -8.55,-0.42 -4.03,-4.54 -7.87,-9.32 -11.15,-14.42 -2.45,-3.78 -3.87,-8.23 -5.77,-12.67 z" />
        <path fill={grassColor} d="m 358.77,212.42 c -2.55,2.58 -4.7,5.45 -7.57,7.05 -1.74,0.97 -4.87,0.58 -6.87,-0.31 -2.43,-1.08 -2.78,-3.8 -1.46,-6.17 2.32,-4.15 4.52,-8.43 7.35,-12.23 7.62,-10.22 15.54,-20.21 23.36,-30.29 0.34,-0.44 0.84,-0.75 1.84,-0.84 -0.79,2.38 -1.5,4.79 -2.38,7.13 -4.05,10.71 -8.12,21.4 -12.25,32.08 -0.45,1.19 -1.27,2.23 -2.02,3.58 z" />
        <path fill={grassColor} d="m 315.68,210.24 c -0.5,1.21 -0.96,2.15 -1.28,2.81 -5.8,3.36 -10.92,0.83 -12.98,-5.11 -2.46,-7.05 -4.19,-14.35 -6.1,-21.58 -1.32,-4.99 -2.24,-10.09 -3.64,-15.06 -1.39,-4.93 -3.16,-9.75 -4.03,-15.01 2.76,4.89 5.43,9.84 8.31,14.67 5.72,9.6 11.64,19.08 17.3,28.72 1.82,3.1 3.78,6.36 2.42,10.56 z" />
        <path fill={grassColor} d="m 324.64,188.51 c 6.95,-7.59 13.98,-15.11 20.83,-22.78 8.93,-10 17.59,-20.23 26.64,-30.12 5.03,-5.5 10.6,-10.5 16.09,-15.6 -18.82,23.77 -35.11,49.53 -57.11,70.29 -1.86,-0.46 -3.89,-0.96 -6.17,-1.61 -0.26,-0.15 -0.28,-0.18 -0.28,-0.18 z" />
        <path fill={grassColor} d="m 365.24,210.38 c 0.84,-1.08 1.56,-1.94 2.28,-2.81 -5.09,12.01 -7.3,25.26 -16.08,35.46 -1.95,2.27 -4.38,4.43 -7.04,5.69 -1.61,0.76 -4.42,0.27 -6.11,-0.68 -2.09,-1.18 -2.92,-3.5 -2.09,-6.2 1.98,-6.45 6.79,-10.74 11.43,-15.13 5.75,-5.46 11.65,-10.75 17.61,-16.33 z" />
        <path fill={grassColor} d="m 294.94,141 c 6.31,13.14 10.52,26.6 12.15,40.81 -0.29,0.13 -0.58,0.25 -0.87,0.38 -3.07,-6.7 -6.5,-13.27 -9.14,-20.13 -7.58,-19.73 -16.11,-38.98 -27.37,-56.96 -0.39,-0.62 -0.51,-1.42 -0.34,-2.36 10.22,11.54 18.43,24.38 25.57,38.26 z" />
        <path fill={grassColor} d="m 335.41,201.27 c -2.51,-2.91 -2.51,-6.2 -0.32,-9.01 4.04,-5.19 8.49,-10.07 12.78,-15.07 1.74,-2.02 3.5,-4.02 5.94,-5.7 -0.52,2.45 -0.88,4.95 -1.6,7.34 -1.81,6.02 -3.44,12.12 -5.8,17.93 -2.16,5.31 -4.95,6.12 -10.82,4.38 -0.24,0.09 -0.2,0.12 -0.18,0.13 z" />
        <path fill={grassColor} d="m 324.65,188.53 c 3.53,8.69 -0.77,16.99 -1.47,25.47 -0.61,7.38 -1.91,14.69 -2.89,21.89 -6.21,-6.23 -5.3,-3.64 -3.46,-13.97 1.97,-11.05 5.07,-21.89 7.75,-33.12 0.06,-0.29 0.08,-0.26 0.07,-0.27 z" />
      </g>
    </svg>
  );
}
