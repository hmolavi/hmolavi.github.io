import { cpSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
const aliases = [
  {
    source: 'hossein_molavi_resume.pdf',
    targets: ['resume.pdf'],
  },
  {
    source: 'hossein_molavi_portfolio.pdf',
    targets: ['portfolio.pdf'],
  },
];

for (const { source, targets } of aliases) {
  const sourceFile = path.join(outDir, source);

  if (!existsSync(sourceFile)) {
    console.error(`make-pdf-aliases: missing source ${source} in ${outDir}`);
    process.exit(1);
  }

  for (const target of targets) {
    const targetFile = path.join(outDir, target);
    mkdirSync(path.dirname(targetFile), { recursive: true });
    cpSync(sourceFile, targetFile);
    console.log(`make-pdf-aliases: aliased ${source} -> ${target}`);
  }
}
