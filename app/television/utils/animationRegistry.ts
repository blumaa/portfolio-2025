import { ComponentType } from "react";
import OctoDude from "../../animation-gallery/animations/OctoDude";
import AnimatedLoadingAirplane from "../../animation-gallery/animations/AnimatedLoadingAirplane";
import CityScapeWrapper from "../../animation-gallery/animations/CityScape/CityScapeWrapper";
import AlienMoon from "../../animation-gallery/animations/AlienMoon";
import NuclearPhysics1 from "../../animation-gallery/animations/NuclearPhysics1";
import Bird from "../../animation-gallery/animations/Bird";
import AnimatedEyeball from "@/app/animation-gallery/animations/AnimatedEyeball";
import AnimatedEyeballWatching from "@/app/animation-gallery/animations/AnimatedEyeballWatching";
import RustlingGrass from "@/app/animation-gallery/animations/RustlingGrass";
import Bus from "@/app/animation-gallery/animations/Bus";
import NoirCarChase from "@/app/animation-gallery/animations/NoirCarChase";
import AnimatedBeaverMoon from "@/app/animation-gallery/animations/AnimatedBeaverMoon";
import Modcast from "@/app/modcast/Modcast";

/**
 * Central registry for all animations displayed in the television.
 * To add a new animation, simply import it and add it to the array below.
 * The television component will automatically scale to support the new channel.
 */
export const ANIMATIONS: ComponentType<any>[] = [
  Modcast,
  AnimatedEyeballWatching,
  Bird,
  AnimatedBeaverMoon,
  NoirCarChase,
  Bus,
  OctoDude,
  AnimatedLoadingAirplane,
  CityScapeWrapper,
  AlienMoon,
  NuclearPhysics1,
  // AnimatedEyeball,
  RustlingGrass,
];
