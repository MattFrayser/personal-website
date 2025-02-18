import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'projects.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const results = Papa.parse(fileContent, { header: true, skipEmptyLines: true });
  return results.data.map(project => ({ id: project.id }));
}