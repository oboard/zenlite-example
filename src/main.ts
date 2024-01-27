import "./style.css";
import { ZenLiter } from "zenlite";
import "zenlite/dist/index.css";

new ZenLiter(import.meta.glob("./**/*.zlt", { as: "raw", eager: true }));
