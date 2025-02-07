import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18;
  align-items: right;
  height: 20px;
  line-height: 5px;
  padding: 5px;

  &:hover img {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  const icon = `/images/coffee.png`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={icon} width={25} height={25} alt="logo"></Image>
        </LogoBox>
      </a>
    </Link>
  );
};
export default Logo;
