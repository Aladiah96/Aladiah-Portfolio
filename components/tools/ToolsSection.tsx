export default function ToolsSection() {
  return (
    <section>
      <h2 className="text-5xl font-bold mb-6">Tools</h2>
      <div id="daily-tools">
        <h3 className="text-3xl font-bold mb-4">Used daily</h3>
        <div className="mb-8 flex justify-between w-11/12">
          <div id="tool">Salesforce</div>
          <div id="tool">Javascript</div>
          <div id="tool">jQuery</div>
          <div id="tool">Node</div>
          <div id="tool">Express</div>
          <div id="tool">Bitbucket</div>
          <div id="tool">Microsoft Azure</div>
          <div id="tool">Git</div>
          <div id="tool">Linux</div>
          <div id="tool">Jira</div>
          <div id="tool">Jenkins</div>
        </div>
      </div>
      <div id="experienced-tools">
        <h3 className="text-3xl font-bold mb-4">Experienced</h3>
        <div className="mb-8 flex justify-between w-11/12">
          <div id="tool">React</div>
          <div id="tool">Next</div>
          <div id="tool">Shopify</div>
          <div id="tool">MongoDB</div>
          <div id="tool">Python</div>
          <div id="tool">Jenkins</div>
          <div id="tool">Github</div>
          <div id="tool">Jest</div>
          <div id="tool">Typescript</div>
        </div>
      </div>
    </section>
  );
}
