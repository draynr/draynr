import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const gitlet = () => {
  return (
    <Layout title="Gitlet">
      <Container>
        <Title>
          Gitlet
          <Badge> 2022 </Badge>
        </Title>
        <P> copied repository system like git</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link href="www.google.com">github.com </Link>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Java, Git, Object-Orient Programming</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default gitlet;