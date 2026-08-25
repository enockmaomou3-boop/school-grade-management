export interface Student {
  id: string;
  nom: string;
  prenom: string;
  matricule?: string;
  classe: string;
  sexe: 'M' | 'F';
  tuteur?: string;
  telTuteur?: string;
}

export interface Grade {
  studentId: string;
  matiere: string;
  trimestre: string;
  note: string | number;
}

export interface Subject {
  name: string;
  coef: number;
}

export interface AppData {
  students: Student[];
  grades: Grade[];
  subjects: Subject[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: any;
}
