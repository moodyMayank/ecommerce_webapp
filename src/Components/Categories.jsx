import styled from "styled-components";
import { categories } from "../data";
import CatergoryItem from "./CatergoryItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => {
        return <CatergoryItem item={category} key={category.id} />;
      })}
    </Container>
  );
};

export default Categories;
