import { SortableTree } from './SortableTree';

export const FileTree = () => {
  return (
    <div className="w-full p-4">
      <SortableTree collapsible indicator />
    </div>
  );
};
