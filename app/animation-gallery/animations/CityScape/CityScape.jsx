"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
// import "./cityScape.scss";
import { gsap } from "gsap";
import { Box } from "@mond-design-system/theme";

const CityScape = ({ mode }) => {
  const duration = 4;
  const orbEase = "power4.out";
  const rootRef = useRef(null);

  useEffect(() => {
    const can = document.querySelector("#moon");
    if (!can) return;

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }

    const randomX = random(1, 2);
    const randomY = random(2, 3);
    const randomDelay = random(0, 1);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(8, 12);

    const ctx = gsap.context(() => {
      gsap.set(can, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });

      function rotate(target, direction) {
        gsap.to(target, {
          rotation: randomAngle(direction),
          delay: randomDelay(),
          duration: randomTime2(),
          ease: "sine.inOut",
          onComplete: rotate,
          onCompleteParams: [target, direction * -1],
        });
      }

      function moveX(target, direction) {
        gsap.to(target, {
          x: randomX(direction),
          duration: randomTime(),
          ease: "sine.inOut",
          onComplete: moveX,
          onCompleteParams: [target, direction * -1],
        });
      }

      function moveY(target, direction) {
        gsap.to(target, {
          y: randomY(direction),
          duration: randomTime(),
          ease: "sine.inOut",
          onComplete: moveY,
          onCompleteParams: [target, direction * -1],
        });
      }

      moveX(can, 1);
      /* moveY(can, -1); */
      rotate(can, 1);
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const stars = [
      "#star1",
      "#star2",
      "#star3",
      "#star4",
      "#star5",
      "#star6",
      "#star7",
      "#star8",
      "#star9",
      "#star10",
    ];
    let ctx = gsap.context(() => {
      // Always set clouds to stable position (no clearProps to avoid conflicts)
      gsap.set(".cityscape-cloud", { x: 0, y: 0, scale: 1, rotation: 0 });

      if (mode === "night") {
        // Set initial star state before animating
        gsap.set(stars, { opacity: 1 });
        // Ensure clouds stay stationary and start fade out from current state
        gsap.set(".cityscape-cloud", { x: 0, y: 0 });

        let tl = gsap.timeline({ repeat: -1 });

        stars.forEach((star) => {
          tl.add(
            gsap.to(star, {
              opacity: 0,
              /* duration: 0.2, */
              duration: Math.random() * 10,
              repeat: 7,
              yoyo: true,
              ease: "elastic",
            }),
            0,
          );
        });

        gsap.fromTo(
          ["#nightlight", "#window_on"],
          { opacity: 0 },
          {
            opacity: 1,
            duration: duration,
          },
        );
        gsap.to([".cityscape-cloud", "#daylight", "#window_off"], {
          opacity: 0,
          duration: duration,
        });
        gsap.fromTo(
          "#sun",
          { y: 0 },
          { y: 50, opacity: 0, duration: duration, ease: orbEase },
        );
        gsap.fromTo(
          "#moon",
          { y: 50 },
          { y: 0, opacity: 1, duration: duration, ease: orbEase },
        );
      }

      if (mode === "day") {
        // Ensure clouds stay stationary
        gsap.set(".cityscape-cloud", { x: 0, y: 0 });

        gsap.to(stars, {
          opacity: 0,
          duration: 1,
        });
        gsap.fromTo(
          ["#nightlight", "#window_on"],
          { opacity: 1 },
          {
            opacity: 0,
            duration: duration,
          },
        );
        gsap.fromTo(
          [".cityscape-cloud", "#daylight", "#window_off"],
          { opacity: 0 },
          {
            opacity: 1,
            duration: duration,
          },
        );
        gsap.fromTo(
          "#sun",
          { y: 50 },
          { y: 0, opacity: 1, duration: duration, ease: orbEase },
        );
        gsap.to("#sun", {
          transformOrigin: "center",
          rotation: 360,
          repeat: -1,
          duration: 60,
        });
        gsap.fromTo(
          "#moon",
          { y: 0 },
          { y: 50, opacity: 0, duration: duration, ease: orbEase },
        );
      }
    }, rootRef); // scope selector text

    return () => ctx.revert(); // cleanup!
  }, [mode]);

  return (
    <Box
      ref={rootRef}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="two-thirds"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 105.26 105.24"
        width="100%"
        height="100%"
      >
        <g id="background">
          <path
            id="nightlight"
            d="M112.58,60A52.62,52.62,0,1,1,60,7.37,52.62,52.62,0,0,1,112.58,60Z"
            transform="translate(-7.35 -7.37)"
            fill="#1a3a47"
          />
          <path
            id="daylight"
            d="M112.61,60A52.61,52.61,0,1,1,60,7.39,52.6,52.6,0,0,1,112.61,60Z"
            transform="translate(-7.35 -7.37)"
            fill="#80deea"
          />
        </g>
        <g id="night">
          <g id="stars">
            <path
              id="star1"
              d="M38.64,37.15a.87.87,0,0,1,.72.72s0,0,0,0a.85.85,0,0,1,.71-.72s0,0,0,0a.85.85,0,0,1-.71-.71s0,0,0,0a.87.87,0,0,1-.72.71S38.63,37.15,38.64,37.15Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star2"
              d="M25.12,45.1a.69.69,0,0,1,.58.57h0a.69.69,0,0,1,.57-.57s0,0,0,0a.69.69,0,0,1-.57-.57h0a.68.68,0,0,1-.58.57S25.11,45.1,25.12,45.1Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star3"
              d="M20.62,34.49a1,1,0,0,1,.86.86h0a1,1,0,0,1,.85-.86s0,0,0,0a1,1,0,0,1-.85-.86s0,0,0,0a1,1,0,0,1-.86.86S20.61,34.49,20.62,34.49Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star4"
              d="M52.4,25a1,1,0,0,1,.86.85s0,0,0,0a1,1,0,0,1,.86-.85s0,0,0,0a1,1,0,0,1-.86-.86s0,0,0,0a1,1,0,0,1-.86.86S52.39,25,52.4,25Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star5"
              d="M48.23,18.86a.87.87,0,0,1,.72.72s0,0,0,0a.85.85,0,0,1,.71-.72s0,0,0,0a.83.83,0,0,1-.71-.71h0a.85.85,0,0,1-.72.71S48.22,18.86,48.23,18.86Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star6"
              d="M31.79,23.34a.67.67,0,0,1,.57.57s0,0,0,0a.67.67,0,0,1,.57-.57s0,0,0,0a.68.68,0,0,1-.57-.57s0,0,0,0a.68.68,0,0,1-.57.57S31.78,23.34,31.79,23.34Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star7"
              d="M69.71,47.38a.69.69,0,0,1,.57.57s0,0,0,0a.68.68,0,0,1,.57-.57s0,0,0,0a.68.68,0,0,1-.57-.57h0a.69.69,0,0,1-.57.57S69.7,47.38,69.71,47.38Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star8"
              d="M66.83,48.18a.69.69,0,0,1,.57.58s0,0,0,0a.68.68,0,0,1,.57-.58s0,0,0,0a.68.68,0,0,1-.57-.57h0a.69.69,0,0,1-.57.57S66.82,48.18,66.83,48.18Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star9"
              d="M99.73,40.25a.68.68,0,0,1,.58.57h0a.68.68,0,0,1,.57-.57s0,0,0,0a.7.7,0,0,1-.57-.57h0a.7.7,0,0,1-.58.57S99.72,40.24,99.73,40.25Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
            <path
              id="star10"
              d="M95.8,31.1a.7.7,0,0,1,.57.57h0A.68.68,0,0,1,97,31.1s0,0,0,0a.68.68,0,0,1-.57-.58s0,0,0,0a.7.7,0,0,1-.57.58S95.79,31.1,95.8,31.1Z"
              transform="translate(-7.35 -7.37)"
              fill="#fbd490"
              stroke="#f0c419"
              strokeMiterlimit="10"
              strokeWidth="0.25"
            />
          </g>
          <g id="moon">
            <circle cx="64.67" cy="20.7" r="14.4" fill="#dcf9f6" />
            <path
              d="M84.26,28.07c0,7.92-4.32,14.4-12.24,14.4a14.4,14.4,0,1,1,0-28.8C79.94,13.67,84.26,20.15,84.26,28.07Z"
              transform="translate(-7.35 -7.37)"
              fill="#95bfb9"
            />
            <g>
              <circle cx="54.66" cy="13.07" r="0.86" fill="#78a8a0" />
              <circle cx="53.44" cy="16.31" r="0.14" fill="#78a8a0" />
              <circle cx="59.27" cy="18.18" r="2.66" fill="#78a8a0" />
              <circle cx="60.42" cy="12.35" r="0.72" fill="#78a8a0" />
              <circle cx="65.39" cy="11.99" r="0.22" fill="#78a8a0" />
              <circle cx="67.26" cy="9.54" r="0.22" fill="#78a8a0" />
              <circle cx="60.35" cy="9.68" r="0.36" fill="#78a8a0" />
              <circle cx="63.23" cy="8.46" r="0.14" fill="#78a8a0" />
              <circle cx="66.54" cy="16.74" r="0.58" fill="#78a8a0" />
              <circle cx="70.86" cy="16.38" r="0.36" fill="#78a8a0" />
              <circle cx="71.8" cy="12.27" r="0.58" fill="#78a8a0" />
              <circle cx="69.28" cy="23.87" r="1.58" fill="#78a8a0" />
              <circle cx="56.24" cy="24.8" r="0.5" fill="#78a8a0" />
              <circle cx="61.43" cy="22.64" r="0.22" fill="#78a8a0" />
              <circle cx="63.95" cy="28.04" r="0.86" fill="#78a8a0" />
              <circle cx="53.44" cy="21.13" r="0.58" fill="#78a8a0" />
              <circle cx="66.25" cy="20.77" r="0.14" fill="#78a8a0" />
              <circle cx="73.16" cy="21.06" r="0.36" fill="#78a8a0" />
              <circle cx="57.9" cy="28.76" r="0.86" fill="#78a8a0" />
              <circle cx="59.63" cy="25.67" r="0.29" fill="#78a8a0" />
              <circle cx="68.56" cy="29.05" r="0.29" fill="#78a8a0" />
              <circle cx="63.95" cy="31.43" r="0.22" fill="#78a8a0" />
              <circle cx="60.35" cy="31.07" r="0.14" fill="#78a8a0" />
              <circle cx="72.16" cy="27.75" r="0.58" fill="#78a8a0" />
              <circle cx="67.76" cy="32" r="0.36" fill="#78a8a0" />
              <circle cx="64.31" cy="24.23" r="0.29" fill="#78a8a0" />
              <circle cx="74.03" cy="25.23" r="0.58" fill="#78a8a0" />
              <circle cx="54.3" cy="27.32" r="0.5" fill="#78a8a0" />
              <circle cx="70.07" cy="19.91" r="0.65" fill="#78a8a0" />
            </g>
          </g>
        </g>
        <g id="day">
          <g id="sun">
            <g>
              <circle cx="64.67" cy="20.55" r="11.62" fill="#ffe100" />
              <path
                d="M86.89,27.92c0-1-2.46-1.71-2.63-2.52S86.1,23,85.72,22.13s-2.89-.53-3.34-1.2.82-2.86.15-3.53-2.87.61-3.53.16-.31-3-1.2-3.35-2.46,1.64-3.27,1.47S73,13.05,72,13.05s-1.7,2.47-2.52,2.63-2.38-1.84-3.27-1.46-.53,2.9-1.2,3.35-2.86-.83-3.53-.16.61,2.87.16,3.53-3,.31-3.34,1.2,1.63,2.46,1.46,3.27-2.63,1.5-2.63,2.52,2.47,1.71,2.64,2.52-1.85,2.38-1.47,3.27,2.9.53,3.35,1.2-.83,2.86-.16,3.53,2.87-.61,3.54-.16.3,3,1.19,3.35S68.69,40,69.5,40.17,71,42.8,72,42.8s1.71-2.47,2.52-2.63,2.39,1.84,3.27,1.46.53-2.9,1.2-3.35,2.86.83,3.53.16-.61-2.87-.16-3.53,3-.31,3.35-1.2-1.64-2.46-1.47-3.27S86.89,28.94,86.89,27.92ZM72,39.09A11.17,11.17,0,1,1,83.18,27.92,11.16,11.16,0,0,1,72,39.09Z"
                transform="translate(-7.35 -7.37)"
                fill="#f98b00"
              />
            </g>
          </g>
          <g id="cloud">
            <g className="cityscape-cloud" data-name="cloud 3">
              <path
                d="M32.62,37a4.38,4.38,0,0,0-4.35-3.92,4.49,4.49,0,0,0-1.22.17A4.39,4.39,0,0,1,30.19,37a2.45,2.45,0,0,1-.91,4.75h2.43A2.45,2.45,0,0,0,32.62,37Z"
                transform="translate(-7.35 -7.37)"
                fill="#f0f0f0"
              />
              <path
                d="M31.78,39.28A2.47,2.47,0,0,0,30.19,37a4.38,4.38,0,0,0-3.14-3.74,4.51,4.51,0,0,0-2,1.25,2.75,2.75,0,0,0-1-.2,2.85,2.85,0,0,0-2.83,2.55,2.46,2.46,0,0,0,.2,4.91h7.9A2.47,2.47,0,0,0,31.78,39.28Z"
                transform="translate(-7.35 -7.37)"
                fill="#fff"
              />
            </g>
            <g className="cityscape-cloud" data-name="cloud 2">
              <path
                d="M51.38,26.24a4.38,4.38,0,0,0-5.56-3.74A4.37,4.37,0,0,1,49,26.24,2.46,2.46,0,0,1,48,31h2.43a2.46,2.46,0,0,0,.91-4.76Z"
                transform="translate(-7.35 -7.37)"
                fill="#f0f0f0"
              />
              <path
                d="M50.54,28.54A2.47,2.47,0,0,0,49,26.23a4.37,4.37,0,0,0-3.13-3.74,4.38,4.38,0,0,0-2,1.24,2.94,2.94,0,0,0-1-.19,2.86,2.86,0,0,0-2.84,2.54A2.46,2.46,0,0,0,40.15,31H48A2.47,2.47,0,0,0,50.54,28.54Z"
                transform="translate(-7.35 -7.37)"
                fill="#fff"
              />
            </g>
            <g className="cityscape-cloud" data-name="cloud 1">
              <path
                d="M103.07,47A4.36,4.36,0,0,0,98.72,43a4.42,4.42,0,0,0-1.21.17A4.38,4.38,0,0,1,100.64,47a2.44,2.44,0,0,1,1.6,2.29,2.47,2.47,0,0,1-2.5,2.46h2.43a2.47,2.47,0,0,0,2.5-2.46A2.44,2.44,0,0,0,103.07,47Z"
                transform="translate(-7.35 -7.37)"
                fill="#f0f0f0"
              />
              <path
                d="M102.24,49.25a2.47,2.47,0,0,0-1.6-2.31,4.37,4.37,0,0,0-3.13-3.74,4.38,4.38,0,0,0-2,1.24,3,3,0,0,0-1-.19,2.86,2.86,0,0,0-2.84,2.54,2.46,2.46,0,0,0,.21,4.92h7.9A2.47,2.47,0,0,0,102.24,49.25Z"
                transform="translate(-7.35 -7.37)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
        <g id="Layer_6" data-name="Layer 6">
          <path
            id="path15473"
            d="M19.22,46.88,8.33,57.5c0,.56-.06,1.13-.08,1.7,0,28,23.26,50.63,52,50.63a52.11,52.11,0,0,0,46.53-28.27L78,50.3,59.35,69.47Z"
            transform="translate(-7.35 -7.37)"
            fill="#009688"
            fillRule="evenodd"
          />
          <path
            id="path15477"
            d="M50.44,34.29,10.35,73.37C16.81,95,37.12,109.82,60.2,109.83c23.64,0,44.28-15.61,50.21-37.92L84,46.21,76.22,59.42Z"
            transform="translate(-7.35 -7.37)"
            fill="#00897b"
            fillRule="evenodd"
          />
        </g>
        <g id="back_buildings" data-name="back buildings">
          <path
            id="path16014"
            d="M43.63,49.82v18.6H36.87l-28.62.94a52.57,52.57,0,0,0,101.61,7.3h-7.25v-18H92.89V79.83H80V65.46H72.17V58.91H65V78.78H53.57v-29Z"
            transform="translate(-7.35 -7.37)"
            fill="#37474f"
            fillRule="evenodd"
          />
        </g>
        <g id="front_buildings" data-name="front buildings">
          <path
            id="path16016"
            d="M96.9,50V75.82H91.2V68.63H88V50.88H78.94V87h-4V79.2H65V70.74H59.36v-19l-10,5.78V75.82H42.26V91.25h-5.6V65h-8V57H7.54c-.08,1-.13,2-.15,3a52.61,52.61,0,0,0,105.22,0c0-1.42-.07-2.85-.19-4.26h-8.33V50Z"
            transform="translate(-7.35 -7.37)"
            fill="#263238"
            fillRule="evenodd"
          />
        </g>
        <g id="windows">
          <g id="window_on" data-name="window on">
            <path
              className="windowson"
              id="rect16032"
              d="M102.18,64.48h2.18v1.94h-2.18Z"
              transform="translate(-7.35 -7.37)"
              fill="#d3dd4e"
            />
            <path
              className="windowson"
              id="rect16032-2"
              data-name="rect16032"
              d="M54.87,68.48H57v1.94H54.87Z"
              transform="translate(-7.35 -7.37)"
              fill="#d3dd4e"
            />
            <path
              className="windowson"
              id="rect16032-3"
              data-name="rect16032"
              d="M29.43,86.14H31.6v2H29.43Z"
              transform="translate(-7.35 -7.37)"
              fill="#d3dd4e"
            />
            <path
              className="windowson"
              id="rect16032-4"
              data-name="rect16032"
              d="M88.25,81.51h2.17v1.95H88.25Z"
              transform="translate(-7.35 -7.37)"
              fill="#d3dd4e"
            />
            <path
              className="windowson"
              id="rect16032-5"
              data-name="rect16032"
              d="M80.16,54.16h2.18V56.1H80.16Z"
              transform="translate(-7.35 -7.37)"
              fill="#d3dd4e"
            />
            <path
              className="windowson"
              id="rect16032-6"
              data-name="rect16032"
              d="M12.68,66.54h2.18v1.94H12.68Z"
              transform="translate(-7.35 -7.37)"
              fill="#d3dd4e"
            />
            <path
              className="windowson"
              id="rect16032-7"
              data-name="rect16032"
              d="M22.38,61.19h2.17v1.94H22.38Z"
              transform="translate(-7.35 -7.37)"
              fill="#d3dd4e"
            />
          </g>
          <g id="window_off" data-name="window off">
            <path
              id="rect16036"
              d="M69.7,81.4h2.17v2.17H69.7Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16018"
              d="M51.1,62.38h2.17v2.17H51.1Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16020"
              d="M82.34,71.64h2.17v2.18H82.34Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16022"
              d="M84.73,54.75H86.9v2.18H84.73Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16024"
              d="M12.68,60.88h2.18v2.17H12.68Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16026"
              d="M29.43,71.05H31.6v2.17H29.43Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16028"
              d="M44.22,78.37H46.4v2.17H44.22Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16030"
              d="M99.23,53h2.17v2.17H99.23Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16032-8"
              data-name="rect16032"
              d="M106.7,60h2.17v2.18H106.7Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
            <path
              id="rect16034"
              d="M60.4,74.42h2.17V76.6H60.4Z"
              transform="translate(-7.35 -7.37)"
              fill="#37474f"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
};
export default CityScape;
