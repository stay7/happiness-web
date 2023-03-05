import styled from "styled-components";
import { Avatar } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../state/userState";
import { Dropdown } from "react-bootstrap";
import { accountBooksState, selectedAccountBookState } from "../../state/accountBookState";

export const Profile = () => {
  const user = useRecoilValue(userState);
  const accountBooks = useRecoilValue(accountBooksState);
  const [selectedAccountBook, selectAccountBook] = useRecoilState(selectedAccountBookState);

  return (
    <Container>
      <div>
        <Avatar />
      </div>
      <div>
        <Nickname
          style={{
            paddingLeft: "0.75rem",
          }}
        >
          {user?.nickname}
        </Nickname>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: "transparent",
              color: "black",
              border: "0px",
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            {selectedAccountBook?.title}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {accountBooks.map((accountBook) => (
              <Dropdown.Item
                onClick={() => selectAccountBook(accountBook)}
                style={{
                  fontSize: "14px",
                  lineHeight: "21px",
                }}
              >
                {accountBook.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fffefa;
  border-radius: 10px;
  opacity: 0.8;
`;

const Nickname = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: black;
`;
