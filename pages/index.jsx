import ActionButton from "../components/buttons/ActionButton.tsx";

export default function Home() {
  const consoleTheLog = () => {
    console.log("clicked");
  };

  return (
    <div>
      <h1 className="text-7xl font-black">
        Hello <span className="text-secondary">World!</span>
      </h1>
      <div className="flex space-x-5 w-full justify-center">
        <p>Blah blah blah and a blah blah</p>
      </div>
      <div className="min-h-[400px] bg-body-color-light-secondary dark:bg-body-color-dark-secondary">
        <h1>Primary Heading</h1>
        <h2>Secondary Heading</h2>
        <h3>Tertiary Heading</h3>
        <h4>Another Heading</h4>
        <div className="flex space-x-4 justify-center">
          <ActionButton
            variant="ghost"
            color="secondary"
            callback={consoleTheLog}>
            Howdy
          </ActionButton>
          <ActionButton
            variant="ghost"
            color="secondary"
            callback={consoleTheLog}>
            Howdy
          </ActionButton>
          <ActionButton callback={consoleTheLog}>Howdy</ActionButton>
        </div>
      </div>
    </div>
  );
}
