import { mkdirSync, writeFileSync } from "node:fs";

const first = "My husband takes his coffee with two sugars and stirs counterclockwise exactly five times. ";
const second = "Last month he began stirring six, and when I asked why, he said I had always counted wrong.";
const story = first + second;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
