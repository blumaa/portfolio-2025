"use client";
import { Header } from "../header/header";
import AnimatedBeaverMoon from "../animation-gallery/animations/AnimatedBeaverMoon";
import "../../public/full-moon.svg"
import Image from "next/image";
import { gsap, Back, Elastic } from "gsap";
import { useState, useEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable)

const Stage = () => {
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      const url = 'https://radio-world-75-000-worldwide-fm-radio-stations.p.rapidapi.com/all_radios.php?limit=10&order=ASC&page=1&random=false';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '678f796f80msh47b2e20e8c2539fp158c97jsn00d93179943c',
          'X-RapidAPI-Host': 'radio-world-75-000-worldwide-fm-radio-stations.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log("result", result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    Draggable.create("#moon", {
      type: "rotation",
      // bounds: document.getElementById("cage"),
      inertia: true,
      onDrag: function() {
        setRotation(this.rotation % 360);
        if (rotationRef.current) {
          const verticalPosition = (this.rotation % 360) / 360 * window.innerHeight;
          gsap.to(rotationRef.current, {
            y: verticalPosition,
            duration: 0.5,
            ease: "power1.out",
          });
        }
      },
      onClick: function() {
        console.log("clicked");
      },
      onDragEnd: function() {
        console.log("drag ended");
      },
    });
  }, [])

  return (
    <>
      {/* <Header>Stage</Header> */}
      <div className="p-4 h-full flex items-center justify-center">
        <div id="cage" className="border border-violet-500 rounded-xl p-10">
          <Image id="moon" src="/full-moon.svg" alt="full moon" width="200" height="200" />
        </div>
        <p ref={rotationRef}>Rotation: {rotation.toFixed(2)} degrees</p>
      </div>
    </>
  );
};
export default Stage;
