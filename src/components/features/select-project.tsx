import { open } from '@tauri-apps/plugin-dialog';
import { Button } from '@/components/ui';

// type SelectProjectProps = {}

export const SelectProject = () => {
  const handleClick = async () => {
    const folder = await open({
      directory: true,
    });

    console.log('### folder: ', { folder });
  };
  return <Button onClick={handleClick}>Select Project</Button>;
};
