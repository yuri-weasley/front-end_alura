import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao 
            iconeNavegacao="/icones/home-ativo.png" 
            iconeInativo="/icones/home-inativo/png"
            ativo
        >
            Início
          </ItemNavegacao>
          <ItemNavegacao 
            iconeNavegacao="/icones/mais-vistas-ativo.png" 
            iconeInativo="/icones/mais-vistas-inativo/png"
        >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeNavegacao="/icones/mais-curtidas-ativo.png" 
            iconeInativo="/icones/mais-curtidas-inativo/png"
        >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeNavegacao="/icones/novas-ativo.png" 
            iconeInativo="/icones/novas-inativo/png"
        >
            Novas
          </ItemNavegacao>
          <ItemNavegacao 
            iconeNavegacao="/icones/surpreenda-me-ativo.png" 
            iconeInativo="/icones/surpreenda-me-inativo/png"
        >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
