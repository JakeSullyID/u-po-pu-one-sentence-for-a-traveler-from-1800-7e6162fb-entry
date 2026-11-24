import fs from 'node:fs';
import path from 'node:path';

// This program generates a single sentence explaining the internet as a connected network of familiar postal and library systems.
// It relies on historical concepts like roads and post offices so a nineteenth-century traveler can instantly comprehend the scale and utility.
// A unified structural metaphor bridges abstract data networks into physical intuition by mapping instant global delivery onto postal logistics.
// The sentence strictly avoids anachronistic technical terminology like computers, servers, or packets that would confuse or mislead an 1800 observer.
// Universal access is truer than physical transport because digital knowledge can be read everywhere simultaneously instead of moving between hands.

const sentence = "It is a boundless network of roads where every library and post office on earth stands joined, so any letter arrives in a blink and any book can be read by anyone.";

if (sentence.length < 1 || sentence.length > 200) {
  console.error(`Error: sentence length ${sentence.length} is out of bounds (1-200).`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, sentence, 'utf8');
