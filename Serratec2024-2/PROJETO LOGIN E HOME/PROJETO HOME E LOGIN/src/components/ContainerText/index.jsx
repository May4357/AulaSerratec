import { ButtonComponents } from "../ButtonComponents";

export const ContainerText = ({ children, nome }) => {
  return (
    <div>
      <h1>Título do modal: {nome}</h1>
      {children}
      <ButtonComponents nome="Botão no ContainerText" />
    </div>
  );
};
