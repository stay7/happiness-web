import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { accountBooksState, selectedAccountBookState } from "../../state/accountBookState";
import { Category } from "../../domain/accountBook/category";

export const CategoryTab = () => {
  const accountBook = useRecoilValue(selectedAccountBookState);

  return (
    <Container>
      {accountBook?.categories.map((value) => (
        <CategoryView category={value} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  flex: 3;
  background-color: #f1f1f1;
`;

interface ICategoryViewProp {
  category: Category;
}

const CategoryView = ({ category }: ICategoryViewProp) => {
  return (
    <>
      <div>{category.name}</div>
      <div>
        {category.subCategories?.map((value) => (
          <div>*{value.name}</div>
        ))}
      </div>
    </>
  );
};
