import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Paragraph from "../components/ui/Paragraph";
import Alert from "../components/ui/Alert";
import Loader from "../components/ui/Loader";

export default function DesignSystem() {
  return (
    <div className="space-y-4">
      <section>
        <Heading level={1}>Typography</Heading>
        <Heading level={1}>Heading h1</Heading>
        <Heading level={2}>Heading h2</Heading>
        <Heading level={3}>Heading h3</Heading>
        <Heading level={4}>Heading h4</Heading>
        <Heading level={5}>Heading h5</Heading>
        <Heading level={6}>Heading h6</Heading>
        <Paragraph size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          obcaecati, amet id explicabo suscipit, consequatur laboriosam saepe in
          labore esse placeat consequuntur odio est quam? Ipsam quibusdam
          voluptatem similique autem!
        </Paragraph>
      </section>
      <hr />
      <section>
        <Heading level={1}>Buttons</Heading>
        <Button>Primary</Button> <br />
        <Button variant="secondary">Secondary</Button> <br />
        <Button variant="secondary" size="lg">
          Secondary Large
        </Button>
        <br />
        <Button variant="primary" size="sm">
          Primary Small
        </Button>
      </section>
      <hr />
      <section>
        <Heading level={1}>Card</Heading>
        <div className="w-96">
          <Card
            image="http://localhost:3001/books/moby_dick.jpg"
            title="Titolo Libro"
            content="prova"
          />
        </div>
      </section>
      <hr />
      <section>
        <Heading level={1}>Alert</Heading>
        <Alert title="Prova Alert" text="Testo all'interno dell'alert" />
      </section>
      <section>
        <Heading level={1}>Loader</Heading>
        <Loader />
      </section>
    </div>
  );
}
