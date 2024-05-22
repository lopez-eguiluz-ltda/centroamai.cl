import {
  FaBaby,
  FaAppleWhole,
  FaBrain,
  FaUserNurse,
  FaUserDoctor,
  FaPuzzlePiece,
} from "react-icons/fa6";
import { GiHand } from "react-icons/gi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import type { AmaiService } from "./types";

export const services: AmaiService[] = [
  {
    icon: FaBaby,
    service: "Pediatría",
    descriptions: [
      "Pro lactancia materna",
      "Pro crianza respetuosa",
      "Asesores de BLW",
      "Uso racional de medicamentos",
    ],
  },
  {
    icon: FaAppleWhole,
    service: "Nutrición",
    descriptions: [
      "Materno infantil",
      "Nutrición vegetariana",
      "Consejería de Lactancia",
    ],
  },
  {
    icon: FaBrain,
    service: "Psicología",
    descriptions: [
      "Psicología infanto-juvenil",
      "Experiencia en TEA",
      "Asesorías en habilidades parentales",
    ],
  },
  {
    icon: RiSpeakFill,
    service: "Fonoaudiología",
    descriptions: [
      "Experiencia en TEA",
      "Rechazo alimentario",
      "Trastornos de lenguaje, habla y deglución",
    ],
  },
  {
    icon: GiHand,
    service: "Terapia Ocupacional",
    descriptions: [
      "AVD (actividades de la vida diaria)",
      "Integración sensorial",
      "Rechazo alimentario",
    ],
  },

  {
    icon: FaUserNurse,
    service: "Matronería",
    descriptions: [
      "Consejería en salud sexual y reproductiva",
      "Consejería en anticoncepción",
      "Medicina placentaria",
    ],
  },
  {
    icon: FaUserDoctor,
    service: "Medicina General",
    descriptions: [
      "Medicina biorreguladora",
      "Medicina ortomolecular",
      "Fitoterapia clínica",
    ],
  },
  {
    icon: MdOutlinePersonalInjury,
    service: "Kinesiología",
    descriptions: [
      "Rehabilitación musculoesquelética",
      "Reintegro deportivo",
      "Masoterapia, crioterapia & ultrasonido",
      "Electroestimulación",
    ],
  },
  {
    icon: FaPuzzlePiece,
    service: "Psicopedagogía",
    descriptions: [
      "Experiencia en TEA",
      "Competencias en Evaluación de N.E.E",
      "Intervención Psicopedagógica",
      "Evaluaciones Psicopedagógicas",
    ],
  },
];
