import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui';
import { FileTree, SelectProject } from '@/components/features';

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <ResizablePanelGroup
        className="min-h-[200px] w-full"
        direction="horizontal"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full flex-col items-center justify-center p-6">
            <SelectProject />
            <FileTree />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Editor</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
