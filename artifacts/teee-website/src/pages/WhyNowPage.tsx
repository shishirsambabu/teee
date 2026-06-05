import { FadeIn } from "../components/FadeIn";

export default function WhyNowPage() {
  const sections = [
    {
      title: "The Convergence Argument",
      content: "Employee experience, AI adoption, and process design are no longer separate decisions. Trying to solve them in isolation is why most transformations fail. If you deploy AI without redesigning the process, you just speed up a bad workflow. If you focus on employee experience without fixing the underlying tools, you get a ping-pong table approach to culture. They must converge."
    },
    {
      title: "What's at Stake",
      content: "The consequences for waiting are specific and unsentimental. Organizations that delay the integration of intelligence and process redesign will face an insurmountable operational deficit. Your competitors won't necessarily be smarter; they will just execute faster and cheaper. At the same time, top talent will refuse to work in high-friction environments when seamless execution is available elsewhere."
    },
    {
      title: "The Small Business Imperative",
      content: "SMBs face a unique inflection point. Historically, enterprise-grade capability required enterprise-grade capital. That is no longer true. A lean team armed with targeted automation can now out-maneuver larger, slower competitors. But this advantage belongs only to those willing to deliberately redesign how their small teams operate."
    },
    {
      title: "The Human Factor",
      content: "Ultimately, this is not about technology. It is about how people encounter change. The anxiety surrounding AI and automation is largely due to poor implementation and a lack of transparency. When people are trained, empowered, and shown how these systems elevate their own value, the anxiety vanishes. Intelligence is a tool; experience is the outcome."
    }
  ];

  return (
    <div className="w-full pt-32 pb-48">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="mb-24 md:mb-32">
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1]">
              The window for getting ahead of this is closing.
            </h1>
          </div>
        </FadeIn>

        <div className="space-y-24 md:space-y-32">
          {sections.map((section, index) => (
            <FadeIn key={index} delay={0.1}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-24 shrink-0">
                  <span className="text-4xl font-serif text-primary">0{index + 1}</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8 text-foreground">{section.title}</h2>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
