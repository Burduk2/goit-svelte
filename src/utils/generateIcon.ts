import { icons } from "./constansts.ts";

export async function generateIcon() {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    return icon;
}