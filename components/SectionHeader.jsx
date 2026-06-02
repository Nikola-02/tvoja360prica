export default function SectionHeader({ title, description }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      <div className="gold-line mb-6" />
      <h2 className="heading text-[2rem] md:text-[2.75rem] text-[#0f0f0f]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 body-lg text-base md:text-lg max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
