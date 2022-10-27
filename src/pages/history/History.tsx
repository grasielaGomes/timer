import { differenceInMinutes } from "date-fns";
import {
  HistoryContainer,
  HistoryList,
  Status,
  COLORS as colors,
  LABELS as labels,
  useHistory
} from "./";

export const History = () => {
  const { cyclesSorted } = useHistory();
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              {["Tarefa", "Duração", "Início", "Status"].map((value) => (
                <th key={value}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cyclesSorted.map(
              ({ id, createAt, task, minutesAmount, status }) => {
                const minutes = differenceInMinutes(new Date(), createAt);
                const startedAt = `${minutes} ${
                  minutes > 1 ? "minutos" : "minuto"
                } atrás`;
                const duration = `${minutesAmount} ${
                  minutesAmount > 1 ? "minutos" : "minuto"
                }`;
                return (
                  <tr key={id}>
                    <td>{task}</td>
                    <td>{duration}</td>
                    <td>{startedAt}</td>
                    <td>
                      <Status statusColor={colors[status]}>
                        {labels[status]}
                      </Status>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
