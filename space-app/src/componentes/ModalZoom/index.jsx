import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const dialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
`;

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <dialogEstilizado open={!!foto}>
            <Imagem foto={foto} expandida={true} />
            <form method="dialog">
              <button>OK</button>
            </form>
          </dialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
