function finalGrade (exam, projects) {
  let finalGrade = 0;
  if (exam > 90 || projects > 10) finalGrade = 100;
  else if (exam > 75 && projects >= 5) finalGrade = 90;
  else if (exam > 50 && projects >= 2) finalGrade = 75;
  return finalGrade;
}