import { mkdirSync, writeFileSync } from "node:fs";

// Two-sentence horror entry: exactly one line, written byte-for-byte
// with no trailing newline. The only write target is /output/entry.txt,
// so this runs cleanly in the grader's read-only sandbox.
const line =
  "My son's homework came back corrected in my handwriting. His teacher says she didn't do it — and neither did I.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
