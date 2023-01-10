import styled from "@emotion/styled";

const Container = styled.div`
  height: 35px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Super Deal Free Delivery on Orders Above $50</Container>;
};

export default Announcement;
