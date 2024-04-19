'use client';

import { invoke } from '@tauri-apps/api/core';
import { useEffect, useState } from 'react';

type GreetProps = {
  name: string;
};

export function Greet({ name }: GreetProps) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    invoke<string>('greet', { name })
      .then((result) => setGreeting(result))
      .catch(console.error);
  }, [name]);

  // Necessary because we will have to use Greet as a component later.
  return <div>{greeting}</div>;
}
