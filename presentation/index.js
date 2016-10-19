// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  kat: require("../assets/kat.png")
};

preloader(images);

const theme = createTheme({primary: "#174365", secondary: "#75A0C1"});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Functional Programming and Java
            </Heading>
            <Text textColor="secondary" bold>Daniel Nesbitt</Text>
          </Slide>

          <Slide>
            <Heading caps fit>What is functional programming?</Heading>
            <BlockQuote>
              <Quote textColor="secondary" textSize="1em">Functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.</Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading>Advantages</Heading>
            <List>
              <ListItem bold>side-effect free</ListItem>
              <ListItem bold>modular and composable code</ListItem>
              <ListItem bold>easier flow control</ListItem>
              <ListItem bold>more testable</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading bold fit>Why am hearing more about functional programming?</Heading>
            <Appear fid="1">
              <Text bold fit>Is it a new paradigm?</Text>
            </Appear>
          </Slide>

          <Slide>
            <Heading fit bold>Not by a long shot</Heading>
            <List fit>
              <Appear fid="1">
                <ListItem bold textSize="2em">Lisp - 1950s</ListItem>
              </Appear>
              <Appear fid="2">
                <ListItem bold textSize="2em">ML - 1970s</ListItem>
              </Appear>
              <Appear fid="3">
                <ListItem bold textSize="2em">Haskell - 1990</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Heading>Jargon</Heading>
            <Layout>
              <List padding={10}>
                <ListItem>Arity</ListItem>
                <ListItem>Higher-Order Functions (HOF)</ListItem>
                <ListItem>Partial Application</ListItem>
                <ListItem>Currying</ListItem>
                <ListItem>Function Composition</ListItem>
                <ListItem>Idempotentency</ListItem>
                <ListItem>Predicates</ListItem>
                <ListItem>Functors</ListItem>
                <ListItem>Referential Transparency</ListItem>
              </List>
              <List padding={10}>
                <ListItem>Lambda</ListItem>
                <ListItem>Lazy evaluation</ListItem>
                <ListItem>Monoid</ListItem>
                <ListItem>Monad</ListItem>
                <ListItem>Comonad</ListItem>
                <ListItem>Applicatives</ListItem>
                <ListItem>Isomorphism</ListItem>
                <ListItem>Foldable</ListItem>
                <ListItem>Traversable</ListItem>
              </List>
            </Layout>
          </Slide>

          <Slide>
            <Heading fit>What can we do in Java?</Heading>
          </Slide>

          <Slide>
            <Heading>Lambdas</Heading>
            <CodePane lang="java" textSize="1.5rem" source={require("raw!../assets/lambda.example")} margin="20px auto"/>
          </Slide>

          <Slide>
            <Heading>Lambdas</Heading>
            <List>
              <Appear fid="1">
                <ListItem><b>Function</b> - takes 1 param of <i>T</i> and returns a <i>U</i>.</ListItem>
              </Appear>
              <Appear fid="2">
                <ListItem><b>Predicate</b> - takes 1 param of <i>T</i> and returns a boolean</ListItem>
              </Appear>
              <Appear fid="3">
                <ListItem><b>Supplier</b> - takes no params and returns a <i>T</i>.</ListItem>
              </Appear>
              <Appear fid="4">
                <ListItem><b>Consumer</b> - take 1 param of <i>T</i> and returns void.</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Heading bold fit>Monadic types</Heading>
            <Appear>
              <Heading textColor="secondary" padding={20}>Optional</Heading>
            </Appear>
            <Appear>
              <Heading textColor="secondary" padding={20}>Stream</Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading>Optional</Heading>
            <CodePane lang="java" textSize="1.1rem" source={require("raw!../assets/optional.map.example")} margin="20px auto"/>
          </Slide>

          <Slide>
            <Heading>Optional</Heading>
            <CodePane lang="java" textSize="1.1rem" source={require("raw!../assets/optional.example")} margin="20px auto"/>
          </Slide>

          <Slide>
            <Heading>Optional</Heading>
            <CodePane lang="java" textSize="1.1rem" source={require("raw!../assets/optional.flatMap.example")} margin="20px auto"/>
          </Slide>

          <Slide bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
