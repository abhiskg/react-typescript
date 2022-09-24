import { useEffect, useState } from "react";
import { Student } from "../Student/Student";

interface StudentsData {
  _id: string;
  age: number;
  name: string;
  gender: string;
  company: string;
}

export const Students = () => {
  const [students, setStudents] = useState<[] | StudentsData[]>([]);
  useEffect(() => {
    async function loadStudents() {
      const res = await fetch("data.json");
      const data = await res.json();
      setStudents(data);
    }
    loadStudents();
  }, []);
  console.log(students);
  return (
    <div>
      {students.map((student) => (
        <Student key={student._id} student={student} />
      ))}
    </div>
  );
};
