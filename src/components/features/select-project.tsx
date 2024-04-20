import { readDir, BaseDirectory, DirEntry } from '@tauri-apps/plugin-fs';
import { open } from '@tauri-apps/plugin-dialog';
import { Button, Text } from '@/components/ui';
import { useState } from 'react';

// type SelectProjectProps = {}

export const SelectProject = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const handleSelectFolder = async () => {
    const dirPath = await open({
      directory: true,
    });

    console.log('### what: ', {
      dirPath,
      dir: BaseDirectory.Home,
    });

    if (!dirPath) {
      return;
    }

    setSelectedPath(dirPath);

    const entries = await readDir(dirPath);

    for (const entry of entries) {
      if (entry.isFile) {
        console.log(`Found file: ${entry.name}`);
        // } else if (entry.isDirectory && entry.children) {
        // await readDirectory(entry.path); // Recursive call for subdirectories
      }
    }
  };
  return (
    <div className="flex flex-col">
      <Button onClick={handleSelectFolder}>Select Project</Button>
      {selectedPath && <Text variant="muted">{selectedPath}</Text>}
    </div>
  );
};

export async function processEntriesRecursive(
  parent: string,
  entries: DirEntry[]
) {
  for (const entry of entries) {
    console.log(`Entry: ${entry.name}`);
    if (entry.isDirectory) {
      const dir = parent + entry.name;
      processEntriesRecursive(
        dir,
        await readDir(dir, { baseDir: BaseDirectory.Home })
      );
    }
  }
}
