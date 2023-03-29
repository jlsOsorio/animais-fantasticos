export default function initFuncionamento() {}

// const agora = new Date();
// console.log(agora);
// console.log(agora.getDate()); //Dia do mês
// console.log(agora.getDay()); //0 a 6, onde 0 é Domingo
// console.log(agora.getMonth()); //0 a 11

// const futuro = new Date('Dec 24 2023');
// console.log(futuro);

// console.log(agora.getTime());
// console.log(futuro.getTime());

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(diasFuturo - diasAgora);

const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

console.log(diasSemana);
console.log(horarioSemana);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();
console.log(horarioAgora);
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
const horarioAberto =
  horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
console.log(semanaAberto);
console.log(horarioAberto);

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add("aberto");
}
