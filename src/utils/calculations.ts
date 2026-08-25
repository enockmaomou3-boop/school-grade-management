import { Student, Grade, Subject } from '../types';

export function computeAverage(
  studentId: string,
  trimestre: string,
  subjects: Subject[],
  grades: Grade[]
): number | null {
  let pts = 0;
  let coefSum = 0;

  subjects.forEach((s) => {
    const g = grades.find(
      (g) => g.studentId === studentId && g.matiere === s.name && g.trimestre === trimestre
    );
    if (g && g.note !== '' && g.note !== null && g.note !== undefined && !isNaN(parseFloat(String(g.note)))) {
      pts += parseFloat(String(g.note)) * s.coef;
      coefSum += s.coef;
    }
  });

  return coefSum > 0 ? pts / coefSum : null;
}

export function classRank(
  classe: string,
  trimestre: string,
  subjects: Subject[],
  students: Student[],
  grades: Grade[],
  studentId: string
): { rank: number | null; total: number } {
  const list = students
    .filter((s) => s.classe === classe)
    .map((s) => ({ id: s.id, avg: computeAverage(s.id, trimestre, subjects, grades) }))
    .filter((x) => x.avg !== null)
    .sort((a, b) => (b.avg || 0) - (a.avg || 0));

  const idx = list.findIndex((x) => x.id === studentId);
  return { rank: idx >= 0 ? idx + 1 : null, total: list.length };
}

export function mention(moy: number | null): { label: string; color: string } {
  if (moy === null) return { label: '—', color: 'var(--ink-soft)' };
  if (moy >= 16) return { label: 'Excellent', color: 'var(--green)' };
  if (moy >= 14) return { label: 'Très Bien', color: 'var(--green)' };
  if (moy >= 12) return { label: 'Bien', color: 'var(--amber)' };
  if (moy >= 10) return { label: 'Assez Bien', color: 'var(--amber)' };
  return { label: 'Insuffisant', color: 'var(--red)' };
}
