import Heading from "./Heading";
import Section from "./Section";

export default function App() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <Allposts />
    </Section>
  );
}

function Allposts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPost></RecentPost>
    </Section>
  );
}

function RecentPost() {
  return (
    <Section>
      <Heading>Recent Post</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Section>
  );
}

type Post = {
  title: string;
  body: string;
};

function Post({ title, body }: Post) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}
