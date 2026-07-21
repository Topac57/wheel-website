import type { ComponentType } from "react";

import Home from "./Home";
import Reifenwechsel from "./leistungen/Reifenwechsel";
import Reifenmontage from "./leistungen/Reifenmontage";
import Auswuchten from "./leistungen/Auswuchten";
import BremssattelLackierung from "./leistungen/BremssattelLackierung";
import FelgenInstandsetzung from "./leistungen/FelgenInstandsetzung";
import ReifenAnVerkauf from "./leistungen/ReifenAnVerkauf";
import Pannendienst from "./leistungen/Pannendienst";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import AGB from "./AGB";

/**
 * Gleiche Routentabelle wie `registry.ts`, nur mit statischen Imports: Dieses
 * Modul läuft ausschließlich beim Vorrendern in Node und wird nie an den
 * Browser ausgeliefert — Bündelgröße spielt hier also keine Rolle.
 */
export const pageComponents: Record<string, ComponentType> = {
  "/": Home,
  "/leistungen/reifenwechsel": Reifenwechsel,
  "/leistungen/reifenmontage": Reifenmontage,
  "/leistungen/auswuchten": Auswuchten,
  "/leistungen/bremssattel-lackierung": BremssattelLackierung,
  "/leistungen/felgen-instandsetzung": FelgenInstandsetzung,
  "/leistungen/reifen-an-verkauf": ReifenAnVerkauf,
  "/leistungen/pannendienst-24-7": Pannendienst,
  "/impressum": Impressum,
  "/datenschutz": Datenschutz,
  "/agb": AGB,
};
