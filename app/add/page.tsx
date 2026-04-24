import { add } from '@/content/en/add';

const defaultFormUrl = 'https://formbold.com/s/3GLXp';

function formEmbedUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_FORMBOLD_FORM_URL?.trim();
  if (fromEnv) return fromEnv;
  return defaultFormUrl;
}

export default function AddBusinessPage() {
  const src = formEmbedUrl();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {add.heading} <span className="text-gradient">{add.headingHighlight}</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">{add.subheading}</p>
        </div>

        <p className="text-center text-slate-500 text-sm mb-6 max-w-2xl mx-auto">{add.pilotNote}</p>

        <div className="glass rounded-3xl overflow-hidden border border-slate-200/80">
          <iframe
            title={add.embed.frameTitle}
            src={src}
            className="w-full border-0 bg-white"
            style={{ minHeight: add.embed.minHeightPx }}
            allow="camera; microphone"
          />
        </div>
      </div>
    </div>
  );
}
