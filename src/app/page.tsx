import { Greet, SelectProject } from '@/components/features';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Greet name="Sang" />

        <SelectProject />
      </div>
    </main>
  );
}
